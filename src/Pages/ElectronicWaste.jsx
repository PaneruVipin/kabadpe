import React from 'react'
import ElectWasteCompOne from '../ServComps/ElectWasteCompOne'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import ElectWasteCompTwo from '../ServComps/ElectWasteCompTwo'
import ElectWasteCompThree from '../ServComps/ElectWasteCompThree'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import ElectWasteCompFour from '../ServComps/ElectWasteCompFour'

const ElectronicWaste = () => {

    // const data = {
    //     title : "Electronic Waste",
    // }
    
  return (
    <>
    {/* <BulkWasteBanner data={data} /> */}
      <ElectWasteCompOne />
      <ElectWasteCompTwo />
      <ElectWasteCompThree />
      <ElectWasteCompFour />
      <Discover />
      <MainFooter />

    </>
  )
}

export default ElectronicWaste
