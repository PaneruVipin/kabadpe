import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminSubsAdd = resolvePromise(
  async ({ planeName, collectorCount, monthlyPrice, quaterlyPrice }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/subscription`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      {
        planeName,
        collectorCount,
        monthlyPrice,
        quaterlyPrice,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const adminSubsUpdate = resolvePromise(
  async ({ planeName, collectorCount, monthlyPrice, quaterlyPrice, id }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/subscription/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      {
        planeName,
        collectorCount,
        monthlyPrice,
        quaterlyPrice,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const adminSubsFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/subscription`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.subs;
});

export const adminSubsDelete = resolvePromise(async (id) => {
  const apiUrl = ENV_API_BASE_URL + `/admin/subscription/${id}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.delete(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.subs;
});

export const adminWorkerSubsFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/subscription/worker`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});

export const adminWorkerSubsInsert = resolvePromise(
  async ({
    comissionRate,
    comissionBaseAmount,
    fixedAmount,
    planeName,
    planType,
  }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/subscription/worker/${planType}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { comissionRate, comissionBaseAmount, fixedAmount, planeName },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);
