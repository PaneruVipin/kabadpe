import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import { setInLocalStorage } from "./lib/localStorage";
import Zerowastesocieties from "./Pages/Zerowastesocieties";
import WasteSip from "./Pages/WasteSip";
import GreenLife from "./Pages/GreenLife";
import Climconnect from "./Pages/Climconnect";
import Household from "./Pages/Household";
import Blog from "./Pages/Blog";
import BulkWaste from "./Pages/BulkWaste";
import ElectronicWaste from "./Pages/ElectronicWaste";
import VehicleScrap from "./Pages/VehicleScrap";
import CorporateWaste from "./Pages/CorporateWaste";
import Epr from "./Pages/Epr";
import Dismant from "./Pages/Dismant";
import CircularEconomy from "./Pages/CircularEconomy";
import ZeroWasteServ from "./Pages/ZeroWasteServ";
import PaperShred from "./Pages/PaperShred";
import CSR from "./Pages/CSR";
import ZeroDrive from "./Pages/ZeroDrive";
import IEC from "./Pages/IEC";
import Material from "./Pages/Material";
import BlogPage from "./Pages/BlogPage";
import BlogDet from "./Pages/BlogDet";
import Header from "./Components/Header";
import AboutPage from "./Pages/AboutPage";
import Clinconnectpage from "./Pages/Clinconnectpage";
import BidProdDet from "./FrenchiesPage/BidProdDet";
import Refundpolicy from "./Pages/Refundpolicy";
import Privacypolicies from "./Pages/Privacypolicies";
import Termscondition from "./Pages/Termscondition";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    success: { login, verifySignup },
    loading: { login: loginLoading, verifySignup: verifyLoading },
  } = useSelector((s) => s.auth);
  useEffect(() => {
    dispatch(userFetch());
  }, [login, verifySignup, loginLoading, verifyLoading]);
  const [userForm, setUserForm] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const t = params.get("t");
    if (t) {
      setInLocalStorage("token", t);
      navigate("/");
      window.location.reload();
    }
  }, []);
  return (
    
    <Routes>
      <Route
        path="/"
        element={<MainOutLet userForm={userForm} setUserForm={setUserForm} />}
      >
        <Route index element={<Home setUserForm={setUserForm} />} />
        <Route path="/frenchies" element={<About />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<WastecollectorPage />} />
        <Route path="/service/zero-waste-societies" element={<Zerowastesocieties />} />
        <Route path="/service/waste-sip" element={<WasteSip />} />
        <Route path="/service/Green-life" element={<GreenLife />} />
        <Route path="/service/climconnect" element={<Climconnect />} />
        <Route path="/service/household" element={<Household />} />
        <Route path="/service/blog" element={<Blog />} />
        <Route path="/service/bulkwastepickup" element={<BulkWaste />} />
        <Route path="/service/electwaste" element={<ElectronicWaste />} />
        <Route path="/service/vehiclescrap" element={<VehicleScrap />} />
        <Route path="/service/corporatewaste" element={<CorporateWaste />} />
        <Route path="/service/eprservice" element={<Epr />} />
        <Route path="/service/dismantling" element={<Dismant />} />
        <Route path="/service/circulareconomy" element={<CircularEconomy />} />
        <Route path="/service/zerowaste" element={<ZeroWasteServ />} />
        <Route path="/service/papershredding" element={<PaperShred />} />
        <Route path="/service/csr" element={<CSR />} />
        <Route path="/service/zerodrive" element={<ZeroDrive />} />
        <Route path="/service/iec" element={<IEC />} />
        <Route path="/service/recoverymngemt" element={<Material />} />
        <Route path="/climconnect" element={<Clinconnectpage />} />
        <Route path="/bidproductdetail" element={<BidProdDet />} />
        <Route path="/refundpolicy" element={<Refundpolicy />} />
        <Route path="/privacypolicy" element={<Privacypolicies />} />
        <Route path="/termscondition" element={<Termscondition />} />



{/* zerodrive */}

{/* eprservice */}


        <Route path="/ratelist" element={<RateList setUserForm={setUserForm} />} />
        <Route path="/kabadshop" element={<KabadShop />} />
        <Route path="/wastegept" element={<Wastgept />} />
        <Route path="/resetpasswrd" element={<ResetPassword />} />
      </Route>

      {/* <Route path="/useraccounts" element={<WastecollectorPage />} /> */}
      <Route path="/auth/collector" element={<LogReg />} />
      {/* <Route path="/ratelist" element={<RateList />} /> */}
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
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blogdet" element={<BlogDet />} />


      
    </Routes>
  );
}

export default App;
