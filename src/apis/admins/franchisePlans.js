import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminfranchisePlansFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/franchise/plans`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});

export const adminIndPlansFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/ind/plans`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});

export const adminExtendPlan = resolvePromise(
  async ({ id, endDate, type = "ind" }) => {
    const apiUrl =
      ENV_API_BASE_URL + `/admin/plans/${id}/extend/${endDate}?type=${type}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const adminApproveFranchisePlan = resolvePromise(
  async ({ id, franchiseId, bankTxnId, paymentMethod }) => {
    const apiUrl =
      ENV_API_BASE_URL + `/admin/franchise/${franchiseId}/plan/${id}/approve`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { bankTxnId, paymentMethod },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const adminUpdatePlan = resolvePromise(async ({ id, ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/ind/plans/${id}`;
  const token = getFromLocalStorage("token");
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
