import React from 'react'
import MainFooter from '../HomeComponent/MainFooter'
import Discover from '../HomeComponent/Discover'
import EprCompThree from '../ServComps/EprCompThree'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import EprCompOne from '../ServComps/EprCompOne'
import IEcTwo from '../ServComps/IEcTwo'

const IEC = () => {
    const data = {
        title : "IEC Development and Consulting",
    }

    const comnData = {

        name : 'IEC Development and Consulting',
        para : 'Empowering Change through Effective Communication',
        title : 'Tailoring Communication Strategies for Sustainability',
        text : 'KabadPe offers specialized Information, Education, and Communication (IEC) Development  and Consulting services, catering to the unique needs of governments, NGOs, and civil  society organizations. Our focus is on creating impactful communication strategies that  promote environmental awareness and sustainable practices.',
        keyword : 'Keywords: IEC development services, environmental communication consulting,  sustainability awareness campaigns',
        
    }

    const lastData = {

        heading : 'Get in Touch for a Consultation',
        para : 'Ready to elevate your organization’s communication strategies? Contact  KabadPe today and let’s collaborate to create powerful messages that drive  environmental action and change.',
        link  : 'Contact Link',
    }
    
  return (
    <>
      <BulkWasteBanner data={data} />
    <EprCompOne comnData={comnData} />
    <IEcTwo />
    <EprCompThree lastData={lastData} />
    <Discover />
    <MainFooter />
    </>
  )
}

export default IEC
