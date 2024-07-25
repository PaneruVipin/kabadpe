import { login, signup, verifysignup } from "../../apis/auth";
import { vendorSignup, vendorVerifysignup } from "../../apis/vendor/auth";
import { asyncThunk } from "../../lib/thunk";

export const vendorSignupAction = asyncThunk(
  "vendor/auth/signup",
  vendorSignup
);
export const vendorLoginAction = asyncThunk("vendor/auth/login", login);
export const vendorVerifySignupAction = asyncThunk(
  "vendor/auth/verifySignup",
  vendorVerifysignup
);
