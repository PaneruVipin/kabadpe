import { date, object, string } from "yup";

export const cardDetailSchema = object().shape({
  CVV: string().required(),
  cardNumber: string().required(),
  cardHolderName: string().required(),
  expiryDate: date().required(),
  cardType: string().required(),
});
