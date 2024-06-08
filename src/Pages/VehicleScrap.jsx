import React from 'react'
import BulkWasteBanner from '../ServComps/BulkWasteBanner'
import VehScrapCompOne from '../ServComps/VehScrapCompOne'
import VehScrapOne from '../ServComps/VehScrapOne'
import VehCompTwo from '../ServComps/VehCompTwo'
import VehCompThree from '../ServComps/VehCompThree'

const VehicleScrap = () => {
    // const data = {
    //     title : "Vehicle Scrapping",
    // }
  return (
    <>
    {/* <BulkWasteBanner data={data} /> */}
      <VehScrapCompOne />
      <VehScrapOne />
      <VehCompTwo />
      <VehCompThree />
    </>
  )
}

export default VehicleScrap
