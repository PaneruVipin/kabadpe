import axios from "axios";
import { resolvePromise } from "../../lib/http";

export const instafeedFetch = resolvePromise(
  async ({ platfrom = "kabadPe" }) => {
    const apiUrl = ENV_API_BASE_URL + `/${platfrom}/instafeed`;
    const { data: res } = await axios.get(apiUrl);
    return res?.data;
  }
);
