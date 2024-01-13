import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const franchiseAriasFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/subcription/arias`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.arias;
});

export const franchiseSubscriptionsFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/subcription/subscriptions`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.subscriptions;
});

export const franchisePlanRequest = resolvePromise(
  async ({ ariaIds, planeType, subscriptionId }) => {
    const apiUrl = ENV_API_BASE_URL + `/franchise/plan/request`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { ariaIds, planeType, subscriptionId },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  }
);
