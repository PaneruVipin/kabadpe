import React from 'react'

const Updatecharge = ({onClickClose}) => {
  return (
    <>
        <div onClick={onClickClose} className="bid-popup-sec">
        <div onClick={(e) => e.stopPropagation()} className="bid-popup-bx bid-popup-bx2">
          <h6>Update Charges</h6>

          <div className="all-user-table stock-tble mnge-waste-table bid-popup-table mt-3 bid-table">
            <table>
              <thead>
                <tr>
                    <th> 
                    Level
                    </th>
                    <th>
                        Weight (kg)
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Charges
                    </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td><span>Level 1</span></td>
                    <td><span>0 - 500</span></td>
                    <td><span>0 - 500</span></td>

                    <td> <div className="b-inpt">
                        <input type="number" name="charge" id="charge"  placeholder='50' /></div> </td>
                </tr>
                <tr>
                    <td><span>Level 2</span></td>
                    <td><span>500 - 1000</span></td>
                    <td><span>500 - 1000</span></td>

                    <td> <div className="b-inpt">
                        <input type="number" name="charge" id="charge" placeholder='100'  /></div> </td>
                </tr>
                <tr>
                    <td><span>Level 3</span></td>
                    <td><span> More than 1000 </span></td>
                    <td><span> More than 1000 </span></td>

                    <td> <div className="b-inpt">
                        <input type="number" name="charge" id="charge" placeholder='200'  /></div> </td>
                </tr>
              
              </tbody>
            </table>
          </div>


          <button className="b-comn-btn">
            Save 
          </button>


          
        </div>
      </div>
    </>
  )
}

export default Updatecharge
