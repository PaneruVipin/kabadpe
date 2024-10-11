import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const userOrdersfetch = resolvePromise(async ({}) => {
  const apiUrl = ENV_API_BASE_URL + `/green/user/orders`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.orders;
});

export const vendorOrderFetch = resolvePromise(async ({}) => {
  const apiUrl = ENV_API_BASE_URL + `/green/vendor/orders`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.orders;
});

export const vendorOrderEdit = resolvePromise(async ({ id, orderStatus }) => {
  const apiUrl = ENV_API_BASE_URL + `/green/order/${id}`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.put(
    apiUrl,
    { orderStatus },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});
