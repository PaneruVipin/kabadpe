import React from 'react'
import AdminWasteProd from '../Components/AdminWasteProductsList'
import FrenchiesWasteTable from './FrenchiesWasteTable'

const FrenchiesWastePcikup = () => {
  return (
    <>

<section className="admin-mange-waste-bx">
        <div className="right-tab-main-bx  tab-bx tabbxactive">
          <div className="tab-main-bx tab-main-bx3 tab-main-bx-title">
            <h3>Manage Waste </h3>

            <div className="waste-mnge-prod-main">
              <div className="waste-manage-prod-grid-main">
                <div className="waste-mnge-prod-bx">
                  <div className="waste-mnge-prod-text">
                    <h6> Total Waste </h6>
                    <p> 0kg </p>
                  </div>
                  <div className="waste-prod-icon">
                    <img src="/images/customImg/hazardous.png" alt="" />
                  </div>
                </div>
                {AdminWasteProd.map((curElem,indx) => {
                    return (
                        <>
                           <div className="waste-mnge-prod-bx" key={curElem.indx}>
                  <div className="waste-mnge-prod-text">
                    <h6> {curElem.title} </h6>
                    <p> {curElem.unit} kg </p>
                  </div>
                  <div className="waste-prod-icon">
                    <img src={curElem.img} alt="" />
                  </div>
                </div>
                        </>
                    )
                })}

                </div>
                </div>
                </div>

                <FrenchiesWasteTable />
                
                </div>
                </section>

      
    </>
  )
}

export default FrenchiesWastePcikup
