import React, { useState } from "react";
import WasteDetailsPasswd from "./WasteDetailsPasswd";
import WasteDetBank from "./WasteDetBank";
import DatePicker from "react-datepicker";
import CompltProfPopup from "./CompltProfPopup";

const WasteDetail = () => {
  const [addInfo, setAddInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "./images/customImg/836.jpg"
  );
  const [selectedImageoOne, setSelectedImageOne] = useState(
    "./images/customImg/aadhar-img.png"
  );
  const [selectedImageTwo, setSelectedImageTwo] = useState(
    "./images/customImg/aadhar-img.png"
  );
  const [profChange, setProfChange] = useState(false);
  // const [startDate, setStartDate] = useState(new Date());
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

  const handleImageChangeOne = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImageOne(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChangeTwo = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImageTwo(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div
        className={
          profChange
            ? "user-prof-change-popup-box prof-chang-popupactive"
            : "user-prof-change-popup-box"
        }
      >
        <div className="user-prof-popup-bx">
          <div className="prof-chang-img">
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>

          <div className="prof-input-file-bx">
            <label htmlFor="prof_input">Update profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="prof_input"
            />
          </div>

          <div
            onClick={() => setProfChange(false)}
            className="prof-popup-close-btn"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

      <section className="waste-details-comp waste-colectin-comp waste-appoint-ment-comp  ">
        <h3>Photo</h3>

        <div className="photo-content-box details-main-bx">
          <div className="photo-info-main-box">
            <div className="left-photo-info-box">
              <img src="./images/customImg/waste-profile-refrence.png" alt="" />
            </div>

            <div className="photo-det-bx">
              <p>चेहरा साफ़ दिखाई दे </p>
              <p>धूप का चश्मा, मास्क और कोई टोपी पहनी है तो वह हटा दें। </p>
              <p>
                कपड़े पहने हुए हों, हाथ पूरी तरह से खाली हो, कोई फ़िल्टर का
                इस्तेमाल ना करें, सिर्फ आप फ्रेम में दिखाई देने चाहिए।
              </p>

              <button
                onClick={() => setProfChange(true)}
                className="add-img-btn"
              >
                Add Photo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="waste-details-comp waste-colectin-comp waste-appoint-ment-comp">
        <h3>Details</h3>

        <div className="details-main-bx">
          <div className="det-table-bx ">
            <div className="det-grid-bx">
              <div className="det-user-bx">
                <h6>Name :</h6>
                <span>Andrew Garfield</span>
              </div>

              <div className="det-user-bx">
                <h6>Date of Birth :</h6>
                <span>05-07-1990 (33 Years)</span>
              </div>

              <div className="det-user-bx">
                <h6>Gender :</h6>
                <span>Male</span>
              </div>

              <div className="det-user-bx">
                <h6>Social Secuity :</h6>
                <span>1234567890</span>
              </div>

              <div className="det-user-bx">
                <h6>Mobile Number :</h6>
                <span>2034551212</span>
              </div>

              <div className="det-user-bx">
                <h6>Address :</h6>
                <span>398 H/9 Ashok Colony steet No. 2 Delhi-110009</span>
              </div>

              <div className="det-user-bx">
                <h6>Aadhar :</h6>
                <img
                  src="./images/customImg/aadhar-img.png"
                  className="documt-img"
                  alt=""
                />
              </div>

              <div className="det-user-bx">
                <h6>Aadhar :</h6>
                <img
                  src="./images/customImg/aadhar-img.png"
                  className="documt-img"
                  alt=""
                />
              </div>

              <div className="det-user-bx">
                <h6>Insurance :</h6>
                <span>1234567890</span>
              </div>

              <div className="det-user-bx">
                <h6>Police Verification :</h6>
                <span>Verified ✅</span>
              </div>
              <div className="det-user-bx">
                <h6>Last Health Checkup Date :</h6>
                <span> 15-08-2023 📅</span>
              </div>

              <div className="det-user-bx">
                <h6>Emergency Contact Person :</h6>
                <span> Rahul Jain </span>
              </div>

              <div className="det-user-bx">
                <h6>Emergency Contact Number :</h6>
                <span> 9876450123 </span>
              </div>
            </div>

            <button
              onClick={() => setAddInfo(!addInfo)}
              className="add-det-btn"
            >
              {/* <i class="fa-solid fa-plus"></i> */}
              Edit
            </button>

            <div
              className={
                addInfo
                  ? "add-det-info-form-bx adddetinfoactive"
                  : "add-det-info-form-bx"
              }
            >
              <div className="add-det-info-bx">
                <h6>Personal information</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem sequi iste reiciendis nemo beatae fugiat, totam eaque
                  distinctio ut recusandae.
                </p>
              </div>

              <div className="add-det-info-form">
                <form action="#">
                  <div className="det-grid det-grid3">
                    <div className="det-input-bx">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="det-input-bx">
                      <label htmlFor="age">Date of Birth</label>
                      {/* <DatePicker style={{width: '100%'}} selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                      <input
                        type="date"
                        name="name"
                        id="name"
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="det-input-bx">
                      <label htmlFor="gender">Gender</label>
                      <select name="gender" id="gender">
                        <option value="gender">Male</option>
                        <option value="gender">Female</option>
                        <option value="gender">Other</option>
                      </select>
                    </div>

                    <div className="det-input-bx">
                      <label htmlFor="age">Social Society</label>
                      {/* <DatePicker style={{width: '100%'}} selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                      <input
                        type="text"
                        name="insurance"
                        id="insurance"
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="det-input-bx">
                      <label htmlFor="age">Mobile Number</label>
                      {/* <DatePicker style={{width: '100%'}} selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                      <input
                        type="text"
                        name="mobile"
                        id="mobile"
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="det-input-bx">
                      <label htmlFor="age">Insurance</label>
                      {/* <DatePicker style={{width: '100%'}} selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                      <input
                        type="text"
                        name="insurance"
                        id="insurance"
                        autoComplete="off"
                        required
                      />
                    </div>

                    
                  </div>

                  <div className="det-input-bx">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="off"
                        required
                      />
                    </div>


                  <div className="add-grid-box">


                        
                  <div className="det-input-bx">
                      <label htmlFor="address">Area</label>
                      <input
                        type="text"
                        name="Area"
                        id="Area"
                        autoComplete="off"
                        required
                      />
                    </div>

                        
                  <div className="det-input-bx">
                      <label htmlFor="address">Pin Code</label>
                      <input
                        type="text"
                        name="Pin_Code"
                        id="Pin_Code"
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="det-input-bx">
                      <label htmlFor="address">State</label>
                      <input
                        type="text"
                        name="Area"
                        id="Area"
                        autoComplete="off"
                        required
                      />
                    </div>
                    
                  </div>
                  

                  <div className="det-grid det-grid5">
                    

                    <div className="det-input-bx det-input-bx3">
                      <label htmlFor="document">Aadhar (Front) </label>
                      <div className="att-inpt-box">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChangeOne}
                        id="document"
                        autoComplete="off"
                        required
                      />
                      </div>
                    </div>

                    <div className="select-File">
                      {selectedImageoOne && (
                        <img src={selectedImageoOne} alt="" />
                      )}
                    </div>


                    <div className="det-input-bx det-input-bx3 ">
                      <label htmlFor="documentTwo">Aadhar (Back) </label>
                      <div className="att-inpt-box">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChangeTwo}
                        id="documentTwo"
                        autoComplete="off"
                        required
                      />
                      </div>
                      <button className="att-inpt-box"></button>
                    </div>

                    <div className="select-File">
                      {selectedImageTwo && (
                        <img src={selectedImageTwo} alt="" />
                      )}
                    </div>
                  </div>

                  <div className="det-grid det-grid3">
                    <div className="det-input-bx">
                      <label htmlFor="chosedate">Last Health Check-up</label>
                      <input
                        type="date"
                        name="chosedate"
                        id="chosedate"
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="det-input-bx">
                      <label htmlFor="bankdet">Phone Number</label>
                      <input
                        type="text"
                        name="Number"
                        id="Number"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>

                  <button className="det-save-btn">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WasteDetBank />

      <WasteDetailsPasswd />

   
    </>
  );
};

export default WasteDetail;
