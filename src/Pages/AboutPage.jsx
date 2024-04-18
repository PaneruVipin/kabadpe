import React from 'react'
import AboutComp from '../Components/AboutComp'
import AboutBanner from '../AboutComp/AboutBanner'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'

const AboutPage = () => {
  const data = {
    title : 'About Us',
    text : 'About Us',
  }
  
  return (
    <>
     <AboutBanner  data={data} />
      <AboutComp />
      <Discover />
      <MainFooter />
    </>
  )
}

export default AboutPage
