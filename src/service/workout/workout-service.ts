import * as WorkoutRepository from "../../repository/workout/workout-repository";
import CustomError from "../../utils/custom-error";
import { WorkoutType } from "../../types/workout-type";

export const getWorkout = async (userId:number) => {
  return await WorkoutRepository.getWorkout(userId);
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

export const deleteById = async (id: number) => {
  const existingWorkout = await WorkoutRepository.getById(id);
  if (!existingWorkout) {
    throw new CustomError("Workout doesn't exist.", 400);
  }
  return await WorkoutRepository.deleteById(id);
};
