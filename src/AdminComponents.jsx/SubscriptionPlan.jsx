import React, { useState } from 'react'
import subsData from '../subscriptionData'
import SubsDetEdit from './SubsDetEdit';

const SubscriptionPlan = () => {
    const [subsPlan , setSubsPlan] = useState(subsData);
    const [subsDataBox , setSubsDataBox] = useState(false);

    const subsDataClose = () => {

        setSubsDataBox(false);

    }

    const [selectedOption, setSelectedOption] = useState('fixed');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };


    
  return (
    <>

<div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="fixed">Fixed</option>
        <option value="variable">Variable</option>
      </select>
      {selectedOption === 'fixed' ? (
        <div>
          <label>
            Message:
            <input type="text" placeholder="Enter message" />
          </label>
        </div>
      ) : (
        <div>
          <label>
            Name:
            <input type="text" placeholder="Enter name" />
          </label>
        </div>
      )}
    </div>

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
                          <div onClick={() => setSubsDataBox(true)} className="edit-user-btn">
                            <i class="fa-regular fa-pen-to-square"></i>
                          </div>
                        </td>


                    </tr>
                            </>
                        )
                        
                    })}
                    
                   
                </tbody>
            </table>
            
        </div>
        
    </section>

    


    {subsDataBox ?  <SubsDetEdit onclickCloseSubsDat={subsDataClose} /> : null}
    </>
  )
}

export default SubscriptionPlan
