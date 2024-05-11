import React, { useState } from "react";
import Updatecharge from "./Updatecharge";

const AdminBid = () => {
    const [charge , setCharge] = useState(false)

    const bidData = [

        {
            id : 1,
            productName : 'Plastic',
            sellerName : 'Brand Orbitor',
            totalBid : 45,
            productValue : 25000,
            comission : 200,
            status : 'Ongoing',

        },
        {
            id : 2,
            productName : 'Iron',
            sellerName : 'Digital Dezire',
            totalBid : 30,
            productValue : 30000,
            comission : 300,
            status : 'Offered',

        },
        {
            id : 3,
            productName : 'Cardboard',
            sellerName : 'Brand Orbitor',
            totalBid : 30,
            productValue : 15000,
            comission : 200,
            status : 'Deal By Seller',

        },
        {
            id : 4,
            productName : 'Paper',
            sellerName : 'Brand Orbitor',
            totalBid : 26,
            productValue : 17000,
            comission : 80,
            status : 'Payment Received',

        },
        {
            id : 5,
            productName : 'Tablet',
            sellerName : 'Extra Frames',
            totalBid : 25,
            productValue : 30000,
            comission : 250,
            status : 'Dispatched',

        },
        {
            id : 6,
            productName : 'tyre',
            sellerName : 'Digital Dezire',
            totalBid : 45,
            productValue : 25000,
            comission : 170,
            status : 'Delivered',

        },
        {
            id : 7,
            productName : 'Monitor Big',
            sellerName : 'Brand Orbitor',
            totalBid : 50,
            productValue : 28000,
            comission : 350,
            status : 'Completed',

        },
        
    ]
    
  return (
    <>
      <section className="admin-bids-comp">
        <div className="common-container">
          <div className="bids-card-grid">
            <div class="card-box card-box3">
              <div class="left-card-info">
                <h6>49</h6>
                <p>Total Active Bids</p>
              </div>
              <div class="right-card-icon">
              <i class="fa-solid fa-hammer"></i>
              </div>
            </div>
            <div class="card-box card-box8">
              <div class="left-card-info">
                <h6>250</h6>
                <p>Total Active Offers</p>
              </div>
              <div class="right-card-icon">
              <i class="fa-solid fa-scale-balanced"></i>
              </div>
            </div>
            <div class="card-box card-box5">
              <div class="left-card-info">
                <h6>80</h6>
                <p>Offers Closed</p>
              </div>
              <div class="right-card-icon">
              <i class="fa-solid fa-shop-lock"></i>
              </div>
            </div>
            <div class="card-box card-box7">
              <div class="left-card-info">
                <h6>39</h6>
                <p>On Going</p>
              </div>
              <div class="right-card-icon">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
              </div>
            </div>
          </div>

          <div className="admin-bid-filter-flex-bx mt-5">

            <div className="admn-bid-left-bx ">

            <div className="all-prod-sel-filt-box all-bid-status-box">
                    <select name="status" id="status">
                        <option value="status">Choose Status</option>
                        <option value="status">On Going</option>
                        <option value="status">Deal By Seller</option>
                        <option value="status">Payment Received</option>
                        <option value="status">Dispatched</option>
                        <option value="status">Delivered</option>
                        <option value="status">Completed</option>


                    </select>

                </div>

                <div className="bid-filt-btns-flex">

                    <button className="bid-filt-btn bidactive">
                        All
                    </button>
                    <button className="bid-filt-btn">
                        Active
                    </button>
                    <button className="bid-filt-btn">
                        Ongoing
                    </button>
                    <button className="bid-filt-btn">
                        Closed
                    </button>
                    
                </div>
                
            </div>

            <div className="admn-bid-right-bx ">

            <div className="right-all-prod-search-box bid-serch-bx">
            <input type="text" name='search' id='search' autoComplete='off' placeholder='Search...' />
        </div>

        <button onClick={() => setCharge(true)} className="search-prod-btn search-prod-btn2">
            Update Charges
        </button>
                
            </div>
            
          </div>

            <div className="admin-bid-table mt-5">
                <div className="all-user-table stock-tble mnge-waste-table bid-table">
                    <table>
                        <thead>
                            <tr>
                                <th>SNo.</th>
                                <th>product Name</th>
                                <th>Seller Name</th>
                                <th>Total Bid</th>
                                <th>Product Value</th>
                                <th>Platform Comision</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                           {bidData.map((curData,idx) => {
                            return (
                                <>
                                 <tr key={idx}>
                                <td><span> {curData.id} </span></td>
                                <td><span> {curData.productName} </span></td>
                                <td><span> {curData.sellerName} </span></td>
                                <td><span> {curData.totalBid} </span></td>
                                <td><span> {curData.productValue} </span></td>
                                <td><span> {curData.comission} </span></td>
                                <td><span> {curData.status} </span></td>
                                <td> <button className="trnfr-btn">
                                    Tranfer
                                    </button> </td>
                             
                                <td><span> C1124509385  </span></td>

                            </tr>
                                
                                </>
                            )
                           })}
                        </tbody>
                    </table>
                </div>
            </div>
          
          
        </div>
      </section>

      { charge && ( 
        <Updatecharge onClickClose={() => setCharge(false)} />
      ) }
    </>
  );
};

export default AdminBid;
