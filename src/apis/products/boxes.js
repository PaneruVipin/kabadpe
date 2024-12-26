import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const greenProdBoxAdd = resolvePromise(async ({ ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/box`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.post(
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

export const greenProdBoxUpdate = resolvePromise(async ({ id, ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/box/${id}`;
  const token = getFromLocalStorage("vendorToken");
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

export const greenProdBoxFetch = resolvePromise(async ({}) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/boxes`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.boxes;
});
