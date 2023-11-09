import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const userAppoinmentsFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/user/kabadPe/appointments`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.orders;
});
