import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminSubsAdd = resolvePromise(
  async ({ variations, collectorsPrice, collectrsCount }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/subscription`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { variations, collectorsPrice, collectrsCount },
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
  async ({
    collectrsCount,
    collectorsPrice,
    planeName,
    ariasPriceDiscount,
    collectorsPriceDiscount,
    id,
  }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/subscription/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      {
        collectrsCount,
        collectorsPrice,
        planeName,
        ariasPriceDiscount,
        collectorsPriceDiscount,
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
