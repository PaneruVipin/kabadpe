import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const adminkabadProductAdd = resolvePromise(
  async ({
    bulkEndWeight,
    bulkStartWeight,
    retailEndWeight,
    retailStartWeight,
    bulkPrice,
    retailPrice,
    productImage,
    productName,
  }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/kabadpe/product`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      {
        bulkEndWeight,
        bulkStartWeight,
        retailEndWeight,
        retailStartWeight,
        bulkPrice,
        retailPrice,
        productImage,
        productName,
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

export const adminkabadProductUpdate = resolvePromise(
  async ({
    bulkEndWeight,
    bulkStartWeight,
    retailEndWeight,
    retailStartWeight,
    bulkPrice,
    retailPrice,
    productImage,
    productName,
    id,
  }) => {
    const apiUrl = ENV_API_BASE_URL + `/admin/kabadpe/product/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      {
        bulkEndWeight,
        bulkStartWeight,
        retailEndWeight,
        retailStartWeight,
        bulkPrice,
        retailPrice,
        productImage,
        productName,
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

export const adminkabadProductFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/admin/kabadpe/product`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.products;
});

export const adminkabadProductDelete = resolvePromise(async (id) => {
  const apiUrl = ENV_API_BASE_URL + `/admin/kabadpe/product/${id}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.delete(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.message;
});
