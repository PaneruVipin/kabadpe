import { object, string, number, ref } from "yup";
export const validationSignupFranchise = object().shape({
  fullname: string().required(),
  email: string().required().email(),
  password: string().required(),
  phoneNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  gst: string(),
  companyName: string().required(),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  franchiseAddress: string().required(),
});

export const validationLoginFranchise = object().shape({
  email: string().required().email(),
  password: string().required(),
});

export const validationVerifyOtpUser = object().shape({
  otp: number().required(),
});
