import axios from "axios";
import { resolvePromise } from "../lib/http";
import { getFromLocalStorage } from "../lib/localStorage";

export const userLocationByQuery = resolvePromise(async (addressQuery) => {
  const apiUrl = ENV_API_BASE_URL + `/user/location/query`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
    params: { addressQuery },
  });
  return res;
});
