import { date, object, string } from "yup";

export const cardDetailSchema = object().shape({
  CVV: string().required("CVV is required"),
  cardNumber: string().required("Card number is required"),
  cardHolderName: string().required("Cardholder name is required"),
  expiryDate: date().required("Expiry date is required"),
  cardType: string().required("Card type is required"),
});
