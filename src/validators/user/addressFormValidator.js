import { object, string, date, number } from "yup";

export const validationAddressForm = object().shape({
  street: string().required("Street is required"),
  city: string().required("City is required"),
  state: string().required("State is required"),
  zipCode: number().required("Zip code is required"),
  landmark: string().optional().nullable(),
  locationType: string().required("Location type is required"),
  aria: string().required("Area is required"),
  subAria: string().required("Sub aria is required"),
});
