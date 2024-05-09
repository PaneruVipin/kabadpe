import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const workerWasteCollectionFetch = resolvePromise(async (type = "") => {
  const apiUrl = ENV_API_BASE_URL + `/worker/waste/collection?type=${type}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});

export const adminWasteCollectionFetch = resolvePromise(async (type = "") => {
  const apiUrl = ENV_API_BASE_URL + `/admin/waste/collection?type=${type}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});

export const franchiseWasteCollectionFetch = resolvePromise(
  async (type = "") => {
    const apiUrl =
      ENV_API_BASE_URL + `/franchise/waste/collection?type=${type}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  }
);
