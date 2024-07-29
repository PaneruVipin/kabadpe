import axios from "axios";
import { getFromLocalStorage } from "../lib/localStorage";
import { resolvePromise } from "../lib/http";

export const getUser = async ({ type = "user" }) => {
  const apiUrl = ENV_API_BASE_URL + `/${type}`;
  const token =
    type == "user"
      ? getFromLocalStorage("token")
      : getFromLocalStorage("vendorToken");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const userAddressesFetch = resolvePromise(async ({ id }) => {
  const apiUrl = ENV_API_BASE_URL + `/user/address?id=${id}}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.addresses;
});

export const userAddressesAdd = resolvePromise(
  async ({
    street,
    city,
    state,
    zipCode,
    locationType,
    landmark,
    aria,
    subAria,
    userId,
  }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/address?userId=${userId}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { street, city, state, zipCode, locationType, landmark, aria, subAria },
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
  async ({
    street,
    city,
    state,
    zipCode,
    locationType,
    landmark,
    id,
    aria,
    subAria,
    userId,
  }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/address/${id}?userId=${userId}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { street, city, state, zipCode, locationType, landmark, aria, subAria },
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
  return res?.message;
});

export const userUpdateProfileRequset = resolvePromise(
  async ({ fullname, email, phoneNumber }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/profile/request`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { fullname, email, phoneNumber },
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res?.code;
  }
);

export const userUpdateProfileCallback = resolvePromise(
  async ({ otp, code }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/profile/callback`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { otp, code },
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res?.meassage;
  }
);
