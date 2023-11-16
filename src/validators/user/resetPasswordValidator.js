import { object, ref, string } from "yup";

export const resetpasswordValidation = object().shape({
  newPassword: string().required("Password is required"),
  confirmNewPassword: string()
    .required("Confirm Password is required")
    .oneOf([ref("newPassword"), null], "Passwords must match"),
});
