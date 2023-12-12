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
  loginType = "user",
}) => {
  const setting = {
    collector: {
      path: "/auth/kabadCollector/signup",
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
  };
  const apiUrl = ENV_API_BASE_URL + setting?.[loginType]?.path;
  const { data: res } = await axios.post(apiUrl, setting?.[loginType]?.payload);
  return res;
};

export const login = async ({
  email,
  password,
  rememberMe,
  loginType = "user",
}) => {
  const setting = {
    user: { path: "/auth/login", payload: { email, password } },
    collector: {
      path: "/auth/kabadCollector/login",
      payload: { email, password },
    },
    admin: {
      path: "/auth/superAdmin/login",
      payload: { email, password, rememberMe },
    },
  };
  const apiUrl = ENV_API_BASE_URL + setting[loginType]?.path;
  const { data: res } = await axios.post(apiUrl, setting[loginType]?.payload);
  return res;
};

export const verifysignup = async ({ email, otp, loginType = "user" }) => {
  const paths = {
    user: "/auth/verifySignup",
    collector: "/auth/kabadCollector/verifySignup",
  };
  const apiUrl = ENV_API_BASE_URL + paths[loginType];
  const { data: res } = await axios.post(apiUrl, { email, otp });
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
