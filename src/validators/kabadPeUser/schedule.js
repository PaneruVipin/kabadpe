import { object, string } from "yup";

export const validationSchedulePickup = object().shape({
  appointmentContactNumber: string()
    .required("Appointment contact number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  appointmentPersonName: string().required("Appointment person name is required"),
  frequency: string().required("Frequency is required"),
  estimateWeight: string().required("Estimated weight is required"),
  serviceType: string().required("Service type is required"),
});

