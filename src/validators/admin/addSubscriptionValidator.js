import { boolean, number, object, string } from "yup";

export const validationAddSubs = object().shape({
  planeName: string().required(),
  monthlyPrice: number().required(),
  quaterlyPrice: number().required(),
  collectorCount: number().required(),
});
