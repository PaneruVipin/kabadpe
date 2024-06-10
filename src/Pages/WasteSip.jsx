import React from 'react'
import ServBanner from '../ServComps/ServBanner'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import ServCompTwo from '../ServComps/ServCompTwo'
import WastesipCompTwo from '../ServComps/WastesipCompTwo'
import WastesipCompThree from '../ServComps/WastesipCompThree'
import WasteSipCompOne from '../ServComps/WasteSipCompOne'
import WasteSipCompFour from '../ServComps/WasteSipCompFour'

const WasteSip = () => {

  // const data = {

  //   title : "Services",
  //   link : 'Service'
    
  // }
  
  return (
    <>
      {/* <ServBanner  data={data}/> */}
      <WasteSipCompOne />
      <WasteSipCompFour />
      <WastesipCompTwo />
      <Discover />
    <MainFooter />
    </>
  )
}

export default WasteSip
