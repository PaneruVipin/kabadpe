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

export const adminGetVendors = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/vendors`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.vendors;
});

export const adminUpdateVendors = resolvePromise(async ({ id, ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/admin/vendors/${id}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.put(
    apiUrl,
    { ...data },
    {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res?.message;
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

export const adminUsersUpdate = resolvePromise(
  async ({ role, id, ...rest }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/${role}/update/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { ...rest },
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res?.users;
  }
);

export const adminFranchiseStatusUpdate = resolvePromise(
  async ({ id, status }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/franchise/${id}/status/${status}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      {},
      {
        headers: {
          Authorization: token,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    return res?.message;
  }
);

export const adminUserAdd = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + `/admin/user`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(
    apiUrl,
    { ...data },
    {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res?.message;
});
