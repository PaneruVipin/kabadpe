import { boolean, object, string } from "yup";

export const validationLoginAdmin = object().shape({
  email: string().required().email(),
  password: string().required(),
  rememberMe: boolean(),
});
