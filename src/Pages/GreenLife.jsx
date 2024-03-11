import React from 'react'
import ServBanner from '../ServComps/ServBanner'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import GreenLifeCompOne from '../ServComps/GreenLifeCompOne'
import GreenLifeCompTwo from '../ServComps/GreenLifeCompTwo'
import GreenLifeCompThree from '../ServComps/GreenLifeCompThree'
import GreenLifeFive from '../ServComps/GreenLifeFive'

const GreenLife = () => {
  return (
    <>
      <ServBanner />
      <GreenLifeCompOne />
      <GreenLifeCompTwo />
      <GreenLifeCompThree />
      <GreenLifeFive />
      <Discover />
      <MainFooter />
      
    </>
  )
}

export default GreenLife
