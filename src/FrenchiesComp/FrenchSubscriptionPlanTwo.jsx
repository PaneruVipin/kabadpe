import React, { useState } from 'react'
import SubsDetEdit from '../AdminComponents.jsx/SubsDetEdit';
import Upgradepopupbx from '../AdminComponents.jsx/Upgradepopupbx'
import SubscribedPlanData from './FrenchSubscribedData';
import ViewArea from './ViewArea';

const FrenchSubscriptionPlanTwo = ({onclickRedirect}) => {
    const [subscrbdData , setSubscrbdData] = useState(SubscribedPlanData);
    const [subsDataBox , setSubsDataBox] = useState(false);
    const [upgradeBx , setUpgradeBx] =  useState(false);
    const [vwArea , setVwArea] = useState(false);

    const subsDataClose = () => {


        setSubsDataBox(false);

    }

 


    
  return (
    <>


    <section className="user-prof-grid-comp subscrip-plan-comp subscrip-plan-comp5 ">

        <div className="top-subs-text-flex">

        <h6>Subscribed</h6>


            <div className="right-btns-flex-subs">       
        <button onClick={onclickRedirect} className="upgrade-btn">
            Upgrade
        </button>
        <button  className="upgrade-btn renew-btn renew-btn2 renew-btn3">
            Renew
        </button>
        </div> 

        </div>

        <div className="all-user-table subs-plan-table subs-plan-table5">

            <table>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>Plan Name </th>
                        <th>Plan Type</th>
                        <th>Number Of Workers</th>
                        <th>Used</th>
                        <th>Free Space</th>
                        <th>Amount</th>
                        <th>Invoice</th>
                        <th>Working Area</th>



                    </tr>
                </thead>
                <tbody>

                    {subscrbdData.map((elem,id) => {
                        return (
                            <>

                            <tr key={id}>

                                <td> <span> {elem.id} </span> </td>
                                <td> <span> {elem.planName} </span> </td>
                                <td> <span> {elem.planType} </span> </td>
                                <td> <span> {elem.worker} </span> </td>
                                <td> <span> {elem.used} </span> </td>
                                <td> <span> {elem.free} </span> </td>
                                <td> <span> {elem.amount} </span> </td>
                                <td> <span> {elem.invoice} <i class="fa-regular fa-circle-down"></i> </span> </td>
                                <td> <button onClick={() => setVwArea(true)} className="work-area-btn">
                                    View Area</button> </td>
                                
                            </tr>
                            
                            </>
                        )
                    })}

                    
                   
                </tbody>
            </table>
            
        </div>

     



        
        
    </section>

    { vwArea ?  <ViewArea  onclickCloseBx={() => setVwArea(false)} areaData={SubscribedPlanData} /> : null }
   {upgradeBx ? <Upgradepopupbx upgradeTrue={upgradeBx} onclickCloseUpgradeBx={() => setUpgradeBx(false)} /> : null}
    {subsDataBox ?  <SubsDetEdit onclickCloseSubsDat={subsDataClose} /> : null}
    </>
  )
}

export default FrenchSubscriptionPlanTwo
