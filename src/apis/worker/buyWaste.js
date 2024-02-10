import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const workerRateListFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + "/worker/ratelist";
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.rates;
});

export const workerBuyWasteRequest = resolvePromise(async ({ phoneNumber }) => {
  const apiUrl = ENV_API_BASE_URL + "/worker/buy/request";
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.put(
    apiUrl,
    { phoneNumber },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res;
});

export const workerBuyWasteCallbackCash = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + "/worker/buy/callback/cash";
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.put(
    apiUrl,
    { ...data },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});
