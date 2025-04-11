import * as RoutineRepository from "../../repository/routine/routine-repository";
import { RoutineType } from "../../types/routine-type";
import CustomError from "../../utils/custom-error";

export const getRoutine = async () => {
  return await RoutineRepository.getRoutine();
};

export const createRoutine = async (
  userId: number,
  routine: RoutineType,
  workoutIds: number[],
  exerciseIds: number[]
) => {
  return RoutineRepository.createRoutine(
    userId,
    routine,
    workoutIds,
    exerciseIds
  );
};

export const getById = async (id: number) => {
  const routine = await RoutineRepository.getById(id);
  if (!routine) throw new CustomError("No routine found", 404);
  return routine;
};

export const updateById = async (
  id: number,
  routine: RoutineType,
  workoutIds: number[],
  exerciseIds: number[]
) => {
  const existingRoutine = await RoutineRepository.getById(id);
  if (!existingRoutine) throw new CustomError("Routine doesn't exist.", 400);

  const updateRoutine = await RoutineRepository.updateById(
    id,
    routine,
    workoutIds,
    exerciseIds
  );
  if (!updateRoutine) throw new CustomError("No routine found.", 400);

  return updateRoutine;
};

export const deleteById = async (id: number) => {
  const existingRoutine = await RoutineRepository.getById(id);
  if (!existingRoutine) throw new CustomError("Routine doesn't exist", 400);
  return await RoutineRepository.deleteById(id);
};
