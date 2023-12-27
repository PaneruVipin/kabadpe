import axios from "axios";
import { resolvePromise } from "../lib/http";

export const signup = async ({
  fullname,
  email,
  phoneNumber,
  password,
  pincode,
  emergencyPhone,
  workCity,
  companyRef,
  gst,
  franchiseAddress,
  companyName,
  confirmPassword,
  loginType = "user",
}) => {
  const setting = {
    collector: {
      path: "/_auth/kabadCollector/signup",
      payload: {
        fullname,
        email,
        password,
        phoneNumber,
        pincode,
        emergencyPhone,
        workCity,
        companyRef,
      },
    },
    user: {
      path: "/auth/signup",
      payload: { fullname, email, password, phone: phoneNumber },
    },
    franchise: {
      path: "/_auth/franchise/signup",
      payload: {
        fullname,
        email,
        password,
        phone: phoneNumber,
        gst,
        companyName,
        confirmPassword,
        franchiseAddress,
      },
    },
  };
  const apiUrl = ENV_API_BASE_URL + setting?.[loginType]?.path;
  const { data: res } = await axios.post(apiUrl, setting?.[loginType]?.payload);
  return res;
};

export const login = async ({
  email,
  password,
  phoneNumber,
  rememberMe,
  loginType = "user",
}) => {
  const setting = {
    user: { path: "/auth/login", payload: { email, password } },
    collector: {
      path: "/_auth/kabadCollector/login",
      payload: { phoneNumber, password },
    },
    admin: {
      path: "/auth/superAdmin/login",
      payload: { email, password, rememberMe },
    },
    franchise: {
      path: "/_auth/franchise/login",
      payload: { email, password },
    },
  };
  const apiUrl = ENV_API_BASE_URL + setting[loginType]?.path;
  const { data: res } = await axios.post(apiUrl, setting[loginType]?.payload);
  return res;
};

export const verifysignup = async ({
  email,
  otp,
  code,
  loginType = "user",
}) => {
  const setting = {
    user: { path: "/auth/verifySignup", payload: { email, otp } },
    collector: {
      path: "/_auth/kabadCollector/verifySignup",
      payload: { code, otp },
    },
    franchise: {
      path: "/_auth/franchise/verifysignup",
      payload: { email, otp },
    },
  };
  const apiUrl = ENV_API_BASE_URL + setting[loginType]?.path;
  const { data: res } = await axios.post(apiUrl, setting[loginType]?.payload);
  return res;
};

export const userValidateKabadPeRefrral = resolvePromise(async (code) => {
  const apiUrl = ENV_API_BASE_URL + `/kabadCollector/refrral/validate`;
  const { data: res } = await axios.get(apiUrl, {
    params: { code },
  });
  return res?.franchise;
});

export const userResendOtp = async (email) => {
  const apiUrl = ENV_API_BASE_URL + "/auth/resendotp";
  const { data: res } = await axios.post(apiUrl, { email });
  return res?.message;
};
