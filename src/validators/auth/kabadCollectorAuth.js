import { object, string, number } from "yup";
export const validationSignupCollector = object().shape({
  fullname: string().required(),
  emergencyPhone: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  // panNo: string().required(),
  // ifsc: string().required(),
  // bankAccountNumber: number().required(),
  // bankName: string().required(),
  // saftyTrainingDate: string().required(),
  // heathCheckupDate: string().required(),
  // policeVerification: string().required(),
  companyRef: string(),
  // insurance: string(),
  // aadharBack: string().required(),
  // aadharFront: string().required(),
  workCity: string().required(),
  // religion: string().required(),
  // caste: string().required(),
  // dob: string().required(),
  email: string().email(),
  password: string().required(),
  pincode: number().required(),
  workerRole: string().required(),
  phoneNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
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
