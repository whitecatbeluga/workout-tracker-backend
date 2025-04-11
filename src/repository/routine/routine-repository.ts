import { RoutineType } from "../../types/routine-type";
import CustomError from "../../utils/custom-error";
import prisma from "../../utils/prisma";

const workoutInclude = {
  exercises: {
    include: {
      exercise: true,
    },
  },
};

export const getRoutine = async () => {
  const routines = await prisma.routine.findMany({
    include: {
      workouts: {
        include: {
          workout: {
            include: workoutInclude,
          },
        },
      },
      RoutineExercisePivot: {
        include: {
          exercise: true,
        },
      },
    },
  });
  const transformedRoutines = routines.map(
    ({ RoutineExercisePivot, ...rest }) => ({
      ...rest,
      exercises: RoutineExercisePivot.map((pivot) => pivot.exercise),
    })
  );
  return transformedRoutines;
};

export const createRoutine = async (
  userId: number,
  routine: RoutineType,
  workoutIds: number[],
  exerciseIds: number[]
) => {
  const newRoutine = await prisma.routine.create({
    data: {
      name: routine.name,
      description: routine.description,
      user: {
        connect: { id: userId },
      },
    },
  });

  if (workoutIds.length > 0) {
    await prisma.routineWorkoutPivot.createMany({
      data: workoutIds.map((workoutId) => ({
        routineId: newRoutine.id,
        workoutId,
      })),
    });
  }
  if (exerciseIds.length > 0) {
    await prisma.routineExercisePivot.createMany({
      data: exerciseIds.map((exerciseId) => ({
        routineId: newRoutine.id,
        exerciseId,
      })),
    });
  }

  const routineWithWorkoutExercise = await prisma.routine.findUnique({
    where: {
      id: newRoutine.id,
    },
    include: {
      workouts: {
        include: {
          workout: true,
        },
      },
      RoutineExercisePivot: {
        include: {
          exercise: true,
        },
      },
    },
  });

  if (!routineWithWorkoutExercise)
    throw new CustomError("Routine not found after creation", 400);
  const { RoutineExercisePivot, ...rest } = routineWithWorkoutExercise;

  return {
    ...rest,
    exercises: RoutineExercisePivot.map((pivot) => pivot.exercise),
  };
};

export const getById = async (id: number) => {
  return await prisma.routine.findFirst({
    where: {
      id,
    },
    include: {
      workouts: {
        include: {
          workout: {
            include: workoutInclude,
          },
        },
      },
    },
  });
};

export const updateById = async (
  id: number,
  routine: RoutineType,
  workoutIds: number[],
  exerciseIds: number[]
) => {
  if (exerciseIds.length === 0) {
    throw new CustomError("You must provide at least one exercise", 400);
  }

  const existingExercisePivots = await prisma.routineExercisePivot.findMany({
    where: { routineId: id },
    select: { id: true, exerciseId: true },
  });

  const existingWorkoutPivots = await prisma.routineWorkoutPivot.findMany({
    where: { routineId: id },
    select: { id: true, workoutId: true },
  });

  const toDeleteExercises = existingExercisePivots.filter(
    (pivot) => !exerciseIds.includes(pivot.exerciseId)
  );
  const existingExerciseIds = existingExercisePivots.map((p) => p.exerciseId);
  const toCreateExercises = exerciseIds.filter(
    (id) => !existingExerciseIds.includes(id)
  );

  const toDeleteWorkouts = existingWorkoutPivots.filter(
    (pivot) => !workoutIds.includes(pivot.workoutId)
  );
  const existingWorkoutIds = existingWorkoutPivots.map((p) => p.workoutId);
  const toCreateWorkouts = workoutIds.filter(
    (id) => !existingWorkoutIds.includes(id)
  );

  const updatedRoutine = await prisma.$transaction(async (tx) => {
    if (toDeleteExercises.length > 0) {
      await tx.routineExercisePivot.deleteMany({
        where: {
          id: { in: toDeleteExercises.map((p) => p.id) },
        },
      });
    }

    if (toCreateExercises.length > 0) {
      await tx.routineExercisePivot.createMany({
        data: toCreateExercises.map((exerciseId) => ({
          routineId: id,
          exerciseId,
        })),
        skipDuplicates: true,
      });
    }

    if (toDeleteWorkouts.length > 0) {
      await tx.routineWorkoutPivot.deleteMany({
        where: {
          id: { in: toDeleteWorkouts.map((p) => p.id) },
        },
      });
    }

    if (toCreateWorkouts.length > 0) {
      await tx.routineWorkoutPivot.createMany({
        data: toCreateWorkouts.map((workoutId) => ({
          routineId: id,
          workoutId,
        })),
        skipDuplicates: true,
      });
    }

    return await tx.routine.update({
      where: { id },
      data: {
        name: routine.name,
        description: routine.description,
      },
      include: {
        workouts: {
          include: {
            workout: true,
          },
        },
        RoutineExercisePivot: {
          include: {
            exercise: true,
          },
        },
      },
    });
  });

  const { RoutineExercisePivot, ...rest } = updatedRoutine;
  return {
    ...rest,
    exercises: RoutineExercisePivot.map((pivot) => pivot.exercise),
  };
};

export const deleteById = async (id: number) => {
  return await prisma.routine.delete({
    where: { id },
  });
};
