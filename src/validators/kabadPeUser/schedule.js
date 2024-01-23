import { object, string, date, number } from "yup";
export const validationSchedulePickup = object().shape({
  appointmentContactNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  appointmentPersonName: string().required(),
  frequency: string().required(),
  estimateWeight: string().required(),
  serviceType: string().required(),
});
