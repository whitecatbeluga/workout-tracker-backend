import { object, string, number, array } from "yup";

export const workoutSchema = object().shape({
  name: string().required("Name is required"),
  description: string().required("Description is required"),
  duration: number().required("Duration is required"),
  intensity: number().required("Intensity is required"),
  volume: number().required("Volume is required"),
  set: number().required("Set is required"),
  exerciseIds: array()
    .of(number().required("Each exercise ID must be a number"))
    .min(1, "At least one exercise is required")
    .required("Exercise list is required"),
});
