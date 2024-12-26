import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminVendorPlanAdd = resolvePromise(async ({ id, ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/admin/vendor/plan/${id}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(apiUrl, data, {
    headers: {
      Authorization: token,
    },
  });
  return res?.message;
});

export const adminVendorPlansFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/vendor/plans`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.plans;
});
