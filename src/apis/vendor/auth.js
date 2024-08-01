import axios from "axios";
import { getFromLocalStorage } from "../../lib/localStorage";
import { resolvePromise } from "../../lib/http";

export const vendorSignup = async ({ ...body }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/auth/signup`;
  const { data: res } = await axios.post(apiUrl, { ...body });
  return res;
};

export const vendorLogin = async ({ email, password }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/auth/login`;
  const { data: res } = await axios.post(apiUrl, { email, password });
  return res;
};

export const vendorSignupResendOtp = async ({ email, phoneNumber }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/auth/resend_otp`;
  const { data: res } = await axios.post(apiUrl, { email, phoneNumber });
  return res?.message;
};

export const vendorVerifysignup = async ({ ...body }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/auth/verifySignup`;
  const { data: res } = await axios.post(apiUrl, { ...body });
  return res;
};

export const vendorForgetPassRequest = async ({ ...body }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/auth/forget_pass/request`;
  const { data: res } = await axios.put(apiUrl, { ...body });
  return res?.message;
};

export const vendorForgetPassCallback = async ({ ...body }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/auth/forget_pass/callback`;
  const { data: res } = await axios.put(apiUrl, { ...body });
  return res?.message;
};

export const vendorChangePassword = async ({ token, ...body }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/auth/change_pass`;
  const tk = token || getFromLocalStorage("vendorToken");
  const { data: res } = await axios.put(
    apiUrl,
    { ...body },
    {
      headers: {
        Authorization: tk,
      },
    }
  );
  return res?.message;
};

export const vendorStoreNameAvailability = resolvePromise(
  async ({ storeName }) => {
    const apiUrl = ENV_API_BASE_URL + `/vendor/store/${storeName}/availability`;
    const token = getFromLocalStorage("vendorToken");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res?.message;
  }
);

export const addCompanyDetails = resolvePromise(async ({ ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/sotreDetails`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.put(
    apiUrl,
    { ...data },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});

export const addVendorAddressDetails = resolvePromise(async ({ ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/address`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.put(
    apiUrl,
    { ...data },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});

export const addVendorTaxDetails = resolvePromise(async ({ ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/tax_detail`;
  const token = getFromLocalStorage("vendorToken");
  const { data: res } = await axios.put(
    apiUrl,
    { ...data },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});
