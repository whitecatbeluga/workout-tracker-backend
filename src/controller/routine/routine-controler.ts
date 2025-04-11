import { Request, Response } from "express";
import * as RoutineService from "../../service/routine/routine-service";
import { routineSchema } from "../../utils/validation/routine-validation";
import { ValidationError } from "yup";
import CustomError from "../../utils/custom-error";

export const getRoutine = async (req: Request, res: Response) => {
  if (!req.user || !req.user.id)
    return res
      .status(400)
      .json({ message: "User not authenticated or user ID not found." });
  const userRoutine = await RoutineService.getRoutine();

  if (!userRoutine)
    return res
      .status(400)
      .json({ message: "Routine not found for this user." });
  return res.json(userRoutine);
};

export const createRoutine = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    const { name, description, workoutIds, exerciseIds } = req.body;

    await routineSchema.validate(
      {
        name,
        description,
        workoutIds,
        exerciseIds,
      },
      { abortEarly: false }
    );

    const newRoutine = await RoutineService.createRoutine(
      userId,
      {
        name,
        description,
        workoutIds,
        exerciseIds,
      },
      workoutIds,
      exerciseIds
    );

    return res.json(newRoutine);
  } catch (error) {
    console.log("error", error);
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

export const getById = async (req: Request, res: Response) => {};

export const updateRoutine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, description, workoutIds, exerciseIds } = req.body;

    await routineSchema.validate(
      {
        name,
        description,
        workoutIds,
        exerciseIds,
      },
      { abortEarly: false }
    );

    const updateRoutine = await RoutineService.updateById(
      parseInt(id),
      {
        name,
        description,
        workoutIds,
        exerciseIds,
      },
      workoutIds,
      exerciseIds
    );

    return res
      .status(200)
      .json({ message: "Routine successfully updated.", updateRoutine });
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
export const deleteRoutine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await RoutineService.deleteById(parseInt(id));

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
