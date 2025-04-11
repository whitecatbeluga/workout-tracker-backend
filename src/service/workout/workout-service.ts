import * as WorkoutRepository from "../../repository/workout/workout-repository";
import CustomError from "../../utils/custom-error";
import { WorkoutType } from "../../types/workout-type";
import { Exercises } from "../../types/exercises-type";

export const getWorkout = async () => {
  return await WorkoutRepository.getWorkout();
};

export const getById = async (id: number) => {
  const workout = await WorkoutRepository.getById(id);
  if (!workout) {
    throw new CustomError("No workout found.", 404);
  }
  return workout;
};

export const updateById = async (
  id: number,
  workout: WorkoutType,
  exerciseIds: number[]
) => {
  const existingWorkout = await WorkoutRepository.getById(id);
  if (!existingWorkout) {
    throw new CustomError("Workout doesn't exist.", 400);
  }
  const updatedWorkout = await WorkoutRepository.updateById(
    id,
    workout,
    exerciseIds
  );
  if (!updatedWorkout) {
    throw new CustomError("No workout found.", 400);
  }
  return updatedWorkout;
};

export const deletedById = async (id: number) => {
  const existingWorkout = await WorkoutRepository.getById(id);
  if (!existingWorkout) {
    throw new CustomError("Workout doesn't exist.", 400);
  }
  const deletedWorkout = await WorkoutRepository.deletedById(id);
  return deletedWorkout;
};
