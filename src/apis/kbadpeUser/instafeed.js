import axios from "axios";
import { resolvePromise } from "../../lib/http";

export const instafeedFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/kabadpe/instafeed`;
  const { data: res } = await axios.get(apiUrl);
  return res?.data;
});
