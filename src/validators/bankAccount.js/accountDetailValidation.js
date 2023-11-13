import { object, string } from "yup";

export const accountDetailSchema = object().shape({
  bankName: string().required(),
  accountHolderName: string().required(),
  accountNumber: string().required(),
  IFSCCode: string().required(),
});
