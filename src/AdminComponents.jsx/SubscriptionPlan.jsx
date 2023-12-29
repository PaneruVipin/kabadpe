import React, { useState } from 'react'
import subsData from '../subscriptionData'
import SubsDetEdit from './SubsDetEdit';
import Upgradepopupbx from './Upgradepopupbx';

const SubscriptionPlan = () => {
    const [subsPlan , setSubsPlan] = useState(subsData);
    const [subsDataBox , setSubsDataBox] = useState(false);
    const [upgradeBx , setUpgradeBx] =  useState(false);

    const subsDataClose = () => {

        setSubsDataBox(false);

    }

 


    
  return (
    <>


    <section className="subscrip-plan-comp">

        <h6>Subscribed</h6>

        <div className="all-user-table subs-plan-table subs-plan-table5">

            <table>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>Plan </th>
                        <th>Frenchies Name</th>
                        <th>Subscription Period</th>
                        <th>Area</th>
                        <th>Sub Area</th>
                        <th>Amount</th>
                        <th>Invoice</th>
                        <th>Status</th>
                        <th>Action</th>



                    </tr>
                </thead>
                <tbody>

                    {subsPlan.map((elem,id) => {

                        return (
                            <>

                            <tr key={id}>
                                <td> <span> {elem.id} </span> </td>
                                <td> <span> {elem.plantitle} </span> </td>
                                <td> <span> {elem.frenchName} </span> </td>
                                <td> <span> {elem.period} </span> </td>
                                <td> <span> {elem.area} </span> </td>
                                <td> <span > {elem.subarea} </span> </td>
                                <td> <span> {elem.amount} </span> </td>
                                <td> <span> {elem.invoice} </span> </td>
                                <td> <span style={{ color : elem.banbtn === "Unban" ? "red" : "#54be73" }}> {elem.status} </span> </td>
                                <td>

                                    <div className="btn-ban-del-flex">

                                        <button className={ elem.banbtn === 'Ban' ? 'banbtn activebanbtn' : 'banbtn' }>
                                            {elem.banbtn}
                                        </button>

                                        <button className='del-btn'>
                                            {elem.delbtn}
                                        </button>
                                        
                                    </div>
                                    
                                </td>

                            </tr>
                    
                            </>
                        )
                        
                    })}

                    {/* onClick={() => setSubsDataBox(true)} */}
                    
                   
                </tbody>
            </table>
            
        </div>

     

        {/* <button onClick={() => setUpgradeBx(true)} className="upgrade-btn">
            Upgrade
        </button> */}


        
        
    </section>

    

   {upgradeBx ? <Upgradepopupbx upgradeTrue={upgradeBx} onclickCloseUpgradeBx={() => setUpgradeBx(false)} /> : null}
    {subsDataBox ?  <SubsDetEdit onclickCloseSubsDat={subsDataClose} /> : null}
    </>
  )
}

export default SubscriptionPlan
