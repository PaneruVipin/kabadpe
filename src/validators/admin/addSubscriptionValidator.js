import { boolean, number, object, string } from "yup";

export const validationAddSubs = object().shape({
  planeName: string().required("Plan name is required"),
  monthlyPrice: number().required("Monthly price is required"),
  quaterlyPrice: number().required("Quarterly price is required"),
  collectorCount: number().required("Collector count is required"),
});
