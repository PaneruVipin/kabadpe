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

        <h6>Subscription Plans</h6>

        <div className="all-user-table subs-plan-table">

            <table>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>Plan Title</th>
                        <th>Period</th>
                        <th>City</th>
                        <th>Zip</th>
                        <th>Changes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {subsPlan.map((elem,id) => {

                        return (
                            <>
<tr key={id}>
                        <td> {elem.id} </td>
                        <td> <span> {elem.plantitle} </span> </td>
                        <td> <span> {elem.period} </span> </td>
                        <td> <span> {elem.city} </span> </td>
                        <td> <span> {elem.zip} </span> </td>
                        <td> <span> {elem.charges} </span> </td>
                        <td>
                          <div  className="edit-user-btn " style={{color : "green"}} >
                          <i class="fa-solid fa-square-check"></i>
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

     

        <button onClick={() => setUpgradeBx(true)} className="upgrade-btn">
            Upgrade
        </button>


        
        
    </section>

    

   {upgradeBx ? <Upgradepopupbx onclickCloseUpgradeBx={() => setUpgradeBx(false)} /> : null}
    {subsDataBox ?  <SubsDetEdit onclickCloseSubsDat={subsDataClose} /> : null}
    </>
  )
}

export default SubscriptionPlan
