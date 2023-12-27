import React, { useEffect, useRef, useState } from "react";

const WasteColectEdit = ({onClickCloseEditForm , WasteDataTrue}) => {
  const [selectedImage, setSelectedImage] = useState({
    image1: "./images/customImg/aadhar-img.png",
    image2: "./images/customImg/aadhar-img.png",
    image3: "./images/customImg/aadhar-img.png",
  });

  const handleImageChange = (event, imageNumber) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage((prevImages) => ({
          ...prevImages,
          [imageNumber]: e.target.result,
        }));
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const wasteEditRef = useRef(null)

  useEffect(() => {

    const handleClickOutside = (event) => {

      if(wasteEditRef.current && !wasteEditRef.current.contains(event.target)){
        onClickCloseEditForm();
      }
      
    }
    

    if(WasteDataTrue){
      document.addEventListener("mousedown", handleClickOutside)
    }else{
      document.removeEventListener("mousedown", handleClickOutside)

    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  },[WasteDataTrue])

  return (
    <>

      <section className="french-edit-comp">
        <div className="french-edit-main-box" ref={wasteEditRef}>
          <h5>Waste Collector (Edit) </h5>

          <div className="french-det-grid">
            <div className="admin-login-fild">
              <label htmlFor="name">Name</label>
              <div className="admin-login-input">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="name">Date Of Birth</label>
              <div className="admin-login-input">
                <input type="date" name="dob" id="dob" autoComplete="off" />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="name">Gender</label>
              <div className="admin-login-input">
                <select name="gender" id="gender">
                  <option value="gender">Male</option>
                  <option value="gender">Female</option>
                  <option value="gender">Other</option>
                </select>
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="Caste">Caste</label>
              <div className="admin-login-input">
                <input
                  type="text"
                  name="Caste"
                  id="Caste"
                  placeholder="Enter your caste"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="Religion">Religion</label>
              <div className="admin-login-input">
                <input
                  type="text"
                  name="Religion"
                  id="Religion"
                  placeholder="Enter your Religion"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="phonenumber">Mobile Number</label>
              <div className="admin-login-input">
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Enter your Mobile Number"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <div className="admin-login-fild">
            <label htmlFor="Address">Address</label>
            <div className="admin-login-input">
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Enter your Address"
                autoComplete="off"
              />
            </div>
          </div>

          <h6 className="banktext mt-3 mb-3">Social Security</h6>

          <div className="french-det-grid french-det-grid3">

            <div className="upload-img-bx">
              <label htmlFor="Aadharfront">Aadhar (Front) </label>
              {selectedImage.image1 && (
              <div className="selctd-img">
          <img src={selectedImage.image1} alt="Uploaded"  />
          </div>

        )}
              <div className="admin-login-input img-upld-btn">
                <label htmlFor="file">Upload</label>
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  id="file"
                  onChange={(e) => handleImageChange(e, "image1")}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="upload-img-bx">
              <label htmlFor="Aadharfront">Aadhar (Back) </label>
              {selectedImage.image2 && (
              <div className="selctd-img">
          <img src={selectedImage.image2} alt="Uploaded"  />
          </div>

        )}
              <div className="admin-login-input img-upld-btn">
                <label htmlFor="file2">Upload</label>
                <input
                  type="file"
                  accept="image/*"
                  name="file2"
                  id="file2"
                  onChange={(e) => handleImageChange(e, "image2")}
                  autoComplete="off"
                />
              </div>
            </div>

            
          </div>

          <div className="french-det-grid">

          <div className="admin-login-fild">
            <label htmlFor="PAN">PAN Number</label>
            <div className="admin-login-input">
              <input
                type="text"
                name="PAN"
                id="PAN"
                placeholder="Enter your PAN number"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="admin-login-fild">
            <label htmlFor="PAN">Insurance</label>
            <div className="admin-login-input">
              <input
                type="text"
                name="Insurance"
                id="Insurance"
                placeholder="Enter your Insurance"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="admin-login-fild">
            <label htmlFor="PAN">Police Verification</label>
            <div className="admin-login-input pol-ver-field">
              <input
                type="file"
                name="policefile"
                id="policefile"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="admin-login-fild">
            <label htmlFor="PAN">Last Health Checkup Date </label>
            <div className="admin-login-input">
              <input
                type="date"
                name="healthcheckupdate"
                id="healthcheckupdate"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="admin-login-fild">
            <label htmlFor="PAN">Emergency Contact Person  </label>
            <div className="admin-login-input">
              <input
                type="text"
                name="contactperson"
                id="contactperson"
                placeholder="Enter your contact person"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="admin-login-fild">
            <label htmlFor="PAN">Emergency Contact Number  </label>
            <div className="admin-login-input">
              <input
                type="text"
                name="contactnumber"
                id="contactnumber"
                placeholder="Enter your contact number"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="admin-login-fild">
            <label htmlFor="PAN">Training on security  </label>
            <div className="admin-login-input">
             <select name="trainingsecurity" id="trainingsecurity">
                <option value="trainingsecurity">Yes</option>
                <option value="trainingsecurity">No</option>

             </select>
            </div>
          </div>

          <div className="admin-login-fild">
            <label htmlFor="PAN">User Status  </label>
            <div className="admin-login-input">
             <select name="trainingsecurity" id="trainingsecurity">
                <option value="trainingsecurity">Unverified</option>
                <option value="Verified">Verified</option>
                <option value="Ban">Ban</option>


             </select>
            </div>
          </div>
            
          </div>

          <button onClick={onClickCloseEditForm} className="close-popup-btn">
        <i class="fa-solid fa-xmark"></i>
        </button>

        <button className="submit-btn submit-btn5">
          Save Changes
        </button>
          
        </div>
      </section>
    </>
  );
};

export default WasteColectEdit;
