import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminAriaAdd = resolvePromise(
  async ({ ariaName, subAriaName, pincode, state, city, price }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/aria`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { ariaName, subAriaName, pincode, state, city, price },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const adminAriaUpdate = resolvePromise(
  async ({ ariaName, subAriaName, pincode, state, city, price, id }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/aria/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { ariaName, subAriaName, pincode, state, city, price },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const adminAriaDelete = resolvePromise(async (id) => {
  const apiUrl = ENV_API_BASE_URL + `/admin/aria/${id}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.delete(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.message;
});

export const adminAriaFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/aria`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.arias;
});
