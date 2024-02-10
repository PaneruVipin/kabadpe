import React from 'react'

const IndvdualPlan = ({onSwitch}) => {
  return (
    <>
      <div className="all-user-table mt-5">
      <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Plan </th>
                <th>Worker</th>
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
                <tr>
                    <td> <span>1</span> </td>
                    <td> <span>Monthly</span> </td>
                    <td> <span>Andrew Garfield</span> </td>
                    <td> <span>2-8-2023 to 1-9-2023</span> </td>
                    <td> <span>Laxmi Nagar</span> </td>
                    <td> <span>Kundan Nagar</span> </td>
                    <td> <span>₹30</span> </td>
                    <td> <span>CSS221400</span> </td>
                    <td> <span className='actve-text'>Active</span> </td>

                <td>
                    <div className="edit-upgrade-btns">
                        <button>Edit</button>
                        <button onClick={onSwitch}>Upgrade</button>
                    </div>
                </td>

                </tr>
               
            </tbody>
         
          </table>
      </div>
    </>
  )
}

export default IndvdualPlan
