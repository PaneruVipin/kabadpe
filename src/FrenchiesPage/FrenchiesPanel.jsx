import React, { useState } from 'react'
import '../style/Admin.css';
import { RiTableFill } from "react-icons/ri";
import { MdTabletAndroid } from "react-icons/md";
import {NavLink} from 'react-router-dom'
import { HiMiniUsers } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaPagelines } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import AdminFirstComp from '../AdminComponents.jsx/AdminFirstComp';
import AdminSecondComp from '../AdminComponents.jsx/AdminSecondComp';
import BookingReviewComp from '../AdminComponents.jsx/BookingReviewComp';
import AllUser from '../AdminComponents.jsx/AllUser';
import alluserData from '../AlluserData';
import AdminAllProduct from '../AdminComponents.jsx/AdminAllProduct';
import AdminOrder from '../AdminComponents.jsx/AdminOrder';
import Orders from '../OrderData';
import Frienchies from '../AdminComponents.jsx/Frienchies';
import Wastecolect from '../AdminComponents.jsx/Wastecolect';
import SubscriptionPlan from '../AdminComponents.jsx/SubscriptionPlan';
import FrenchiesProfile from '../FrenchiesComp/FrenchiesProfile';
import FrenchCard from '../FrenchiesComp/FrenchCard';
import Frenchgraph from '../FrenchiesComp/Frenchgraph';
import FrenchReview from '../FrenchiesComp/FrenchReview';
import FrenchWasteColect from '../FrenchiesComp/FrenchWasteColect';
import wastecolectData from '../WastecolectData';
import FrenchAppointments from '../FrenchiesComp/FrenchAppointments';
import FrenchAppointData from '../FrenchAppointData';

