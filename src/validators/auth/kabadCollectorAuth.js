import { object, string, number } from "yup";

export const validationSignupCollector = object().shape({
  fullname: string().required("Full name is required"),
  emergencyPhone: string()
    .required("Emergency phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  companyRef: string(),
  email: string().email("Invalid email address"),
  password: string().required("Password is required"),
  pincode: number().required("Pincode is required"),
  workerRole: string().required("Worker role is required"),
  phoneNumber: string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  ariaName: string().required("Aria name is required"),
  subAriaName: string().required("Sub aria name is required"),
});

export const validationLoginCollector = object().shape({
  phoneNumber: string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  password: string().required("Password is required"),
});

export const validationVerifyOtpCollector = object().shape({
  otp: number().required("OTP is required"),
});
