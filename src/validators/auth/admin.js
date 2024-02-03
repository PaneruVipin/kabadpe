import { boolean, object, string } from "yup";

export const validationLoginAdmin = object().shape({
  email: string().required("Email is required").email("Invalid email format"),
  password: string().required("Password is required"),
  rememberMe: boolean(),
});

