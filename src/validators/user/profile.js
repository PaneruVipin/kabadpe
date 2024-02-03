import { number, object, ref, string } from "yup";

export const validationUpdateProfileRequest = object().shape({
  fullname: string().required("Fullname is required"),
  email: string().required("Email is required").email("Invalid email format"),
  phoneNumber: string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

export const validationUpdateProfilecallback = object().shape({
  otp: number().required("OTP is required"),
});
