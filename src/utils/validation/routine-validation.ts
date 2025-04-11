import { array, number, object, string } from "yup";

export const routineSchema = object().shape({
  name: string().required("Name is required."),
  description: string().required("Description is required."),
  workoutIds: array()
    .of(number().required("Each workout ID must be a number"))
    .min(1, "At least one workout is required")
    .required("Workout list is required"),
  exerciseIds: array()
    .of(number().required("Each exercise ID must be a number"))
    .min(1, "At least one exercise is required")
    .required("Exercise list is required"),
});
