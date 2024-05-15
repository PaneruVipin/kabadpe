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
