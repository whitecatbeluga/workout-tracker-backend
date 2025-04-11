import { object, string } from "yup";

export const authLoginSchema = object().shape({
  email: string().required("Email is required."),
  password: string().required("Password is required"),
});
