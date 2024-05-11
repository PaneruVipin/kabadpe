import React from 'react'

const QuateOfferPopupTwo = ({onClickClose}) => {
  return (
    <>
      <div onClick={onClickClose} className="bid-popup-sec">
        <div onClick={(e) => e.stopPropagation()} className="bid-popup-bx">
          <h6>Quate your offer</h6>

          <div className="all-user-table stock-tble mnge-waste-table bid-popup-table mt-3 bid-table">
            <table>
              <thead>
                <tr>
                    <th> 
                    </th>
                    <th>
                        Seller
                    </th>
                    <th>
                    Previous  Seller
                    </th>
                    <th>
                        New offer
                    </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td><span>Price</span></td>
                    <td> <span>21/kg</span> </td>
                    <td> <span>22/kg</span></td>
                    <td> <div className="b-inpt">
                        <input type="number" name="price" id="price"  /></div> </td>
                </tr>
                <tr>
                    <td><span>Quantity</span></td>
                    <td> <span>1000kg</span> </td>
                    <td> <span>1000kg</span> </td>

                    <td> <div className="b-inpt">
                        <input type="number" name="price" id="price"  /></div> </td>
                </tr>
                <tr>
                    <td><span>GST</span></td>
                    <td><span>18%</span></td>
                    <td><span>18%</span></td>
                    <td><span>18%</span></td>
                </tr>
                <tr>
                    <td><span> Total Value</span></td>
                    <td><span> 25000</span></td>
                    <td><span> 25000</span></td>
                    <td><span> 23000</span></td>

                </tr>
              </tbody>
            </table>
          </div>


          <button className="b-comn-btn">
            Submit your offer
          </button>

          <p> <span>Note </span> Total value after including GST</p>

          
        </div>
      </div> 
    </>
  )
}

export default QuateOfferPopupTwo
