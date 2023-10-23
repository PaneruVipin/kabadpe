import { object, string, number } from "yup";
export const validationSignupUser = object().shape({
  fullname: string().required(),
  email: string().required().email(),
  password: string().required(),
  phoneNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

export const validationLoginUser = object().shape({
  email: string().required().email(),
  password: string().required(),
});

export const validationVerifyOtpUser = object().shape({
  otp: number().required(),
});
