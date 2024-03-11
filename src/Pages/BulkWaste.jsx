import React from 'react'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import BulkWasteCompOne from '../ServComps/BulkWasteCompOne'
import BulkWasteCompTwo from '../ServComps/BulkWasteCompTwo'
import BulkWasteCompThree from '../ServComps/BulkWasteCompThree'
import BulkWasteCompFour from '../ServComps/BulkWasteCompFour'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'

const BulkWaste = () => {

    const data = {
        title : "Bulk Waste",
    }
    
  return (
    <>
    <BulkWasteBanner data={data} />
      <BulkWasteCompOne />
      <BulkWasteCompTwo />
      <BulkWasteCompThree />
      <BulkWasteCompFour />
      <Discover />
      <MainFooter />
    </>
  )
}

export default BulkWaste
