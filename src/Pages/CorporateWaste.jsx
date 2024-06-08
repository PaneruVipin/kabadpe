import React from 'react'
import CorpWasteCompOne from '../ServComps/CorpWasteCompOne'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import CorpWasteCompTwo from '../ServComps/CorpWasteCompTwo'
import CorpWasteCompThree from '../ServComps/CorpWasteCompThree'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'

const CorporateWaste = () => {
    // const data = {
    //     title : "Corporate Waste Management",
    // }
  return (
    <>
    {/* <BulkWasteBanner data={data} /> */}
      <CorpWasteCompOne />
      <CorpWasteCompTwo />
      <CorpWasteCompThree />
      <Discover />
      <MainFooter />
    </>
  )
}

export default CorporateWaste
