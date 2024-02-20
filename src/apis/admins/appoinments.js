import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminAppoinmentsFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/appoinments`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.appoinments;
});

export const adminServicableWorkersFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/servicable/workers`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.workers;
});

export const adminAppoinmentAssign = resolvePromise(
  async ({ appoinmentId, workerId }) => {
    const apiUrl =
      ENV_API_BASE_URL + `/admin/assignAppoinment/${appoinmentId}/${workerId}`;
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
    return res?.workers;
  }
);

export const adminAppoinmentForAssigningDateFetch = resolvePromise(
  async (date) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/appinment/${date}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res?.appoinment;
  }
);
