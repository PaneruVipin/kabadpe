import axios from "axios";
import { getFromLocalStorage } from "../lib/localStorage";
import { resolvePromise } from "../lib/http";

export const getUser = async () => {
  const apiUrl = ENV_API_BASE_URL + `/user`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const userAddressesFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/user/address`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.addresses;
});

export const userAddressesAdd = resolvePromise(
  async ({ street, city, state, zipCode, locationType, landmark }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/address`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { street, city, state, zipCode, locationType, landmark },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const userAddressesUpdate = resolvePromise(
  async ({ street, city, state, zipCode, locationType, landmark, id }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/address/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { street, city, state, zipCode, locationType, landmark },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const userAddressDelete = resolvePromise(async (id) => {
  const apiUrl = ENV_API_BASE_URL + `/user/address/${id}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.delete(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.message;
});

export const userResetPassword = resolvePromise(
  async ({ newPassword, confirmNewPassword }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/password/reset`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { newPassword, confirmNewPassword },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const userProfileImageAdd = resolvePromise(async (image) => {
  const apiUrl = ENV_API_BASE_URL + `/user/profileimage`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(
    apiUrl,
    { image },
    {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res?.addresses;
});
