import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminfranchisePlansFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/franchise/plans`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});

export const adminIndPlansFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/ind/plans`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});
