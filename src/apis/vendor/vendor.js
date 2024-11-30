import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const vendorProfileUpdate = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.put(apiUrl, data, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
  });
  return res?.message;
});

export const vendorOrgainazationUpdate = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/organization`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.put(apiUrl, data, {
    headers: {
      Authorization: token,
    },
  });
  return res?.message;
});
