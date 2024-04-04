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
  async ({ AdminId, userId, role, walletmoney }) => {
    // Modify function signature to accept an object
    try {
      const apiUrl = ENV_API_BASE_URL + `/FuntionToUpdateWalletDetailsByRole`;
      const token = getFromLocalStorage("token");
      const { data: res } = await axios.post(
        // Change to POST method
        apiUrl,
        { AdminId, userId, role, walletmoney }, // Pass parameters as an object
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
//created by kunal verma
//To raise request for payment
export const FuntiontoRaisepaymnetrequest = async ({
  p_userId,
  p_userrole,
  p_money,
}) => {
  try {
    const apiUrl = `${ENV_API_BASE_URL}/api/Wallet/FuntiontoRaisepaymnetrequest`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { p_userId, p_userrole, p_money }, // Pass parameters as an object
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  } catch (error) {
    console.error("Error raising payment request:", error);
    throw error;
  }
};
//created by kunal verma
//To Approve Transaction request for payment
export const FuntiontoApproveTransaction = async ({
  p_userId,
  p_userrole,
  P_REQUESTID,
}) => {
  //debugger;
  try {
    const apiUrl = `${ENV_API_BASE_URL}/api/Wallet/FuntiontoApproveTransaction`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { p_userId, p_userrole, P_REQUESTID }, // Pass parameters as an object
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  } catch (error) {
    console.error("Error Approve Transaction payment request:", error);
    throw error;
  }
};

//TransactionList for user
export const FuntiontoGetTransactionDetails = async (userId, role) => {
  try {
    // console.log("check " + userId, role);
    const apiUrl =
      ENV_API_BASE_URL +
      `/api/Wallet/FuntiontoGetTransactionDetails/${userId}/${role}`;
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

//TransactionList for user FuntiontogetDataFromProcedureVar
export const FuntiontogetDataFromProcedureVar = async (userId, role) => {
  try {
    // console.log("check " + userId, role);
    const apiUrl =
      ENV_API_BASE_URL +
      `/api/Wallet/FuntiontogetDataFromProcedureVar/${userId}/${role}`;
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

export const walletFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/wallet`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.walletDetail;
});

export const userFetchByIdOrPhone = resolvePromise(async (identifier) => {
  const apiUrl = ENV_API_BASE_URL + `/user/${identifier}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});

export const adminGiveCreditToUser = resolvePromise(
  async ({ id, role, balance }) => {
    const apiUrl = ENV_API_BASE_URL + `/wallet/credit/to/${role}/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { balance },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const AdminTnxHistoryFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/tnx/history`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
});

export const walletWithdrawRequest = resolvePromise(async ({ balance }) => {
  const apiUrl = ENV_API_BASE_URL + `/wallet/withdraw/request`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.put(
    apiUrl,
    { balance },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res?.message;
});
