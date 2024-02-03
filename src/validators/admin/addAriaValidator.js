import { boolean, number, object, string } from "yup";

export const validationAddAria = object().shape({
  ariaName: string().required("Aria name is required"),
  subAriaName: string().required("Sub aria name is required"),
  pincode: string().required("Pincode is required"),
  state: string().required("State is required"),
  city: string().required("City is required"),
  monthlyPrice: number().required("Monthly price is required"),
  quaterlyPrice: number().required("Quaterly price is required"),
});

