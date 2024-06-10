import React from 'react'
import MainFooter from '../HomeComponent/MainFooter'
import Discover from '../HomeComponent/Discover'
import EprCompThree from '../ServComps/EprCompThree'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import EprCompOne from '../ServComps/EprCompOne'
import MaterialTwo from '../ServComps/MaterialTwo'

const Material = () => {

    // const data = {
    //     title : "Material Recovery Center Management",
    // }

    const comnData = {

        name : 'Material Recovery',
        para : 'Building  Sustainable Communities',
        title : 'Transforming Waste Management for Governments and NGOs',
        text : 'KabadPe specializes in the management and planning of Material Recovery Centers (MRCs),  offering expert solutions to governments, NGOs, and civil society organizations. Our goal is  to create efficient, sustainable, and community-centric waste recovery and recycling systems.',
        keyword : 'Keywords: Material recovery center management, sustainable waste solutions for NGOs, government recycling programs',
        
    }

    const lastData = {

        heading : 'Contact Us for a Consultation',
        para : 'Join hands with KabadPe to revolutionize material recovery and recycling in your community. Contact us today to discuss how we can assist your government, NGO, or civil society organization in managing Material   Recovery Centers.',
        link  : 'Contact Link',
    }
    
  return (
    <>
      {/* <BulkWasteBanner data={data} /> */}
    <EprCompOne comnData={comnData} />
    <MaterialTwo />
    <EprCompThree lastData={lastData} />
    <Discover />
    <MainFooter />
    </>
  )
}

export default Material
