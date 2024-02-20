import React from 'react'

const WasteSales = () => {
  return (
    <>
      <section className='waste-colectin-comp waste-appoint-ment-comp'>
      <h3>Sales History</h3>
      
      <div
                className= "table-parent-bx table-parent-bx5 table-parent-bx10 tab-bx tabbxactive"

              >
                <div className="prof-table-main-bx prof-table-main-bx2 wastecolect-table-main-bx-waste-collec-tble wastecolect-table-main-bx-waste-collec-tble2">
                  <table>
                    <thead>
                      <tr>
                        <th>SN</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Order Value (INR)</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>29-09-2023</td>
                        <td>Cash</td>
                        <td>8700/-</td>
                        <td>
                          <div className="td-flex td-flex2">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>27-08-2023</td>
                        <td>Wallet</td>
                        <td>659/-</td>
                        <td>
                          <div className="td-flex td-flex2">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>03-08-2023</td>
                        <td>Wallet</td>
                        <td>762/-</td>
                        <td>
                          <div className="td-flex td-flex2">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
      </section>
    </>
  )
}

export default WasteSales
