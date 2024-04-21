import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const franchiseratesFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/rates/peroduct`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.product;
});

export const franchiseRateUpdate = resolvePromise(
  async ({ id, bulkPrice, retailPrice }) => {
    const apiUrl = ENV_API_BASE_URL + `/franchise/rates/peroduct/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { bulkPrice, retailPrice },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);
