import React from 'react'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import EprCompOne from '../ServComps/EprCompOne'
import EprCompTwo from '../ServComps/EprCompTwo'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import EprCompThree from '../ServComps/EprCompThree'

const Epr = () => {
    const data = {
        title : "EPR Services",
    }

    const comnData = {

        name : 'EPR Services',
        para : 'Streamlining Your Environmental Responsibility, Fulfilling Your EPR Commitments with Ease',
        text : 'KabadPe&#39;s Extended Producer Responsibility (EPR) services are designed to assist businesses in meeting their environmental responsibilities efficiently and effectively. We provide end-to-end solutions to ensure compliance with EPR regulations, contributing to sustainable  waste management.',
        keyword : 'Keywords: Extended Producer Responsibility services, EPR compliance for businesses, sustainable waste management solutions',
        
    }


    const lastData = {

        heading : 'Join the Sustainable Business Community',
        para : 'Embrace your role in fostering a sustainable future. Partner with KabadPe for your EPR needs and take a significant step towards eco-friendly business practices.',
        link  : 'Contact',
    }
    
    
  return (
    <>
    <BulkWasteBanner data={data} />
    <EprCompOne comnData={comnData} />
    <EprCompTwo />
    <EprCompThree lastData={lastData}  />
    <Discover />
    <MainFooter />
      
    </>
  )
}

export default Epr
