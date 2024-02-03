import React, { useState } from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { MdCategory } from "react-icons/md";
import VendorDasgboard from './VendorComp/VendorDasgboard';
const VendorPanel = () => {
    const [component , setComponent ] = useState('dashboard');
    const [vendBtn , setVendBtn] = useState(null);
    const [sideNav , setSideNav] = useState(true);

    const handleViewComp = (getCompName) => {

        setComponent(getCompName);
        
    }

    const handleDropDwnBtnClick = (getbtnIndx) => {

        setVendBtn(getbtnIndx === vendBtn ? null : getbtnIndx);
        
    }

    const getDropDwnBtnClassname = (getBtnNum) => {

        return getBtnNum === vendBtn ? "vend-tab-btn vend-tab-btn2 venddropdwnactive" : "vend-tab-btn vend-tab-btn2"
        
    }

    const getDropDwnBtnClassnameTwo = (getBtnNum) => {

        return getBtnNum === vendBtn ? "vend-dropdwn-btn-list-bx vendlistactive" : "vend-dropdwn-btn-list-bx"
        
    }

    const getDropDwnBtnClassnameThree = (getvalue) => {

        return getvalue === component ? "vend-tab-dropdwn-btn tabdrpdwnactive" : "vend-tab-dropdwn-btn"
        
    }   

    // vend-tab-dropdwn-btn
  return (
    <>


    <section className="vendor-top-header-comp">

        <div className="vendor-top-header-bx">

            <div className="left-vendor-bx">

                <div className="left-vend-logo">
                    <img src="/images/customImg/nav-logo.png" alt="" />
                </div>

                <button onClick={() => setSideNav(!sideNav)} className="togle-menu-btn">
                <HiOutlineMenuAlt2 className='vend-icon' />
                </button>
                
            </div>

            <div className="right-vend-flex-bx">

                <div className="not-bell-btn togle-menu-btn">
                <i class="fa-solid fa-bell"></i>
                </div>

                <div className="vend-prof-img">
                    <img src="/images/customImg/c-1.jpg" alt="" />
                </div>


                
            </div>
            
        </div>
        
    </section>

    <section className={sideNav ? "vend-side-nav-main sidenavactive" : "vend-side-nav-main"}>

        <div className="v-side-nav-bx">

        <div className="vend-tab-btn-main">

            <div className={ component === 'dashboard' ? "vend-tab-btn vendbtnactive" : " vend-tab-btn"}
            onClick={() => handleViewComp('dashboard')}
            >

                <div className="v-tab-i">
                <RxDashboard className='v-icon' />
                </div>
                
                <span>Dashboard</span>
            </div>

            <div className={getDropDwnBtnClassnameThree('category')}>

                <div onClick={() => handleDropDwnBtnClick(1)}
                 className={ getDropDwnBtnClassname(1)}>
                <div className="v-tab-i">
                <MdCategory  className='v-icon' />
                </div>
                
                <span>Category</span>
                </div>

                <div className={getDropDwnBtnClassnameTwo(1)}>

                    <li onClick={() => handleViewComp('category')} 
                    className={ component === 'category' ? "vend-li-btn liactive" : "vend-li-btn"}>
                        Products
                    </li>

                    <li className="vend-li-btn">
                        Categories
                    </li>

                    <li className="vend-li-btn">
                        Coupons
                    </li>

                    <li className="vend-li-btn">
                        Attributes
                    </li>
                    
                </div>
                
            </div>
            
        </div>
            
        </div>
        
    </section>
    

    <div className={sideNav ? "vend-right-allcomp-bx rgithsidepadding" : "vend-right-allcomp-bx"}>
        <div className="common-container-vend">

    { component === 'dashboard' ? <VendorDasgboard /> : null }
        
    </div>
    </div>

    </>
  )
}

export default VendorPanel
