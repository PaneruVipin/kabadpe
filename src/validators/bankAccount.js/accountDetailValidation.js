import { object, string } from "yup";

export const accountDetailSchema = object().shape({
  bankName: string().required("Bank name is required"),
  accountHolderName: string().required("Account holder name is required"),
  accountNumber: string().required("Account number is required"),
  IFSCCode: string().required("IFSC code is required"),
});
