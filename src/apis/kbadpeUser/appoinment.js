import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const userAppoinmentsFetch = resolvePromise(
  async ({ from, to } = {}) => {
    const apiUrl = ENV_API_BASE_URL + `/user/kabadPe/appointments`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      params: { from, to },
      headers: {
        Authorization: token,
      },
    });
    return res?.orders;
  }
);

export const userReportAppoinment = resolvePromise(
  async ({ id, title, description }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/kabadPe/appointments/${id}/report`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { title, description },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const userAddReview = resolvePromise(
  async ({ id, rating, description }) => {
    const apiUrl =
      ENV_API_BASE_URL + `/user/kabadPe/appointments/${id}/addReview`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { rating, description },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const userServicableAriasFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/user/kabadPe/servicablearias`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.arias;
});
