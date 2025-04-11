import { object, string, number } from "yup";

export const authRegisterSchema = object().shape({
  email: string().required("Email is required."),
  password: string().required("Password is required."),
  last_name: string().required("Lastname is required."),
  first_name: string().required("Firstname is required."),
  user_name: string().required("Username is required."),
  address: string().required("Address is required."),
  gender: string().required("Gender is required."),
  age: number().required("Age is required."),
  height: number().required("Height is required."),
  weight: number().required("Height is required."),
  bmi: number().required("BMI is required."),
  activity_level: number(),
  user_type: string(),
});
