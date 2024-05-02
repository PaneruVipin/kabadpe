import axios from "axios";
import { getFromLocalStorage } from "../../lib/localStorage";
import { resolvePromise } from "../../lib/http";

export const franchiseProfileUpdate = resolvePromise(
  async ({
    fullname,
    gst,
    franchiseAddress,
    franchiseLogo,
    brandname,
    contactPersonName,
    contactNumber,
  }) => {
    const apiUrl = ENV_API_BASE_URL + `/franchise/update`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      {
        fullname,
        gst,
        franchiseAddress,
        franchiseLogo,
        brandname,
        contactPersonName,
        contactNumber,
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
