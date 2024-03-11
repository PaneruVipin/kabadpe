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
  return (
    <>
      <ServBanner />
      <WasteSipCompOne />
      <WasteSipCompFour />
      <WastesipCompTwo />
      <Discover />
    <MainFooter />
    </>
  )
}

export default WasteSip
