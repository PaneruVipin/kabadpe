import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const franchiseCapacityFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/capacity`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.capacity;
});

export const franchiseCapacityInsert = resolvePromise(
  async ({ slotName, capacity }) => {
    const apiUrl = ENV_API_BASE_URL + `/franchise/capacity`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { [slotName]: capacity },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);
