import React from 'react'
import Discover from '../HomeComponent/Discover'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import EprCompOne from '../ServComps/EprCompOne'
import EprCompThree from '../ServComps/EprCompThree'
import MainFooter from '../HomeComponent/MainFooter'
import CsrTwo from '../ServComps/CsrTwo'

const CSR = () => {

    // const data = {
    //     title : "CSR Services",
    // }

    const comnData = {

        name : 'CSR Services',
        para : 'Amplifying Your Corporate Impact Forge a Sustainable Future with Your Business',
        // title : 'Safeguard Your Confidentiality, Protect the Environment',
        text : 'At KabadPe, we specialize in providing CSR services that align with your corporate values and goals. Our tailored approach helps businesses make a meaningful impact on social and environmental issues, enhancing their corporate image and community relations.',
        keyword : 'Keywords: corporate social responsibility services, sustainable business practices, CSR   strategy development',
        
    }

    const lastData = {

        heading : 'Contact Us for a Consultation',
        para : 'Ready to elevate your corporate social responsibility efforts? Contact KabadPe today to explore how we can assist in developing and implementing effective CSR strategies for your business.',
        link  : 'Contact Link',
    }
    
    
  return (
    <>
      {/* <BulkWasteBanner data={data} /> */}
    <EprCompOne comnData={comnData} />
    <CsrTwo />
    <EprCompThree lastData={lastData} />

    <Discover />
    <MainFooter />
    </>
  )
}

export default CSR
