import React from 'react'
import '../style/SalesHistComp.css';
import '../style/Profile.css';
import UseProfRightbx from './UseProfRightbx';


const SalesHistoryComp = () => {
  return (
    <>
      <section className="user-prof-grid-comp">
      <section className="sales-hist-comp">
      <h5>Sales History</h5>



    <div className="sales-title-search-date-bx-status-flex-bx">

        <div className="right-search-date-bx-status-bx">

            <div className="sales-search-bx">
                <input type="text" name='search' id='search' placeholder='Search...' />
            </div>

            <div className="date-from-bx">
                <label htmlFor="From">From</label>
                <input type="date" name='date' id='date'  />
            </div>

            <div className="date-from-bx">
                <label htmlFor="From">To</label>
                <input type="date" name='date' id='date'  />
            </div>

            <div className="date-from-bx sta-sel-bx">
                <label htmlFor="From">Status</label>
                <select name="status" id="status">
                    <option value='pending'>Pending</option>
                    <option value='completed'>Completed</option>

                </select>
            </div>

            <div className="sales-search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>

        </div>
        
        <div className="s-h-cont">
        
        <div className="u-p-updt-table-bx u-p-updt-table-bx4">
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Date</th>
                            <th>Payment</th>
                            <th>Order Value</th>
                            <th>Status</th>
                            <th>Invoice</th>

                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn t-numbr">
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
                                <div className="status-text stats-p">
                                    <span>Pending</span>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx upcoming-bx sale-hist-data sale-hist-data55">
                                CSS09480 
                                <div className="s-h-ic">
                                <i class="fa-solid fa-arrow-down"></i>
                                </div>
                                </div>
                            </td>
                            
                        </tr>
                        
                        <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn t-numbr">
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
                                <div className="status-text">
                                    <span>Completed</span>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx upcoming-bx sale-hist-data sale-hist-data55">
                                CSS09480 
                                <div className="s-h-ic">
                                <i class="fa-solid fa-arrow-down"></i>
                                </div>
                                </div>
                            </td>
                            
                        </tr>


                        <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn t-numbr">
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
                                <div className="status-text">
                                    <span>Completed</span>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx upcoming-bx sale-hist-data sale-hist-data55">
                                CSS09480 
                                <div className="s-h-ic">
                                <i class="fa-solid fa-arrow-down"></i>
                                </div>
                                </div>
                            </td>
                            
                        </tr>



                        <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn t-numbr">
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
                                <div className="status-text stats-p">
                                    <span>Pending</span>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx upcoming-bx sale-hist-data sale-hist-data55">
                                CSS09480 
                                <div className="s-h-ic">
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

export default SalesHistoryComp
