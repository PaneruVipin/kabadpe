import React from 'react'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import EprCompOne from '../ServComps/EprCompOne'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import CirEcoTwo from '../ServComps/CirEcoTwo'
import EprCompThree from '../ServComps/EprCompThree'

const CircularEconomy = () => {
    const data = {
        title : "Circular Economy Services",
    }

    const comnData = {

        name : 'Circular Economy Services',
        para : 'Revolutionizing Business Sustainability, Innovating for a Sustainable Future with   KabadPe',
        text : 'At KabadPe, we are committed to guiding businesses toward sustainable growth through our Circular Economy Services. Our approach focuses on minimizing waste and maximizing    resource efficiency, creating a closed-loop system that benefits both your business and the     environment.',
        keyword : 'Keywords: Circular economy services, sustainable business practices, waste-to-resource strategies',
        
    }

    
    const lastData = {

        heading : 'Contact KabadPe Today',
        para : 'Ready to embrace a more sustainable and profitable business model? Contact KabadPe to discover how our Circular Economy Services can benefit your business.',
        link  : 'Contact Link',
    }
    
  return (
    <>
      <BulkWasteBanner data={data} />
    <EprCompOne comnData={comnData} />
    <CirEcoTwo />
    <EprCompThree lastData={lastData} />
    <Discover />
    <MainFooter />
    </>
  )
}

export default CircularEconomy
