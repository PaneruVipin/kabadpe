import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const reportBlogPost = resolvePromise(async ({ id, ...body }) => {
  const apiUrl = ENV_API_BASE_URL + `/blog/post/${id}/report`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.post(
    apiUrl,
    { ...body },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});
