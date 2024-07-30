import React, { useState } from "react";
import WasteDetailsPasswd from "./WasteDetailsPasswd";
import WasteDetBank from "./WasteDetBank";

const Vendor = () => {
  const [addInfo, setAddInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "/images/customImg/aadhar-img.png"
  );

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
                <h6>Age :</h6>
                <span>30</span>
              </div>

              <div className="det-user-bx">
                <h6>Gender :</h6>
                <span>Male</span>
              </div>

              <div className="det-user-bx">
                <h6>Address :</h6>
                <span>398 H/9 Ashok Colony steet No. 2 Delhi-110009</span>
              </div>

              <div className="det-user-bx">
                <h6>Document Proof :</h6>
                <img
                  src="/images/customImg/aadhar-img.png"
                  className="documt-img"
                  alt=""
                />
              </div>

              <div className="det-user-bx">
                <h6>Bank Details :</h6>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae officiis ullam sit optio, nulla doloremque
                  molestiae quas minus nihil labore.
                </span>
              </div>

              <div className="det-user-bx">
                <h6>Last Health Check-up :</h6>
                <span>5-Oct.-2023</span>
              </div>

              <div className="det-user-bx">
                <h6>Phone Number :</h6>
                <span>2034551212</span>
              </div>
            </div>

            <div className="vendor-btn-flex-box">
              <button
                onClick={() => setAddInfo(!addInfo)}
                className="add-det-btn add-det-btn2"
              >
                {/* <i className="fa-solid fa-plus"></i> */}
                Edit
              </button>

              <button className="add-det-btn vend-btn">
                {/* <i className="fa-solid fa-plus"></i> */}
                Request To Change Vendor
              </button>
            </div>

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
                      <label htmlFor="age">Age</label>
                      <input
                        type="text"
                        name="age"
                        id="age"
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
                  </div>

                  <div className="det-grid det-grid3">
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

                    <div className="det-input-bx det-input-bx3">
                      <label htmlFor="document">Docuemnt Proof</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        id="document"
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="select-File">
                      {selectedImage && <img src={selectedImage} alt="" />}
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

export default Vendor;
