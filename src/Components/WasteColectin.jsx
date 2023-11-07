import React from 'react'

const WasteColectin = () => {
  return (
    <>
    <section className="waste-colectin-comp waste-appoint-ment-comp">

      <h3>Waste Collection</h3>
      
    <div
                className="table-parent-bx table-parent-bx5 table-parent-bx10 tab-bx tabbxactive"

              >
                <div className="prof-table-main-bx prof-table-main-bx-waste-collec-tble wastecolect-table-main-bx-waste-collec-tble">
                  <table>
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Date</th>
                        <th>Customer Name</th>
                        <th>Waste (Rupees)</th>
                        <th>Paid By</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>20/10/23</td>
                        <td>Faisal Imam</td>
                        <td>2850.00</td>
                        <td>Wallet</td>
                        <td>
                          <div className="td-flex">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>20/10/23</td>
                        <td>Nawaj Akhtar</td>
                        <td>1150.00</td>
                        <td>Cash</td>
                        <td>
                          <div className="td-flex">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>20/10/23</td>
                        <td>Waqqar Alam</td>
                        <td>1450.00</td>
                        <td>Wallet</td>
                        <td>
                          <div className="td-flex">
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

export default WasteColectin
