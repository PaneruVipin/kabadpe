import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const GetWalletDetails = async (userId, role) => {
  try {
    // console.log("check " + userId, role);
    const apiUrl =
      ENV_API_BASE_URL + `/GetWalletDetailsById/${userId}?role=${role}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (error) {
    console.error("Error fetching wallet details:", error);
    throw error;
  }
};

// to find user details by Admin based on user id and role
export const FuntiontoGetUserDetailsByRoleAndUserId = async (userId, role) => {
  try {
    // console.log("check " + userId, role);
    const apiUrl =
      ENV_API_BASE_URL +
      `/FuntiontoGetUserDetailsByRoleAndUserId/${userId}/${role}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (error) {
    console.error("Error fetching wallet details:", error);
    throw error;
  }
};

export const FuntionToUpdateWalletDetailsByRole = resolvePromise(
  async ({ userId, role, walletmoney }) => {
    // Modify function signature to accept an object
    try {
      const apiUrl = ENV_API_BASE_URL + `/FuntionToUpdateWalletDetailsByRole`;
      const token = getFromLocalStorage("token");
      const { data: res } = await axios.post(
        // Change to POST method
        apiUrl,
        { userId, role, walletmoney }, // Pass parameters as an object
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return res;
    } catch (error) {
      console.error("Error updating wallet details:", error);
      throw error;
    }
  }
);
