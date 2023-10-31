import React from 'react'
import '../style/SalesHistComp.css';
import '../style/Profile.css';
import UseProfRightbx from './UseProfRightbx'

const UserOrders = () => {
  return (
    <>
      <section className="user-prof-grid-comp">
      <section className="sales-hist-comp">

        <h5>My Orders</h5>

        <div className="sales-title-search-date-bx-status-flex-bx">

<div className="right-search-date-bx-status-bx">

    <div className="sales-search-bx ord-inpt">
        <input type="text" name='search' id='search' placeholder='Search...' />
    </div>

    <div className="date-from-bx ord-inpt">
        <label htmlFor="From">From</label>
        <input type="date" name='date' id='date'  />
    </div>

    <div className="date-from-bx ord-inpt">
        <label htmlFor="From">To</label>
        <input type="date" name='date' id='date'  />
    </div>

    <div className="date-from-bx sta-sel-bx ord-inpt">
        <label htmlFor="From">Status</label>
        <select name="status" id="status">
            <option value="">Choose an option</option>
            <option value='Order Receive'>Order Receive</option>
            <option value='Ready to Dispatch'>Ready to Dispatch</option>
            <option value='Dispatched'>Dispatched</option>
            <option value='Delivered'>Delivered</option>


        </select>
    </div>

    <div className="sales-search-btn">
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    
</div>

</div>

        
        <div className="s-h-cont s-h-cont10">
        
        <div className="u-p-updt-table-bx u-p-updt-table-bx10 u-p-updt-table-bx11 u-p-updt-table-bx4">
                <table>
                <thead>
                        <tr>
                            <th>SN</th>
                            <th>Date</th>
                            <th>Payment</th>
                            <th>Order Value</th>
                            <th>Status</th>
                            <th><div>Invoice</div></th> 

                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>
                                <div className="u-p-tb-data ">
                                    <div className="t-icn t-numbr t-numbr6 t-numb-ord">
                                    1
                                    </div>
                                    
                                </div>
                            </td>

                            <td>
                            <div className="u-p-tb-info sale-hist-data sale-hist-data3">
                                    <h6>29-09-2023</h6>
                                    {/* <span>Anand Vihar</span> */}
                                    </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx sale-hist-data">
                                    <h6>Cash </h6>
                                </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx sale-hist-data">
                                    <h6>8700/- </h6>
                                </div>
                            </td>

                            <td>
                                <div className="stat-ord-bx">
                                    <div className="stat-ord-btn">Order Receive</div>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx upcoming-bx sale-hist-data sale-hist-data56 sale-hist-data55">
                                CSS09480 
                                <div className="s-h-ic s-h-ic5 t-numb-ord2">
                                <i class="fa-solid fa-arrow-down"></i>
                                </div>
                                </div>
                            </td>
                            
                        </tr>
                        
                        <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn t-numbr t-numbr6 t-numb-ord">
                                    2
                                    </div>
                                    
                                </div>
                            </td>

                            <td>
                            <div className="u-p-tb-info sale-hist-data sale-hist-data3">
                                    <h6>29-09-2023</h6>
                                    {/* <span>Anand Vihar</span> */}
                                    </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx sale-hist-data">
                                    <h6>Cash </h6>
                                </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx sale-hist-data">
                                    <h6>8700/- </h6>
                                </div>
                            </td>

                            <td>
                                <div className="stat-ord-bx">
                                    <div className="stat-ord-btn">Ready to Dispatch</div>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx upcoming-bx sale-hist-data sale-hist-data56 sale-hist-data55">
                                CSS09480 
                                <div className="s-h-ic s-h-ic5 t-numb-ord2">
                                <i class="fa-solid fa-arrow-down"></i>
                                </div>
                                </div>
                            </td>
                            
                        </tr>


                        <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn t-numbr t-numbr6 t-numb-ord">
                                    3
                                    </div>
                                   
                                </div>
                            </td>

                            <td>
                            <div className="u-p-tb-info sale-hist-data sale-hist-data3">
                                    <h6>29-09-2023</h6>
                                    {/* <span>Anand Vihar</span> */}
                                    </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx sale-hist-data">
                                    <h6>Cash </h6>
                                </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx sale-hist-data">
                                    <h6>8700/- </h6>
                                </div>
                            </td>

                            <td>
                                <div className="stat-ord-bx">
                                    <div className="stat-ord-btn">Dispatched</div>
                                    <span>Way Bill No. : <a href="#">3245988711</a> </span>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx upcoming-bx sale-hist-data sale-hist-data56 sale-hist-data55">
                                CSS09480 
                                <div className="s-h-ic s-h-ic5 t-numb-ord2">
                                <i class="fa-solid fa-arrow-down"></i>
                                </div>
                                </div>
                            </td>
                            
                        </tr>



                        <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn t-numbr t-numbr6 t-numb-ord">
                                    4
                                    </div>
                                   
                                </div>
                            </td>

                            <td>
                            <div className="u-p-tb-info sale-hist-data sale-hist-data3">
                                    <h6>29-09-2023</h6>
                                    {/* <span>Anand Vihar</span> */}
                                    </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx sale-hist-data">
                                    <h6>Cash </h6>
                                </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx sale-hist-data">
                                    <h6>8700/- </h6>
                                </div>
                            </td>

                            <td>
                                <div className="stat-ord-bx">
                                    <div className="stat-ord-btn">Delivered</div>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx upcoming-bx sale-hist-data sale-hist-data56 sale-hist-data55">
                                CSS09480 
                                <div className="s-h-ic s-h-ic5 t-numb-ord2">
                                <i class="fa-solid fa-arrow-down"></i>
                                </div>
                                </div>
                            </td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
      </section>

      <UseProfRightbx />

      </section>
    </>
  )
}

export default UserOrders
