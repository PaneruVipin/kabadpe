import React from 'react'
import ServBanner from '../ServComps/ServBanner'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import ClimconnectCompOne from '../ServComps/ClimconnectCompOne'
import ClimconnectCompTwo from '../ServComps/ClimconnectCompTwo'
import ClimconnectCompThree from '../ServComps/ClimconnectCompThree'
import ClimconnectFour from '../ServComps/ClimconnectFour'

const Climconnect = () => {
  return (
    <>
      {/* <ServBanner /> */}
      <ClimconnectCompOne />
      <ClimconnectCompTwo />
      <ClimconnectCompThree />
      <ClimconnectFour />
    

      <Discover />
      <MainFooter />
    </>
  )
}

export default Climconnect
