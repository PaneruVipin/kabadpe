import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminGetAllUsers = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/allUsers`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.users;
});

export const adminGetFranchises = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/franchises`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.franchises;
});

export const adminGetWorkers = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/workers`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.workers;
});

export const adminGetUsers = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/users`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.users;
});
