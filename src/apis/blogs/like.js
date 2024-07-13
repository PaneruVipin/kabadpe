import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const likeUnlikeBlog = resolvePromise(async ({ id, status }) => {
  const apiUrl = ENV_API_BASE_URL + `/blog/${id}/reaction/${status}`;
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
});
