import { object, string, number } from "yup";
export const validationSignupCollector = object().shape({
  fullname: string().required(),
  email: string().required().email(),
  password: string().required(),
  pincode: number().required(),
  phoneNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

export const validationLoginCollector = object().shape({
  email: string().required().email(),
  password: string().required(),
});

export const validationVerifyOtpCollector = object().shape({
  otp: number().required(),
});
