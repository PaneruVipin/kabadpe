import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const workerSubscriptionsFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/worker/subscription`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});

export const workerPlansFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/worker/plans`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.plans;
});

export const workerPlanSubscribe = resolvePromise(
  async ({ subscriptionId, ariaIds }) => {
    const apiUrl = ENV_API_BASE_URL + `/worker/plans/${subscriptionId}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { ariaIds },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const workerAriaInPlansFetch = resolvePromise(async ({ ariaIds }) => {
  const apiUrl = ENV_API_BASE_URL + `/worker/plans/arias`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.put(
    apiUrl,
    { ariaIds },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.arias;
});
