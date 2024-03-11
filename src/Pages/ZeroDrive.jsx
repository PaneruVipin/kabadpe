import React from 'react'
import EprCompThree from '../ServComps/EprCompThree'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import EprCompOne from '../ServComps/EprCompOne'
import ZeroDriveTwo from '../ServComps/ZeroDriveTwo'

const ZeroDrive = () => {

    const data = {
        title : "Zero Waste Drives",
    }

    const comnData = {

        name : 'Zero Waste Drives',
        para : 'Pioneering Corporate Sustainability',
        title : 'Drive Your Business Towards a Greener Future',
        text : 'KabadPe’s Zero Waste Drives are designed to assist businesses and corporates in achieving  ambitious sustainability goals. Our drives are tailored to help your company minimize waste,  maximize recycling, and make a substantial positive impact on the environment.',
        keyword : '',
        
    }

    const lastData = {

        heading : 'Get Started on Your Zero Waste Journey',
        para : 'Take the first step towards making your business more sustainable. Contact KabadPe today to learn more about how our Zero Waste Drives can revolutionize your company’s environmental impact.',
        link  : 'Contact Link',
    }
    
    
  return (
    <>
       <BulkWasteBanner data={data} />
    <EprCompOne comnData={comnData} />
    <ZeroDriveTwo />
    <EprCompThree lastData={lastData} />
    <Discover />
    <MainFooter />
    </>
  )
}

export default ZeroDrive
