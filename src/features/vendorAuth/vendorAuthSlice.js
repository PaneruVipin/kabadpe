import { createSlice } from "@reduxjs/toolkit";
import { setInLocalStorage } from "../../lib/localStorage";
import {
  vendorSignupAction,
  vendorLoginAction,
  vendorVerifySignupAction,
} from "./vendorAuthActions";

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

const vendorAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(vendorLoginAction.pending, (state, { payload }) => {
      state.loading = {
        ...state.loading,
        login: true,
      };
      state.errors = {
        ...state.errors,
        login: "",
      };
      state.success = {
        ...state.success,
        login: false,
      };
    });
    builder.addCase(
      vendorLoginAction.fulfilled,
      (state, { payload: { data, payload } }) => {
        setInLocalStorage("vendorToken", data?.token);
        state.success = {
          ...state.success,
          login: true,
        };
        state.loading = {
          ...state.loading,
          login: false,
        };
        state.token = data?.token;
        state.user = { ...payload, ...data };
        state.errors = {
          ...state.errors,
          login: "",
        };
        // window.location.reload();
      }
    );
    builder.addCase(vendorLoginAction.rejected, (state, { payload }) => {
      state.loading = {
        ...state.loading,
        login: false,
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
    builder.addCase(vendorSignupAction.pending, (state, { payload }) => {
      state.loading = { ...state.loading, signup: true };
      state.errors = {
        ...state.errors,
        signup: "",
      };
      state.success = { ...state.loading, signup: false };
    });
    builder.addCase(
      vendorSignupAction.fulfilled,
      (state, { payload: { payload, data } }) => {
        state.loading = { ...state.loading, signup: false };
        state.success = { ...state.loading, signup: true };
        state.errors = {
          ...state.errors,
          signup: "",
        };
        state.user = { ...payload, ...data };
        state = {
          ...state,
        };
      }
    );
    builder.addCase(vendorSignupAction.rejected, (state, { payload }) => {
      state.loading = { ...state.loading, signup: false };
      state.errors = {
        ...state.errors,
        signup: payload,
      };
    });
    builder.addCase(vendorVerifySignupAction.pending, (state, { payload }) => {
      state.loading = {
        ...state.loading,
        verifySignup: true,
      };
      state.errors = {
        ...state.errors,
        verifySignup: "",
      };
      state.success = {
        ...state.success,
        verifySignup: false,
      };
    });
    builder.addCase(
      vendorVerifySignupAction.fulfilled,
      (state, { payload: { data, payload } }) => {
        setInLocalStorage("vendorToken", data?.token);
        state.success = {
          ...state.success,
          verifySignup: true,
        };
        state.loading = {
          ...state.loading,
          verifySignup: false,
        };
        state.token = data?.token;
        state.user = { ...payload, ...data };
        state.errors = {
          ...state.errors,
          verifySignup: "",
        };
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      }
    );
    builder.addCase(vendorVerifySignupAction.rejected, (state, { payload }) => {
      state.loading = {
        ...state.loading,
        verifySignup: false,
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
export default vendorAuthSlice.reducer;
