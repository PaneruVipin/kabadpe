import { object, string, number } from "yup";
export const validationSignupCollector = object().shape({
  fullname: string().required(),
  emergencyPhone: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  companyRef: string(),
  email: string().email(),
  password: string().required(),
  pincode: number().required(),
  workerRole: string().required(),
  phoneNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  ariaName: string().required(),
  subAriaName: string().required(),
});

export const validationLoginCollector = object().shape({
  phoneNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  password: string().required(),
});

export const validationVerifyOtpCollector = object().shape({
  otp: number().required(),
});
