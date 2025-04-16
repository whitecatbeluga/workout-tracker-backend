import prisma from "../../utils/prisma";
import { WorkoutType } from "../../types/workout-type";
import CustomError from "../../utils/custom-error";

export const getWorkout = async (userId: number) => {
  return await prisma.workout.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      exercises: {
        include: {
          exercise: true,
        },
      },
    },
  });
};

export const getById = async (id: number) => {
  return await prisma.workout.findFirst({
    where: {
      id,
    },
    include: {
      exercises: {
        include: {
          exercise: true,
        },
      },
    },
  });
};

export const updateById = async (
  id: number,
  workout: WorkoutType,
  exerciseIds: number[]
) => {
  if (exerciseIds.length === 0) {
    throw new CustomError("You must provide at least one exercise.", 400);
  }

  const existingPivots = await prisma.workoutExercisePivot.findMany({
    where: { workoutId: id },
    select: { id: true, exerciseId: true },
  });

  // Find pivots to remove
  const toDelete = existingPivots.filter(
    (pivot) => !exerciseIds.includes(pivot.exerciseId)
  );

  // Find new exercises to add
  const existingExerciseIds = existingPivots.map((pivot) => pivot.exerciseId);
  const toCreate = exerciseIds.filter(
    (exerciseId) => !existingExerciseIds.includes(exerciseId)
  );

  const updatedWorkout = await prisma.$transaction(async (tx) => {
    // 1. Delete obsolete pivots
    if (toDelete.length > 0) {
      await tx.workoutExercisePivot.deleteMany({
        where: {
          id: { in: toDelete.map((pivot) => pivot.id) },
        },
      });
    }

    // 2. Create new pivots
    if (toCreate.length > 0) {
      await tx.workoutExercisePivot.createMany({
        data: toCreate.map((exerciseId) => ({
          workoutId: id,
          exerciseId,
        })),
        skipDuplicates: true,
      });
    }

    // 3. Update the workout metadata
    return await tx.workout.update({
      where: { id },
      data: {
        name: workout.name,
        description: workout.description,
        duration: workout.duration,
        intensity: workout.intensity,
        volume: workout.volume,
        set: workout.set,
      },
      include: {
        exercises: {
          include: {
            exercise: true,
          },
        },
      },
    });
  });

  return updatedWorkout;
};

export const deleteById = async (id: number) => {
  return await prisma.workout.delete({
    where: {
      id,
    },
  });
};
