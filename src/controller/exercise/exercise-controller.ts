import { Request, Response } from "express";
import { ValidationError } from "yup";
import CustomError from "../../utils/custom-error";
import prisma from "../../utils/prisma";

export const getExercises = async (req: Request, res: Response) => {
  try {
    const exercises = await prisma.exercise.findMany({});
    return res.status(200).json(exercises);
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