const FrenchiesPanel = () => {
    const [barClick , setBarClick] = useState(false);
    const [adminNavBtn , setAdminNavBtn] =  useState(false);
    const [sideAdminNav , setSideAdminNav] = useState(false);
    const [iconBtn , setIconBtn] = useState(null);
    const [component , setComponent] = useState('dashboard');
    const [userFiltData , setUserFiltData] = useState(wastecolectData);
    const [activeTav , setActiveTab] = useState('');
    const [orderActive , setOrderActive] = useState(Orders);
    const [orderTab , setOrderTab] = useState(null);
    const [apntTab , setApntTab] = useState(null);

    const [notifActive , setNotifActive] = useState(false);
    const [apntData , setApntData] = useState(FrenchAppointData);


   
    const handleButtonClick = (buttonName) => {
        setAdminNavBtn(buttonName === adminNavBtn ? null : buttonName);
      };

  const getButtonClassName = (buttonName) => {
    return buttonName === adminNavBtn ? 'admin-nv-btn adminnavbtnActive' : 'admin-nv-btn';
  };
    
  const getButonClasnameTwo = (butonIndex) => {

    return butonIndex === adminNavBtn ? 'ad-list listactive' : 'ad-list';

    
  }

  const handleIconBtn = (IconBtnNum) => {

        setIconBtn(IconBtnNum === iconBtn ? null :IconBtnNum)


  }

  const getIconBtnNum = (IconBtnNum) => {

    // return IconBtnNum === iconBtn ? "admin-side-nav-icons-main-box sideNaviconActive" : "admin-side-nav-icons-main-box"
    return IconBtnNum === iconBtn ? "side-nav-icon-ad sideNaviconActive" : "side-nav-icon-ad"

    
  }

  const handleViewComp = (compName) => {

    setComponent(compName);
    
  }

  const handleFilter = (index) => {

      const updatedData =  wastecolectData.filter((curData) => {

      return index  === curData.categoryStatus ;
      
    })

    setUserFiltData(updatedData);
      setActiveTab(index)
    
    
  }

  const handleFilterTwo = (value) => {
    const updatedOrderData =  Orders.filter((curData) => {

        return value  === curData.statype ;
        
      })
      setOrderActive(updatedOrderData)
      setOrderTab(value)
  }

  const handleFilterAppoint = (getvalue) => {

    const updatedappointData =  FrenchAppointData.filter((curelem) => {

        return getvalue === curelem.statustype ;
        
    })

    setApntData(updatedappointData)
    setApntTab(getvalue)
    
  }
     
const handleProfileChange = (e) => {

    const file = e.target.files[0];
    if(file){

        const reader = new FileReader();
        reader.onload = (event) => {

            setProfileImg(event.target.result);
            
        }

        reader.readAsDataURL(file)
        
    }
    
}
    
  return (
    <>


    <section className="top-admin-header-comp">

        <div className="admin-head-flex-box">

            <div className="left-admin-logo-box">

                <div className="admin-logo">
                    <img src="./images/customImg/nav-logo.png" alt="" />
                </div>


                <button onClick={() => {setBarClick(!barClick) , setSideAdminNav(!sideAdminNav)}} className="side-admin-nav-btn-box admin-top-comn-btn">
                {barClick ? <i class="fa-solid fa-arrow-right-long"></i>  : <i class="fa-solid fa-bars-staggered"></i>  }
                </button>

                <h4 className='admin-top-title'>Frenchies Panel</h4>
                
            </div>

            <div className="right-admin-box">

                <div className="admin-top-search-box">
                    <input type="text" name='search' id='search' placeholder='Search here' autoComplete='off'  />

                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                
                <button  className="side-admin-nav-btn-box admin-top-comn-btn admin-top-comn-btn2">
                <i class="fa-solid fa-wallet"></i>
                </button>

            <div className="notif-main-box">
                <button onClick={() => setNotifActive(!notifActive)}  className="side-admin-nav-btn-box admin-top-comn-btn admin-top-comn-btn2">
                <i class="fa-regular fa-bell"></i>
                </button>

                <div className={notifActive ? "noti-dropdown-box notisactive" : "noti-dropdown-box"}>

                    <div className="noti-li-box">
                        <div className="not-img">
                            <img src="./images/customImg/c-3.jpg" alt="" />
                        </div>
                        <div className="not-info">
                            <h6>New Order Request</h6>
                            <span>Id : 2114504750</span>
                        </div>
                    </div>

                    <div className="noti-li-box">
                        <div className="not-img">
                            <img src="./images/customImg/c-2.jpg" alt="" />
                        </div>
                        <div className="not-info">
                            <h6>New User Assign</h6>
                            <span>Id : 2114504750</span>
                        </div>
                    </div>

                    <div className="noti-li-box">
                        <div className="not-img">
                            <img src="./images/customImg/c-1.jpg" alt="" />
                        </div>
                        <div className="not-info">
                            <h6>New Appointment Scheduled</h6>
                            <span>Id : 2114504750</span>

                        </div>
                    </div>

                    <div className="noti-li-box">
                        <div className="not-img">
                            <img src="./images/customImg/c-2.jpg" alt="" />
                        </div>
                        <div className="not-info">
                            <h6>New User Assign</h6>
                            <span>Id : 2114504750</span>

                        </div>
                    </div>

                    <div className="noti-li-box">
                        <div className="not-img">
                            <img src="./images/customImg/c-4.jpg" alt="" />
                        </div>
                        <div className="not-info">
                            <h6>New Order Dispatched</h6>
                            <span>Id : 2114504750</span>

                        </div>
                    </div>

                    <NavLink to='#' className={"view-not-btn"}>View All</NavLink>

                 

                    
                    
                </div>
                
                </div>


                <div className="admin-top-prof-main admin-top-prof-main2 ">
                <div onClick={() => handleViewComp('frenchiesprofile')}  className="admin-top-prof-box">

                    <div className="left-admin-prof-img">
                        <img src="./images/customImg/team-3.jpg" alt="" />
                    </div>

                    <div className="right-prof-info-admin">
                        <h6>John Due</h6>
                        <span>FrenchiesManager</span>
                    </div>
                    
                </div>

           
                
                </div>


            </div>
            
        </div>
        
    </section>

    {/* side admin navbar component ---  */}

    <section className={sideAdminNav ? "side-admin-navbar-comp sideAdminNavActive" : "side-admin-navbar-comp"}>

        <div className="side-admin-nav-list-box">

            <div className="admin-nv-li admin-nv-li-dashbrd">
                <div onClick={() => {handleButtonClick(1) ,handleViewComp('dashboard') }} className={component === 'dashboard' ? 'admin-nv-btn admin-nv-btn2 adminnavbtnActive' : 'admin-nv-btn admin-nv-btn2'}>
                <div className="a-nv-i">
                <RiTableFill />
                </div>
                <span>Dashboard</span>
                </div>

            </div>

            

            <div className="admin-nv-li">
                <div onClick={() => handleButtonClick(3)} className={getButtonClassName(3)}>
                <div className="a-nv-i">
                <HiMiniUsers />
                </div>
                <span>Waste Collector</span>
                </div>

                <div className={ getButonClasnameTwo(3) }>

                    <li onClick={() => {handleViewComp('frenchwastecolect'), setUserFiltData(wastecolectData)  }} className={ component === 'frenchwastecolect' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#"   >All Users</NavLink> </li>
                    <li onClick={() => handleFilter('active')} className={ activeTav === 'active' ? 'page-link-btn pagelinkactive' : 'page-link-btn' } > <NavLink to="#">Active Users</NavLink> </li>
                    <li onClick={() => handleFilter('banned')} className={ activeTav === 'banned' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Banned Users </NavLink> </li>
                    <li onClick={() => handleFilter('unverified')} className={ activeTav === 'unverified' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Unverified Users</NavLink> </li>
                    <li onClick={() => handleViewComp('vendor')} className={ component === 'vendor' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#"   >Vendor</NavLink> </li>



                    
                </div>
                
            </div>


            <div className="admin-nv-li">
                <div onClick={() => handleButtonClick(4)} className={getButtonClassName(4)}>
                <div className="a-nv-i">
                <CiShop />
                </div>
                <span> Appointments</span>
                </div>

                <div className={ getButonClasnameTwo(4) }>

                    <li onClick={() => {handleViewComp('appointments'), setApntData(FrenchAppointData)}} className={ component === 'appointments' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#"> All Appointments </NavLink> </li>
                    <li onClick={() => handleFilterAppoint('complete')} className={apntTab === 'complete' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Complete Appointment</NavLink> </li>
                    <li onClick={() => handleFilterAppoint('schdule')} className={apntTab === 'schdule' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Scheduled Appointment </NavLink> </li>
                    <li onClick={() => handleFilterAppoint('today')} className={apntTab === 'today' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Today Appointment</NavLink> </li>
                    <li onClick={() => handleFilterAppoint('underprocess')} className={apntTab === 'underprocess' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Under Process </NavLink> </li>
                    <li onClick={() => handleFilterAppoint('reschedule')} className={apntTab === 'reschedule' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Rescheduled Appointment</NavLink> </li>
                    


                    
                </div>
                
            </div>

            <div className="admin-nv-li">
                <div onClick={() => handleButtonClick(9)} className={getButtonClassName(9)}>
                <div className="a-nv-i">
                <CiShop />
                </div>
                <span> Subscriptions</span>
                </div>

                <div className={ getButonClasnameTwo(9) }>

                    <li onClick={() => handleViewComp('subscriptionplan')} className={ component === 'subscriptionplan' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#"> Subscriptions Plans </NavLink> </li>

                </div>
                
            </div>

            <div className="admin-nv-li">
                <div onClick={() => handleButtonClick(5)} className={getButtonClassName(5)}>
                <div className="a-nv-i">
                <TbTruckDelivery />
                </div>
                <span>Orders</span>
                </div>

                <div className={ getButonClasnameTwo(5) }>

                    <li onClick={() => {handleViewComp('orders') , setOrderActive(Orders) }} className={ component === 'orders' ? 'page-link-btn pagelinkactive' : 'page-link-btn' } > <NavLink to="#">All Orders</NavLink> </li>
                    <li  onClick={() => handleFilterTwo('underprocess')} className={ orderActive === 'underprocess' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Under Process</NavLink> </li>
                    <li onClick={() => handleFilterTwo('readyship')} className={ orderTab === 'readyship' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Ready to Ship </NavLink> </li>
                    <li onClick={() => handleFilterTwo('shipped')} className={ orderTab === 'shipped' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Shipment</NavLink> </li>
                    <li onClick={() => handleFilterTwo('delivered')} className={ orderTab === 'delivered' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Delivered</NavLink> </li>
                    <li onClick={() => handleFilterTwo('return')} className={ orderTab === 'return' ? 'page-link-btn pagelinkactive' : 'page-link-btn' }> <NavLink to="#">Return</NavLink> </li>




                    
                </div>
                
            </div>
            
            <div className="admin-nv-li">
                <div onClick={() =>{handleViewComp('reviews')}} className={component === 'reviews' ? "admin-nv-btn admin-nv-btn2 adminnavbtnActive" : "admin-nv-btn admin-nv-btn2"}>
                <div className="a-nv-i">
                <FaWpforms />
                </div>
                <span>Reviews</span>
                </div>

                <div className={ getButonClasnameTwo(6) }>

                    {/* <li> <NavLink to="#">Profile</NavLink> </li>
                    <li> <NavLink to="#">Post Details</NavLink> </li>
                    <li> <NavLink to="#">Email </NavLink> </li>
                    <li> <NavLink to="#">Calendar</NavLink> </li>
                    <li> <NavLink to="#">Shop</NavLink> </li> */}



                    
                </div>
                
            </div>

            <div className="admin-nv-li">
                <div onClick={() => handleButtonClick(8)} className={getButtonClassName(8)}>
                <div className="a-nv-i">
                <FaPagelines />

                </div>
                <span>Pages</span>
                </div>

                <div className={ getButonClasnameTwo(8) }>

                    <li> <NavLink to="#">Profile</NavLink> </li>
                    <li> <NavLink to="#">Post Details</NavLink> </li>
                    <li onClick={() => handleViewComp('login') } className={component === 'login' ? 'page-link-btn pagelinkactive' : 'page-link-btn' } > <NavLink to="#">Log-in </NavLink> </li>
                    <li> <NavLink to="#">Calendar</NavLink> </li>
                    <li> <NavLink to="#">Shop</NavLink> </li>



                    
                </div>
                
            </div>

            <div className="admin-nv-li">
                <div onClick={() => handleButtonClick(7)} className={getButtonClassName(7)}>
                <div className="a-nv-i">
                <MdOutlineContactSupport />
                </div>
                <span>Support</span>
                </div>

                <div className={ getButonClasnameTwo(7) }>

                    <li> <NavLink to="#">All Tickets</NavLink> </li>
                    <li> <NavLink to="#">Pending Tickets</NavLink> </li>
                    <li> <NavLink to="#">Close Tickets </NavLink> </li>
                    <li> <NavLink to="#">Processing Tickets</NavLink> </li>



                    
                </div>
                
            </div>

            
            
        </div>

        
    </section>

    {/* ____________________ 
    our first component  */}

    <section className={sideAdminNav ? "right-side-admin-all-comp rightsideActive" : "right-side-admin-all-comp"}>

    { component === 'dashboard' ? <FrenchCard /> : null}

    { component === 'dashboard' ? <Frenchgraph /> : null}

   { component === 'dashboard' ? <FrenchReview /> : null}

  { component === 'frenchwastecolect' ?  <FrenchWasteColect updatedWasteColectData={userFiltData} /> :  null}
  { component === 'appointments' ?  <FrenchAppointments  updatedFrenchAppointData={apntData} /> :  null}

  { component === 'orders' ?  <AdminOrder orderUpdatedData={orderActive} /> :  null}

   { component === 'frenchies' ? <Frienchies  /> : null }
   { component === 'wastecolectr' ? <Wastecolect /> : null }
   { component === 'subscriptionplan' ? <SubscriptionPlan /> : null }

    { component === 'frenchiesprofile' ? <FrenchiesProfile /> : null }
    </section>
    

      
    </>
  )
}

export default FrenchiesPanel
