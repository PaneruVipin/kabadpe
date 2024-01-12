import React from 'react'
import ContactBreadCrum from '../ContactComp/ContactBreadCrum'
import ContInform from '../ContactComp/ContInform'
import ContForm from '../ContactComp/ContForm'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'

const Contact = () => {
  return (
    <>
      <ContactBreadCrum />
      <ContInform />
      <ContForm />
      <Discover />
      <MainFooter />
    </>
  )
}

export default Contact
