import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const kabadpeRatelistFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/kabadpe/ratelist`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.products;
});

export const kabadpeFranchisesFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/kabadpe/ratelist/franchises`;
  // const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    // headers: {
    //   Authorization: token,
    // },
  });
  return res;
});
