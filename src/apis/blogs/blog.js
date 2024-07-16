import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const blogPostFetch = resolvePromise(
  async ({ postScope, includeOnly, search = "" }) => {
    const apiUrl =
      ENV_API_BASE_URL +
      `/blog/posts?postScope=${postScope}&includeOnly=${includeOnly}&search=${search}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res?.blogs;
  }
);

export const blogPostCreate = resolvePromise(async (data) => {
  const apiUrl = ENV_API_BASE_URL + `/blog/post`;
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

export const blogPostEdit = resolvePromise(async ({ id, ...data }) => {
  const apiUrl = ENV_API_BASE_URL + `/blog/post/${id}`;
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
});

export const blogPostFetchOne = resolvePromise(async ({ id, views }) => {
  const apiUrl = ENV_API_BASE_URL + `/blog/post/${id}?views=${views}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.blog;
});
