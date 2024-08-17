import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const greenProdCategoryFetch = resolvePromise(async ({ includeRes }) => {
  const apiUrl =
    ENV_API_BASE_URL + `/green/product/category?includeRes=${includeRes}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.categories;
});

export const greenProdCategoryAdd = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/category`;
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

export const greenProdCategoryUpdate = resolvePromise(
  async ({ id, ...data }) => {
    const apiUrl = ENV_API_BASE_URL + `/green/product/category/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
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
  }
);

export const greenProdSubCategoryFetch = resolvePromise(
  async ({ id, includeRes }) => {
    const apiUrl =
      ENV_API_BASE_URL +
      `/green/product/category/${id}/sub_category?includeRes=${includeRes}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res?.categories;
  }
);

export const greenProdSubCategoryAdd = resolvePromise(
  async ({ id, ...data }) => {
    const apiUrl =
      ENV_API_BASE_URL + `/green/product/category/${id}/sub_category`;
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
  }
);

export const greenProdSubCategoryUpdate = resolvePromise(
  async ({ id, ...data }) => {
    const apiUrl =
      ENV_API_BASE_URL + `/green/product/category/sub_category/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
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
  }
);

export const greenProdCategoryDelete = resolvePromise(async ({ ids }) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/category?ids=${ids}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.delete(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.message;
});

export const greenProdSubCategoryDelete = resolvePromise(async ({ ids }) => {
  const apiUrl =
    ENV_API_BASE_URL + `/green/product/category/sub_category?ids=${ids}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.delete(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.message;
});
