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

export const franchiseBidOfferPost = resolvePromise(
  async ({ id, pricePerUnit, productQuantity }) => {
    const apiUrl = ENV_API_BASE_URL + `/franchise/bid/${id}/offer`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { pricePerUnit, productQuantity },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.bids;
  }
);

export const franchiseBidOfferAction = resolvePromise(
  async ({ id, action, reCreate }) => {
    const apiUrl =
      ENV_API_BASE_URL +
      `/franchise/bid/offer/${id}/${action}?reCreate=${reCreate}`;
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

export const franchiseMyBidOfferFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/bid/offers`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.offers;
});

export const franchiseBidSubCategoriesFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/bid/subcategories`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.categories;
});

export const franchiseMyBidStatusFetch = resolvePromise(async ({ id }) => {
  const apiUrl = ENV_API_BASE_URL + `/franchise/bid/${id}/biddingstatus`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.offerCount;
});

export const adminBidsFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/bids`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.bids;
});

export const bidsCommissionFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/bid/commission`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.commision;
});

export const bidsCommissionUpdate = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + `/bid/commission`;
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
