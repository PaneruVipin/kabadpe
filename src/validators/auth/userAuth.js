import { object, string, number } from "yup";

export const validationSignupUser = object().shape({
  fullname: string().required("Fullname is required"),
  email: string().required("Email is required").email("Invalid email format"),
  password: string().required("Password is required"),
  phoneNumber: string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

export const validationLoginUser = object().shape({
  email: string().required("Email is required").email("Invalid email format"),
  password: string().required("Password is required"),
});

export const validationVerifyOtpUser = object().shape({
  otp: number().required("OTP is required"),
});
