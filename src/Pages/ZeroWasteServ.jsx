import React from 'react'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import EprCompOne from '../ServComps/EprCompOne'
import EprCompThree from '../ServComps/EprCompThree'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'

const ZeroWasteServ = () => {

    // const data = {
    //     title : "Zero Waste Services",
    // }

    const comnData = {

        name : 'Zero Waste Services ',
        para : 'Towards a Sustainable Corporate Future',
        title : 'Embrace a Zero Waste Philosophy with KabadPe',
        text : 'KabadPe&#39;s Zero Waste Services are designed to guide businesses on their journey towards achieving zero waste goals. Our comprehensive approach helps companies reduce their environmental footprint, enhancing sustainability and operational efficiency.',
        keyword : 'Keywords: Zero waste services for businesses, corporate waste reduction, sustainable business practices',
        
    }

    
    const lastData = {

        heading : 'Get in Touch',
        para : 'Ready to take your business towards a more sustainable and waste-free future? Contact KabadPe today to learn more about our Zero Waste Services for businesses.',
        link  : 'Contact Link',
    }

    
    
  return (
    <>
        {/* <BulkWasteBanner data={data} /> */}
    <EprCompOne comnData={comnData} />

    <EprCompThree lastData={lastData} />
    <Discover />
    <MainFooter />

    </>
  )
}

export default ZeroWasteServ
