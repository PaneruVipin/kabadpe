import { object, string, date, number } from "yup";
export const validationAddressForm = object().shape({
  street: string().required(),
  city: string().required(),
  state: string().required(),
  zipCode: number().required(),
  landmark: string().required(),
  locationType: string().required(),
});
