import React, { useState } from 'react'
import '../style/Admin.css';

const AdminPanel = () => {
    const [barClick , setBarClick] = useState(false);

    
  return (
    <>

    <section className="top-admin-header-comp">

        <div className="admin-head-flex-box">

            <div className="left-admin-logo-box">

                <div className="admin-logo">
                    <img src="./images/customImg/nav-logo.png" alt="" />
                </div>


                <button onClick={() => setBarClick(!barClick)} className="side-admin-nav-btn-box admin-top-comn-btn">
                {barClick ? <i class="fa-solid fa-arrow-right-long"></i>  : <i class="fa-solid fa-bars-staggered"></i>  }
                </button>

                <h4 className='admin-top-title'>Dashboard</h4>
                
            </div>

            <div className="right-admin-box">

                <div className="admin-top-search-box">
                    <input type="text" name='search' id='search' placeholder='Search here' autoComplete='off'  />

                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                
                <button  className="side-admin-nav-btn-box admin-top-comn-btn admin-top-comn-btn2">
                <i class="fa-regular fa-comments"></i>
                </button>

                <button  className="side-admin-nav-btn-box admin-top-comn-btn admin-top-comn-btn2">
                <i class="fa-regular fa-bell"></i>
                </button>

                <div className="admin-top-prof-box">

                    <div className="left-admin-prof-img">
                        <img src="./images/customImg/team-3.jpg" alt="" />
                    </div>

                    <div className="right-prof-info-admin">
                        <h6>John Due</h6>
                        <span>Superadmin</span>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </section>
      
    </>
  )
}

export default AdminPanel
