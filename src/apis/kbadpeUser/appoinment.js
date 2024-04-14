import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const userScheduleAppoinment = resolvePromise(
  async ({
    appoinmentAddress,
    appointmentContactNumber,
    appointmentPersonName,
    appointmentTimeSlot,
    estimateWeight,
    companyId,
    frequency,
    serviceType,
    appointmentDate,
    appoinmentAria,
    ariaId,
  }) => {
    const apiUrl = ENV_API_BASE_URL + "/user/kabadPe/schedualPickup";
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      {
        appoinmentAddress,
        appointmentContactNumber,
        appointmentPersonName,
        appointmentTimeSlot,
        estimateWeight,
        companyId,
        frequency,
        serviceType,
        appointmentDate,
        appoinmentAria,
        ariaId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  }
);

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

export const userValidateServicability = resolvePromise(
  async ({ state, pincode, ariaName, subAriaName }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/service/validation`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { state, pincode, ariaName, subAriaName },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.servicableAria;
  }
);

export const userFetchAvailableCompanies = resolvePromise(
  async ({ ariaId, date, service }) => {
    const apiUrl =
      ENV_API_BASE_URL +
      `/user/${service}/availablecompanies/${ariaId}?date=${date}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res?.availableCompanies;
  }
);

export const userFetchAvailableSlots = resolvePromise(
  async ({ franchiseId, date,aria }) => {
    const apiUrl =
      ENV_API_BASE_URL +
      `/user/service/slotavailable/${franchiseId}?date=${date}&aria=${aria}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res?.availableSlots;
  }
);
