import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminGetAllUsers = resolvePromise(async (status) => {
  const apiUrl = ENV_API_BASE_URL + `/admin/allUsers`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
    params: { status },
  });
  return res?.users;
});

export const adminGetFranchises = resolvePromise(async (status) => {
  const apiUrl = ENV_API_BASE_URL + `/admin/allUsers`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
    params: { status },
  });
  return res?.users;
});

export const adminGetWorkers = resolvePromise(async (status) => {
  const apiUrl = ENV_API_BASE_URL + `/admin/allUsers`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
    params: { status },
  });
  return res?.users;
});

export const adminGetUsers = resolvePromise(async (status) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/allUsers`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
      params: { status },
    });
    return res?.users;
  });