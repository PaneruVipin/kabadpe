import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const franchiseBidPost = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/bid/list`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(
    apiUrl,
    { ...data },
    {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res?.message;
});

export const franchiseMyListingsFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/bid/listings`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.bids;
});

export const franchiseAllListingsFetch = resolvePromise(
  async ({ releted, postId, franchiseId }) => {
    const apiUrl =
      ENV_API_BASE_URL +
      `/franchise/bid/listings/all?releted=${releted}&postId=${postId}&franchiseId=${franchiseId}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res?.bids;
  }
);

export const franchiseBidOffersFetch = resolvePromise(async ({ id }) => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/bid/${id}/offers`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.offers;
});

export const franchiseBidOfferPost = resolvePromise(async ({ id }) => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/bid/${id}/offer`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.bids;
});

export const franchiseBidOfferAccept = resolvePromise(async ({ id }) => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/bid/offer/${id}/accept`;
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
});
