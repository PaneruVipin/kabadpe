import { object, string, date } from "yup";
export const validationSchedulePickup = object().shape({
  appointmentAddress: string().required(),
  appointmentContactNumber: string()
    .required()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  appointmentPersonName: string().required(),
  appointmentTimeSlot: string().required(),
  appointmentDate: date().required(),
});
