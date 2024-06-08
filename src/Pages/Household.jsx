import React from 'react'
import ServBanner from '../ServComps/ServBanner'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import HouseholdCompOne from '../ServComps/HouseholdCompOne'
import HouseholdCompTwo from '../ServComps/HouseholdCompTwo'

const Household = () => {
  return (
    <>
      {/* <ServBanner /> */}
      <HouseholdCompOne />
      <HouseholdCompTwo />

      <Discover />
      <MainFooter />
    </>
  )
}

export default Household
