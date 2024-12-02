import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Appointment from "../HomeComponent/Appointment";
import Ecosystem from "../HomeComponent/Ecosystem";
import HomeSlider from "../HomeComponent/HomeSlider";
import ImpactComp from "../HomeComponent/ImpactComp";
import KabadJugad from "../HomeComponent/KabadJugad";
// import Discover from "../HomeComponent/Discover";
import Contribution from "../HomeComponent/Contribution";
import Review from "../HomeComponent/Review";
import InstaFeed from "../HomeComponent/InstaFeed";
import ScrollBtn from "../HomeComponent/ScrollBtn";
import Preloader from "../HomeComponent/Preloader";
import { Preloadergsap } from "../HomeComponent/PreloaderGsap";
import MainFooter from "../HomeComponent/MainFooter";
import Discover from "../HomeComponent/Discover";
import { useLocation } from "react-router-dom";
import { scrollToParam } from "../lib/scroll";
import InfiniteSliderWaste from "../AdminComponents.jsx/InfiniteSliderWaste";
import DownloadApp from "../HomeComponent/DownloadApp";
// import AdsBanner from "../HomeComponent/AdsBanner";

const Home = ({ setUserForm,}) => {
  const location = useLocation();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    scrollToParam(location, "s");
  }, [location.search]);



  return (
    <>
      <Preloader />

   

      <div className="mainwrap">
        <HomeSlider />
        <div id="schedule">
          <Appointment setUserForm={setUserForm} />
        </div>
        <InfiniteSliderWaste />
        <Discover />
        {/* <DownloadApp /> */}
        {/* <AdsBanner /> */}
        <Ecosystem />
        <KabadJugad />
        <Contribution />
        <ImpactComp />
        <Review />
        <InstaFeed />
        <MainFooter />
      </div>

      <ScrollBtn />
    </>
  );
};

export default Home;
