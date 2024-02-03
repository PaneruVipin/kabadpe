import React from 'react'
import OrderInfoProg from './OrderInfoProg'
import SaleChart from './SaleChart'
import RecentOrd from './RecentOrd'

const VendorDasgboard = () => {
  return (
    <>

    <section className="vend-dashboard-comp">
        <h6>Dashboard Overviews</h6>

            <div className="vend-dashbord-card-grid">

                <div className="v-d-card-bx">
                    <div className="v-box-icon">
                    <ion-icon name="layers-outline"></ion-icon>
                    </div>
                    <div className="v-d-card-info">
                        <h6>Today Orders</h6>
                      <p>₹7560</p>  
                    </div>
                    <div className="v-d-amount-flex">

                        <div className="v-d-amnt">
                            <span>Cash:</span>
                            <p>₹2550</p>
                        </div>

                        <div className="v-d-amnt">
                            <span>Card:</span>
                            <p>₹3540</p>
                        </div>

                        <div className="v-d-amnt">
                            <span>Cash:</span>
                            <p>₹0</p>
                        </div>
                        
                    </div>
                </div>

                <div className="v-d-card-bx v-d-card-bx2">
                    <div className="v-box-icon">
                    <ion-icon name="layers-outline"></ion-icon>
                    </div>
                    <div className="v-d-card-info">
                        <h6>Yesterday Orders</h6>
                      <p>₹7560</p>  
                    </div>
                    <div className="v-d-amount-flex">

                        <div className="v-d-amnt">
                            <span>Cash:</span>
                            <p>₹2550</p>
                        </div>

                        <div className="v-d-amnt">
                            <span>Card:</span>
                            <p>₹3540</p>
                        </div>

                        <div className="v-d-amnt">
                            <span>Cash:</span>
                            <p>₹0</p>
                        </div>
                        
                    </div>
                </div>

                <div className="v-d-card-bx v-d-card-bx3">
                    <div className="v-box-icon">
                    <ion-icon name="cart-outline"></ion-icon>
                    </div>
                    <div className="v-d-card-info">
                        <h6>This Month</h6>
                      <p>₹3580</p>  
                    </div>
                 
                </div>

                <div className="v-d-card-bx v-d-card-bx4">
                    <div className="v-box-icon">
                    <ion-icon name="pricetags-outline"></ion-icon>
                    </div>
                    <div className="v-d-card-info">
                        <h6>Last Month</h6>
                      <p>₹3580</p>  
                    </div>
                 
                </div>


                <div className="v-d-card-bx v-d-card-bx5">
                    <div className="v-box-icon">
                    <ion-icon name="pricetags-outline"></ion-icon>
                    </div>
                    <div className="v-d-card-info">
                        <h6>All-Time Sales</h6>
                      <p>5,60,450</p>  
                    </div>
                 
                </div>
                
            </div>
        
    </section>
    
    <OrderInfoProg />
    <SaleChart />
    <RecentOrd />
    </>
  )
}

export default VendorDasgboard
