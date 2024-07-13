import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const addMoneyInWallet = resolvePromise(async ({ amount, path }) => {
  const apiUrl = ENV_API_BASE_URL + `/wallet/addMoney/request?amount=${amount}&callbackPath=${path}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.url;
});
