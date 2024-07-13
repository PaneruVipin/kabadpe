import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const climeFollowUnfollow = resolvePromise(
  async ({ id, followingStatus }) => {
    const apiUrl =
      ENV_API_BASE_URL + `/climeconnect/user/${id}/${followingStatus}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
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

export const followingStatusFetch = resolvePromise(async ({ id }) => {
  const apiUrl = ENV_API_BASE_URL + `/climeconnect/user/${id}/followingStatus`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.follow;
});

export const climeconnectionsFetch = resolvePromise(
  async ({ connectionType }) => {
    const apiUrl =
      ENV_API_BASE_URL + `/climeconnect/connections/${connectionType}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res?.connections;
  }
);
