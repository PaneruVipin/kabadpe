import React from 'react'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import EprCompOne from '../ServComps/EprCompOne'
import EprCompThree from '../ServComps/EprCompThree'
import EprCompTwo from '../ServComps/EprCompTwo'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'

const Dismant = () => {
    const data = {
        title : "Dismantling Services",
    }

    const comnData = {

        name : 'Dismantling Services',
        para : 'Expert Solutions for Business Needs Professional Dismantling Services Tailored for Your Business',
        text : 'At KabadPe, we offer specialized dismantling services designed to meet the unique needs of businesses across various sectors. Our expert team ensures safe, efficient, and eco-friendly  dismantling of equipment and machinery, facilitating responsible recycling and waste management.',
        keyword : 'Keywords: professional dismantling services, eco-friendly waste management, business recycling solutions',
        
    }


    const lastData = {

        heading : 'Contact Us for a Consultation',
        para : 'Ready to manage your business’s dismantling needs with a professional, eco-friendly approach? Contact KabadPe today to discuss how our services can assist your business.',
        link  : 'Contact Link',
    }
    
  return (
    <>
    <BulkWasteBanner data={data} />
    <EprCompOne comnData={comnData} />
    <EprCompTwo />
    <EprCompThree lastData={lastData} />
    <Discover />
    <MainFooter />
      
    </>
  )
}

export default Dismant
