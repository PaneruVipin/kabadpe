import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const greenProductsFetch = resolvePromise(async ({ includeRes }) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product?includeRes=${includeRes}`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.products;
});

export const greenProductsAdd = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.post(
    apiUrl,
    { ...data },
    {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res?.message;
});

export const greenProductsUpdate = resolvePromise(async ({ id, ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/${id}`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.put(
    apiUrl,
    { ...data },
    {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res?.message;
});

export const greenProductsFetchOne = resolvePromise(async ({ id }) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/${id}`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
      // "Content-Type": "multipart/form-data",
    },
  });
  return res?.product;
});

export const greenProductsFetchAll = resolvePromise(async ({ includeRes }) => {
  const apiUrl =
    ENV_API_BASE_URL + `/green/products/all?includeRes=${includeRes}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
      // "Content-Type": "multipart/form-data",
    },
  });
  return res?.products;
});
