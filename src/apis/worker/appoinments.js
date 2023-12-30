import axios from "axios";
import { getFromLocalStorage } from "../../lib/localStorage";
import { resolvePromise } from "../../lib/http";

export const workerAppoinmentsFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/worker/appoinments`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.appoinments;
});
