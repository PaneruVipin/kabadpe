import React from 'react'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import EprCompOne from '../ServComps/EprCompOne'
import PaperShredTwo from '../ServComps/PaperShredTwo'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import EprCompThree from '../ServComps/EprCompThree'

const PaperShred = () => {
    const data = {
        title : "Paper Shredding Services",
    }

    const comnData = {

        name : 'Paper Shredding Services',
        para : 'Secure and Sustainable Document Destruction for Businesses',
        title : 'Safeguard Your Confidentiality, Protect the Environment',
        text : 'KabadPe&#39;s Paper Shredding Services offer a secure and eco-friendly solution for businesses to dispose of their confidential documents. We combine stringent security measures with a commitment to environmental sustainability.',
        keyword : 'Keywords: secure paper shredding services, document destruction for businesses, eco-friendly shredding solutions',
        
    }

    const lastData = {

        heading : 'Contact Us for a Quote',
        para : 'Ensure the security of your confidential documents and contribute to a  greener planet. Contact KabadPe today to discuss your paper shredding needs and how we can assist you.',
        link  : 'Contact Link',
    }
    
  return (
    <>
      <BulkWasteBanner data={data} />
    <EprCompOne comnData={comnData} />
    <PaperShredTwo />
    <EprCompThree lastData={lastData} />

    <Discover />
    <MainFooter />
    </>
  )
}

export default PaperShred
