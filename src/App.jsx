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
// import RateList from "./Pages/RateList";
import PricelistPage from "./Pages/PricelistPage";
import OtpVerify from "./Pages/OtpVerify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "./features/user/userActions";

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
      <Route path="/wastecollector" element={<WastecollectorPage />} />
      <Route path="/auth/collector" element={<LogReg />} />
      <Route path="/resetpasswrd" element={<ResetPassword />} />
      {/* <Route path="/ratelist" element={<RateList />} /> */}
      <Route path="/pricelist" element={<PricelistPage />} />
      <Route path="/otpverify" element={<OtpVerify />} />
    </Routes>
  );
}

export default App;
