import React from 'react'
import "../style/HeaderStyle.css";
import "../style/BannerSection.css";
import ServBanner from "../ServComps/ServBanner";
import ServCompOne from "../ServComps/ServCompOne";
import ServCompTwo from "../ServComps/ServCompTwo";
import ServCompThree from "../ServComps/ServCompThree";
import Discover from "../HomeComponent/Discover";
import MainFooter from "../HomeComponent/MainFooter";
const Zerowastesocieties = () => {
  
//   const data = {
//     title : "Zero Waste",
// }

  return (
    <>
      {/* <ServBanner data={data} /> */}
    <ServCompOne />
    <ServCompTwo />
    <ServCompThree />
    <Discover />
    <MainFooter />
    </>
  )
}

export default Zerowastesocieties
