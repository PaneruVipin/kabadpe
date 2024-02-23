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
import { useEffect, useState } from "react";
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
import FrenchiesPanel from "./FrenchiesPage/FrenchiesPanel";
import MainOutLet from "./Components/Outlets/MainOuTlet";
import Contact from "./Pages/Contact";
import ContentEdit from "./Pages/ContentEdit";
import TermPolicy from "./HomeComponent/TermPolicy";
import VendorLogin from "./VendorPages/VendorLogin";
import VendorPanel from "./VendorPages/VendorPanel";

function App() {
  const dispatch = useDispatch();
  const {
    success: { login, verifySignup },
    loading: { login: loginLoading, verifySignup: verifyLoading },
  } = useSelector((s) => s.auth);
  useEffect(() => {
    dispatch(userFetch());
  }, [login, verifySignup, loginLoading, verifyLoading]);
  const [userForm, setUserForm] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<MainOutLet userForm={userForm} setUserForm={setUserForm} />}
      >
        <Route index element={<Home setUserForm={setUserForm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<WastecollectorPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/rate" element={<RateList />} />
        <Route path="/kabadshop" element={<KabadShop />} />
        <Route path="/wastegept" element={<Wastgept />} />
        <Route path="/resetpasswrd" element={<ResetPassword />} />
      </Route>

      {/* <Route path="/useraccounts" element={<WastecollectorPage />} /> */}
      <Route path="/auth/collector" element={<LogReg />} />
      <Route path="/ratelist" element={<RateList />} />
      <Route path="/pricelist" element={<PricelistPage />} />
      <Route path="/otpverify" element={<OtpVerify />} />
      <Route
        path="/wastecolectdashboard"
        element={<WasteCollectorDashboard />}
      />
      <Route path="/socialfeeds" element={<SocialFeedsPage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/frenchieslogin" element={<FrenchiesLogin />} />
      <Route path="/forgotpassword" element={<FrenchiesForgotPasswrd />} />
      <Route path="/frenchiesDashboard" element={<FrenchiesDashboard />} />
      <Route path="/frenchiespanel" element={<FrenchiesPanel />} />
      <Route path="/contentedit" element={<ContentEdit />} />
      <Route path="/termpolicy" element={<TermPolicy />} />
      <Route path="/vendorlogin" element={<VendorLogin />} />
      <Route path="/vendorpanel" element={<VendorPanel />} />
    </Routes>
  );
}

export default App;
