import { Request, Response } from "express";

import * as WorkoutService from "../../service/workout/workout-service";
import prisma from "../../utils/prisma";
import { workoutSchema } from "../../utils/validation/workout-validation";
import { ValidationError } from "yup";
import CustomError from "../../utils/custom-error";

export const getWorkout = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  if (!req.user || !req.user.id) {
    return res
      .status(400)
      .json({ message: "User not authenticated or user ID not found" });
  }

  const userWorkout = await WorkoutService.getWorkout(userId);

  if (!userWorkout) {
    return res
      .status(404)
      .json({ message: "Workouts not found for this user" });
  }

  return res.json(userWorkout);
};

export const createWorkout = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    const { name, description, duration, intensity, volume, set, exerciseIds } =
      req.body;
    await workoutSchema.validate(
      {
        name,
        description,
        duration,
        intensity,
        volume,
        set,
        exerciseIds,
      },
      { abortEarly: false }
    );

    const newWorkout = await prisma.workout.create({
      data: {
        userId,
        name,
        description,
        duration,
        intensity,
        volume,
        set,
        exercises: {
          create: exerciseIds.map((exerciseId: number) => ({
            exercise: {
              connect: { id: exerciseId },
            },
          })),
        },
      },
      include: {
        exercises: {
          include: {
            exercise: true,
          },
        },
      },
    });

    return res.status(201).json(newWorkout);
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.inner.map((err) => err.message),
      });
    }

    if (error instanceof CustomError) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const workout = await WorkoutService.getById(parseInt(id));
    return res.json(workout);
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.inner.map((err) => err.message),
      });
    }

    if (error instanceof CustomError) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const updateWorkout = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, duration, intensity, volume, set, exerciseIds } =
      req.body;
    await workoutSchema.validate({
      name,
      description,
      duration,
      intensity,
      volume,
      set,
      exerciseIds,
    });

    const updatedWorkout = await WorkoutService.updateById(
      parseInt(id),
      {
        name,
        description,
        duration,
        intensity,
        volume,
        set,
      },
      exerciseIds
    );

    return res
      .status(200)
      .json({ message: "Workout successfully updated", updatedWorkout });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.inner.map((err) => err.message),
      });
    }

    if (error instanceof CustomError) {
      return res.status(error.status).json({ message: error.message });
    }
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const deleteWorkout = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await WorkoutService.deleteById(parseInt(id));

    return res.status(200).json({ message: "Workout successfully deleted" });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.inner.map((err) => err.message),
      });
    }

    if (error instanceof CustomError) {
      return res.status(error.status).json({ message: error.message });
    }
    return res.status(500).json({ message: "Something went wrong." });
  }
};
