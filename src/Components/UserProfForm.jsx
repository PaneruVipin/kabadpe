import React, { useState } from "react";
import "../style/Profile.css";
import UseProfRightbx from "./UseProfRightbx";
import PrfPasswrd from "./PrfPasswrd";
import BankCard from "./BankCard";
import UserBankCard from "./UserBankCard";
const UserProfForm = () => {
  const [inputData, setInputData] = useState({
    address: "",
    city: "",
    state: "",
    pin: "",
    landmark: "",
    locationtype: "",
  });
  const [inputArr, setInputArr] = useState([]);
  const [profForm, setProfForm] = useState(false);
 
  

  const iconMapping = {
    office: <i class="fa-solid fa-building"></i>,
    home: <i class="fa-solid fa-home"></i>,
  };
  

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

 

  const handleChangeStore = () => {
   

      
 
      let { address, city, state, pin, landmark, locationtype } = inputData;
      setInputArr([
        ...inputArr,
        { address, city, state, pin, landmark, locationtype },
      ]);
     
      setInputData({
        address: "",
        city: "",
        state: "",
        pin: "",
        landmark: "",
        locationtype: "",
      });
  
      if(locationtype === "office"){
          <i class="fa-solid fa-building"></i>
      }else{
          <i class="fa-solid fa-home"></i>
      }
    
    
  };

  const editDataBtn = () => {

        setProfForm(!profForm)
  }

  const deleteDataBx = (index) => {

    const updatedData = inputArr.filter((item, id) => {

      return(
        index !== id
      )

    })

    setInputArr(updatedData);
    
  }

  return (
    <>
      <section className="user-prof-grid-comp">
        <section className="User-prof-Form-Main-bx">
          <div className="u-p-f-cont">
            <div className="usr-prof-form-bx">
              <div className="user-prof-form-grid">
                <div className="user-prof-form-bx">
                  <div className="u-p-f-i">
                    <i class="fa-solid fa-house"></i>
                  </div>
                  <div className="u-p-f-det">
                    <h6>Address</h6>
                    <p>
                      65A, Street No 4, Kundan Nagar, Laxmi Nagar ,Delhi ,New
                      Delhi , 110092 , <span>LandMark</span> Near Lovely Public
                      School , 9012455676
                    </p>
                  </div>
                  <div onClick={() => editDataBtn()} className="prof-data-edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                        </div>
                        <div onClick={() => deleteDataBx(id)}  className="prof-data-close">
                        <i class="fa-solid fa-xmark"></i>
                        </div>
                </div>

                <div className="user-prof-form-bx user-prof-form-bx2">
                  <div className="u-p-f-i">
                    <i class="fa-solid fa-building"></i>
                  </div>
                  <div className="u-p-f-det">
                    <h6>Address</h6>
                    <p>
                      65A, Street No 4, Kundan Nagar, Laxmi Nagar ,Delhi ,New
                      Delhi , 110092 , <span>LandMark</span> Near Lovely Public
                      School , 9012455676
                    </p>
                  </div>
                  <div onClick={() => editDataBtn()} className="prof-data-edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                        </div>
                        <div onClick={() => deleteDataBx(id)}  className="prof-data-close">
                        <i class="fa-solid fa-xmark"></i>
                        </div>
                </div>

                {inputArr.map((infor,id) => {
                    return(
                        <>

           <div className="user-prof-form-bx user-prof-form-bx4" key={infor.id}>
                  <div className="u-p-f-i">
                        {iconMapping[infor.locationtype]}
                  </div>
                  <div className="u-p-f-det">
                    <h6>Address</h6>
                    <p>
                     {infor.address}, {infor.city} , {infor.state} , {infor.pin} , {infor.landmark}  </p>
                  </div>
                  <div onClick={() => editDataBtn()} className="prof-data-edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                        </div>
                        <div onClick={() => deleteDataBx(id)} className="prof-data-close">
                        <i class="fa-solid fa-xmark"></i>
                        </div>
                </div>
                       
                        </>
                    )
                })}

                <div className="user-prof-form-bx user-prof-form-bx3">
                  <h6>Add User Info</h6>

                  <button onClick={() => setProfForm(!profForm)} className="add-user-info-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className={profForm ? "user-prof-form profformactive" : "user-prof-form"}>
              <h5>My Details</h5>
              <form action="#">
                <div className="usr-prof-inpt-bx">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={inputData.address}
                    onChange={handleInputChange} placeholder="Address" autoComplete="off" required
                  />
                </div>

                <div className="usr-prof-form-grid-bx">
                  <div className="usr-prof-inpt-bx">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={inputData.city}
                      onChange={handleInputChange} placeholder="City" autoComplete="off" required
                    /> 
                  </div>

                  <div className="usr-prof-inpt-bx">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={inputData.state}
                      onChange={handleInputChange} placeholder="State" autoComplete="off" required
                    />
                  </div>

                  <div className="usr-prof-inpt-bx">
                    <input
                      type="text"
                      name="pin"
                      id="pin"
                      value={inputData.pin}
                      onChange={handleInputChange} placeholder="Pin" autoComplete="off" required
                    />
                  </div>
                </div>

                <div className="usr-prof-form-grid-bx2">
                  <div className="usr-prof-inpt-bx">
                    <input
                      type="text"
                      name="landmark"
                      id="landmark"
                      value={inputData.landmark}
                      onChange={handleInputChange} placeholder="Land-mark" autoComplete="off" required
                    />
                  </div>

                  <div className="usr-prof-inpt-bx">
                    <select
                      name="locationtype"
                      value={inputData.locationtype}
                      onChange={handleInputChange}
                      id="locationtype"
                    >
                      <option value="Choose">Choose</option>

                      <option value="office">Office</option>
                      <option value="home">Home</option>
                    </select>

      
                  </div>
                </div>

              </form>

              
              <button
                  onClick={handleChangeStore}
                  className="u-prf-submit-btn"
                >
                  Save
                </button>

                <div onClick={() => setProfForm(false)} className="close-my-det-bx">
                <i class="fa-solid fa-xmark"></i>
                </div>
                
            </div>
          </div>

          <PrfPasswrd />

          <BankCard />

          <UserBankCard />

        </section>


        <UseProfRightbx />

        
      </section>

   
      
    </>
  );
};

export default UserProfForm;
