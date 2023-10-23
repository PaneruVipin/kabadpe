import { createSlice } from "@reduxjs/toolkit";
import { setInLocalStorage } from "../../lib/localStorage";
import { userLogin, userSignup, userVerifySignup } from "./authActions";

const initialState = {
  loading: {
    login: false,
    signup: false,
    verifySignup: false,
  },
  token: "",
  errors: {
    login: "",
    signup: "",
    verifySignup: "",
  },
  success: {
    login: false,
    signup: false,
    verifySignup: false,
  },
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, { payload }) => {
      state.loading = {
        ...state.loading,
        login: true,
      };
      state.errors = {
        ...state.errors,
        login: "",
      };
    });
    builder.addCase(userLogin.fulfilled, (state, { payload: { data } }) => {
      setInLocalStorage("token", data?.token);
      state.success = {
        ...state.success,
        login: true,
      };
      state.loading = {
        ...state.loading,
        login: false,
      };
      state.token = data?.token;
      state.errors = {
        ...state.errors,
        login: "",
      };
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = {
        ...state.loading,
        login: true,
      };
      state.loading = {
        ...state.loading,
        login: true,
      };
      state.success = {
        ...state.success,
        login: false,
      };
      state.errors = {
        ...state.errors,
        login: payload,
      };
    });
    builder.addCase(userSignup.pending, (state, { payload }) => {
      state.loading = { ...state.loading, signup: true };
      state.errors = {
        ...state.errors,
        signup: "",
      };
    });
    builder.addCase(userSignup.fulfilled, (state, { payload: { payload } }) => {
      state.loading = { ...state.loading, signup: false };
      state.success = { ...state.loading, signup: true };
      state.errors = {
        ...state.errors,
        signup: "",
      };
      state.user = payload;
      state = {
        ...state,
      };
    });
    builder.addCase(userSignup.rejected, (state, { payload }) => {
      state.loading.signup = false;
      state.errors = {
        ...state.errors,
        signup: payload,
      };
    });
    builder.addCase(userVerifySignup.pending, (state, { payload }) => {
      state.loading = {
        ...state.loading,
        verifySignup: true,
      };
      state.errors = {
        ...state.errors,
        verifySignup: "",
      };
    });
    builder.addCase(
      userVerifySignup.fulfilled,
      (state, { payload: { data } }) => {
        setInLocalStorage("token", data?.token);
        state.success = {
          ...state.success,
          verifySignup: true,
        };
        state.loading = {
          ...state.loading,
          verifySignup: false,
        };
        state.token = data?.token;
        state.errors = {
          ...state.errors,
          verifySignup: "",
        };
      }
    );
    builder.addCase(userVerifySignup.rejected, (state, { payload }) => {
      state.loading = {
        ...state.loading,
        verifySignup: true,
      };
      state.loading = {
        ...state.loading,
        verifySignup: true,
      };
      state.success = {
        ...state.success,
        verifySignup: false,
      };
      state.errors = {
        ...state.errors,
        verifySignup: payload,
      };
    });
  },
});
export default authSlice.reducer;
