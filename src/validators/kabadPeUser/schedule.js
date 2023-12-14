import { object, string, date, number } from "yup";
export const validationSchedulePickup = object().shape({
  formatedAddress: string().required(),
  appointmentContactNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  appointmentPersonName: string().required(),
  appointmentTimeSlot: string().required(),
  appointmentDate: date().required(),
  pincode: number().required(),
});
