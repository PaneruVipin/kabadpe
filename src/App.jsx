import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Wastgept from "./Pages/Wastgept";
import Rate from "./Pages/Rate";
import KabadShop from "./Pages/KabadShop";
import "./App.css";
import Account from "./Pages/Account";
import WastecollectorPage from "./Pages/WastecollectorPage";
import LogReg from "./Pages/LogReg";
import ResetPassword from "./Pages/ResetPassword";
import RateList from "./Pages/RateList";
import PricelistPage from "./Pages/PricelistPage";
import OtpVerify from "./Pages/OtpVerify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "./features/user/userActions";
import { userLocationByQuery } from "./apis/location";
import WasteCollectorDashboard from "./Pages/WasteCollectorDashboard";
import SocialFeedsPage from "./Pages/SocialFeedsPage";
import AdminPanel from "./AdminPages/AdminPanel";
import AdminLogin from "./AdminPages/AdminLogin";
import FrenchiesLogin from "./AdminPages/FrenchiesLogin";
import FrenchiesForgotPasswrd from "./AdminPages/FrenchiesForgotPasswrd";
import FrenchiesDashboard from "./AdminPages/FrenchiesDashboard";


function App() {
  const dispatch = useDispatch();
  const {
    success: { login, verifySignup },
  } = useSelector((s) => s.auth);
  useEffect(() => {
    dispatch(userFetch());
  }, [login, verifySignup]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/wastegept" element={<Wastgept />} />
      <Route path="/rate" element={<Rate />} />
      <Route path="/kabadshop" element={<KabadShop />} />
      <Route path="/account" element={<Account />} />
      <Route path="/useraccounts" element={<WastecollectorPage />} />
      <Route path="/auth/collector" element={<LogReg />} />
      <Route path="/resetpasswrd" element={<ResetPassword />} />
      <Route path="/ratelist" element={<RateList />} />
      <Route path="/pricelist" element={<PricelistPage />} />
      <Route path="/otpverify" element={<OtpVerify />} />
      <Route path="/wastecolectdashboard" element={<WasteCollectorDashboard />} />
      <Route path="/socialfeeds" element={<SocialFeedsPage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/frenchieslogin" element={<FrenchiesLogin />} />
      <Route path="/forgotpassword" element={<FrenchiesForgotPasswrd />} />
      <Route path="/frenchiesDashboard" element={<FrenchiesDashboard />} />


    </Routes>
  );
}

export default App;
