import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const userSchedulePickup = resolvePromise(
  async ({
    formatedAddress,
    appointmentContactNumber,
    appointmentPersonName,
    appointmentDate,
    appointmentTimeSlot,
    pincode,
  }) => {
    const apiUrl = ENV_API_BASE_URL + "/user/kabadPe/schedualPickup";
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      {
        formatedAddress,
        appointmentContactNumber,
        appointmentPersonName,
        appointmentDate,
        appointmentTimeSlot,
        pincode,
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

export const userRateListFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + "/user/kabadPe/rateList";
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.kabadItems;
});

export const userCalculateKabadRate = resolvePromise(async (data, pincode) => {
  const apiUrl = ENV_API_BASE_URL + "/user/kabadPe/calculatePrice";
  const token = getFromLocalStorage("token");
  const newData = Object.keys(data).reduce(
    (a, b) => ({ ...a, [b]: +data[b] }),
    {}
  );
  const { data: res } = await axios.put(apiUrl, newData, {
    headers: {
      Authorization: token,
    },
    params: { pincode },
  });
  return res?.totalPrice;
});
export const userReschedulePickup = resolvePromise(
  async ({ appointmentTimeSlot, appointmentDate, id }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/kabadPe/reschedualPickup/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { appointmentDate, appointmentTimeSlot },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);
