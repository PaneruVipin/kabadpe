import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const greenProductsAttributeFetch = resolvePromise(
  async ({ includeRes }) => {
    const apiUrl =
      ENV_API_BASE_URL + `/green/product/attribute?includeRes=${includeRes}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res?.attributes;
  }
);

export const greenProductsAttributeAdd = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + `/green/product/attribute`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(
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

export const greenProductsAttributeUpdate = resolvePromise(
  async ({ id, ...data }) => {
    const apiUrl = ENV_API_BASE_URL + `/green/product/attribute/${id}`;
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
  }
);


// export const greenProductsAttributeUpdate = resolvePromise(
//   async ({ id, ...data }) => {
//     const apiUrl = ENV_API_BASE_URL + `/green/product/attribute/${id}`;
//     const token = getFromLocalStorage("token");
//     const { data: res } = await axios.put(
//       apiUrl,
//       { ...data },
//       {
//         headers: {
//           Authorization: token,
//         },
//       }
//     );
//     return res?.message;
//   }
// );