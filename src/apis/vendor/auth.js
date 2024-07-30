import axios from "axios";

export const vendorSignup = async ({ ...body }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/auth/signup`;
  const { data: res } = await axios.post(apiUrl, { ...body });
  return res;
};

export const vendorVerifysignup = async ({ ...body }) => {
  const apiUrl = ENV_API_BASE_URL + `/vendor/auth/verifySignup`;
  const { data: res } = await axios.post(apiUrl, { ...body });
  return res;
};
