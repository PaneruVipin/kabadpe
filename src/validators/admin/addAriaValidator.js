import { boolean, number, object, string } from "yup";

export const validationAddAria = object().shape({
  ariaName: string().required(),
  subAriaName: string().required(),
  pincode: string().required(),
  state: string().required(),
  city: string().required(),
  price:number().required()
});
