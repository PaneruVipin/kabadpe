import axios from "axios";
import { resolvePromise } from "../../lib/http";

// forget password
export const workerForgetPassRequestOTP = resolvePromise(
  async (phoneNumber) => {
    const apiUrl =
      ENV_API_BASE_URL + "/_auth/kabadCollector/forgetpass/request/otp";
    const { data: res } = await axios.put(apiUrl, { phoneNumber });
    return res;
  }
);

export const workerForgetPassRequestReset = resolvePromise(
  async ({ code, otp }) => {
    const apiUrl =
      ENV_API_BASE_URL + "/_auth/kabadCollector/forgetpass/request/reset";
    const { data: res } = await axios.put(
      apiUrl,
      { otp },
      {
        headers: { code },
      }
    );
    return res?.code;
  }
);

export const workerForgetPassCallback = resolvePromise(
  async ({ password, code }) => {
    const apiUrl =
      ENV_API_BASE_URL + "/_auth/kabadCollector/forgetpass/callback";
    const { data: res } = await axios.put(
      apiUrl,
      { password },
      { headers: { code } }
    );
    return res?.message;
  }
);

export const workerForgetPassResendOTP = resolvePromise(async (phoneNumber) => {
  const apiUrl =
    ENV_API_BASE_URL + "/_auth/kabadCollector/forgetpass/resend/otp";
  const { data: res } = await axios.put(apiUrl, { phoneNumber });
  return res
});
