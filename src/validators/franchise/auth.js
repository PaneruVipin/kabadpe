import { object, string, number, ref } from "yup";

export const validationSignupFranchise = object().shape({
  fullname: string().required("Fullname is required"),
  email: string().required("Email is required").email("Invalid email format"),
  password: string().required("Password is required"),
  phoneNumber: string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  gst: string(),
  companyName: string().required("Company name is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  franchiseAddress: string().required("Franchise address is required"),
});

export const validationLoginFranchise = object().shape({
  email: string().required("Email is required").email("Invalid email format"),
  password: string().required("Password is required"),
});

export const validationVerifyOtpUser = object().shape({
  otp: number().required("OTP is required"),
});
