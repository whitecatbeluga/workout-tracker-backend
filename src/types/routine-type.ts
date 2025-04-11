import { UserType } from "./user-type";

export interface RoutineType {
  name: string;
  description: string;
  workoutIds: number[];
  exerciseIds: number[];
}
