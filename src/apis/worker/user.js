import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const collectorProfileImageAdd = resolvePromise(async (image) => {
  const apiUrl = ENV_API_BASE_URL + `/collector/profileimage`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(
    apiUrl,
    { image },
    {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res?.message;
});

export const updateWorkerProfile = resolvePromise(
  async ({
    fullname,
    dob,
    gender,
    cast,
    religion,
    saftyTrainingDate,
    insurance,
    heathCheckupDate,
    emergencyPersonName,
    emergencyPhone,
    aadharFront,
    aadharBack,
    policeVerification,
    saftyTraining,
    address,
  }) => {
    const apiUrl = ENV_API_BASE_URL + `/collector/info`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      {
        fullname,
        dob,
        gender,
        cast,
        religion,
        saftyTrainingDate,
        insurance,
        heathCheckupDate,
        emergencyPersonName,
        emergencyPhone,
        aadharFront,
        aadharBack,
        policeVerification,
        saftyTraining,
        address,
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res?.message;
  }
);

export const workerFranchiseName = resolvePromise(async (id) => {
  const apiUrl = ENV_API_BASE_URL + "/worker/franchise/info";
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.companyName;
});
