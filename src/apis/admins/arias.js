import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const admiAriaAdd = resolvePromise(async (image) => {
  const apiUrl = ENV_API_BASE_URL + `/collector/profileimage`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(
    apiUrl,
    { image },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});

export const admiAriaUpdate = resolvePromise(async (image) => {
  const apiUrl = ENV_API_BASE_URL + `/collector/profileimage`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(
    apiUrl,
    { image },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});

export const admiAriaDelete = resolvePromise(async (image) => {
  const apiUrl = ENV_API_BASE_URL + `/collector/profileimage`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(
    apiUrl,
    { image },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});
