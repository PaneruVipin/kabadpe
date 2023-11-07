import React, { useState } from 'react'
import '../style/Profile.css';
import '../style/WasteColect.css';
import { NavLink } from 'react-router-dom';
import WasteDashboard from './WasteDashboard';
import WasteAppointment from './WasteAppointment';
import WasteDetail from './WasteDetail';
import WasteWorkLocat from './WasteWorkLocat';
import WasteColectin from './WasteColectin';
import WasteSales from './WasteSales';
import WasteWallet from './WasteWallet';
import UserProfGridComp from './UserProfGridComp';


const Wastecollectdashboard = () => {
  const [profBtn, setProfBtn] = useState(1);
  const [selectedImage, setSelectedImage] = useState('./images/customImg/836.jpg');
  const [profChange , setProfChange] = useState(false);

  const filterTab = (index) => {

    setProfBtn(index);
    
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <>

<div className="user-profile-side-nav-main waste-colect-db-side-nav-main">

<div className="user-prof-main-bx">

    <div  className="user-profi-img ">
        <img src="./images/customImg/test-img-1.jpg" alt="" />
        <div onClick={() => setProfChange(true)} className="prof-edit-text-btn">
            Edit
        </div>
    </div>

   

    <h6>Alysia Darmott</h6>
    <span className='em-text'>
    <i class="fa-regular fa-envelope"></i>
      User011@gmail.com</span>
    <span className='num-text'>
    <i class="fa-solid fa-mobile-screen"></i>
      7008322134</span>

    <div className="prog-edit-prof-flex-bx">

    <div className="prog-bar-bx">
        <span>Complete Your Profile</span>
        <span className="prog-num">70%</span>
    </div>

    <div className="edit-prof-btn" title='edit profile'>
      <i class="fa-solid fa-pen-to-square"></i>
      </div>
    </div>
      
    
</div>

<div className="user-prof-menu-main-flex-bx">

<button onClick={() => filterTab(1)} className={profBtn === 1 ? "u-prf-bx profactive" : "u-prf-bx"}>
    <div className="u-prf-tab-icon">
    <i class="fa-solid fa-chart-line"></i>
          </div>
        Dashboard
    </button>

    <button onClick={() => filterTab(2)} className={profBtn === 2 ? "u-prf-bx profactive" : "u-prf-bx"}>
    <div className="u-prf-tab-icon">
    <i class="fa-solid fa-file-pen"></i>
          </div>
          My Appintments 
    </button>

    <button  onClick={() => filterTab(3)} className={profBtn === 3 ? "u-prf-bx profactive" : "u-prf-bx"}>
    <div className="u-prf-tab-icon">
    <i class="fa-solid fa-user"></i>
          </div>
        My Details
    </button>


    <button onClick={() => filterTab(4)} className={profBtn === 4 ? "u-prf-bx profactive" : "u-prf-bx"}>
    <div className="u-prf-tab-icon">
    <i class="fa-solid fa-street-view"></i>
          </div>
        My Work Location
    </button>

    <button onClick={() => filterTab(5)} className={profBtn === 5 ? "u-prf-bx profactive" : "u-prf-bx"}>
    <div className="u-prf-tab-icon">
    <i class="fa-solid fa-dumpster"></i>
          </div>
        Waste Collection
    </button>

    <button onClick={() => filterTab(6)} className={profBtn === 6 ? "u-prf-bx profactive" : "u-prf-bx"}>
    <div className="u-prf-tab-icon">
    <i class="fa-solid fa-capsules"></i>
          </div>
          My sales history
    </button>

    <button onClick={() => filterTab(7)} className={profBtn === 7 ? "u-prf-bx profactive" : "u-prf-bx"}>
    <div className="u-prf-tab-icon">
    <i class="fa-solid fa-wallet"></i>
          </div>
          My Wallet History
    </button>
    
  

</div>

<div className="profile-log-out-btn profile-log-out-btn2">
<i class="fa-solid fa-right-from-bracket"></i>
<span>Log Out</span>
</div>

</div>


<div className={profChange ? "user-prof-change-popup-box prof-chang-popupactive" : "user-prof-change-popup-box"}>
                <div className="user-prof-popup-bx">
                  
                    <div className="prof-chang-img">
                    {selectedImage && (
        <img src={selectedImage} alt="Selected" />
      )}
                    </div>

                        <div className="prof-input-file-bx">
                            <label htmlFor="prof_input">Update profile Image</label>
                            <input type="file" accept='image/*' onChange={handleImageChange} id='prof_input' />
                        </div>
                    
                    <div onClick={() => setProfChange(false)} className="prof-popup-close-btn">
                    <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>


  { profBtn === 1 ? <WasteDashboard /> : null}
  { profBtn === 2 ? <WasteAppointment /> : null}
  { profBtn === 3 ? <WasteDetail /> : null}
  { profBtn === 4 ? <WasteWorkLocat /> : null}
  { profBtn === 5 ? <WasteColectin /> : null}
  { profBtn === 6 ? <WasteSales/> : null}
  { profBtn === 7 ? <WasteWallet /> : null}


     
    </>
  )
}

export default Wastecollectdashboard
