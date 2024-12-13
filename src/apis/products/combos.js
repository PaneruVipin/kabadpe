import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const greenProdComboAdd = resolvePromise(async ({ ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/combo`;
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

export const greenProdComboUpdate = resolvePromise(async ({ id, ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/combo/${id}`;
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

export const greenProdComboFetch = resolvePromise(async ({}) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/combos`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});
