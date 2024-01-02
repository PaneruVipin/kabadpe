import { number, object, ref, string } from "yup";

export const validationUpdateProfileRequest = object().shape({
  fullname: string().required(),
  email: string().required().email(),
  phoneNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

export const validationUpdateProfilecallback = object().shape({
  otp: number().required("OTP Required"),
});
