import React, { useEffect, useRef, useState } from "react";
import "../style/AllUserData.css";
import DatePicker from "react-datepicker";
import alluserData from "../AlluserData";
import { adminGetAllUsers } from "../apis/admins/users";
import { useQuery } from "@tanstack/react-query";
const AllUser = ({ updatedFilterData }) => {
  const [userData, setUserData] = useState(alluserData);
  const [selectImg, setSelectImg] = useState("/images/customImg/c-1.jpg");
  const [editableForm, setEditableForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [selectedImage, setSelectedImage] = useState(
    "/images/customImg/836.jpg"
  );
  const [profChange, setProfChange] = useState(false);
  const [editForm, setEditForm] = useState(false);
  // const [userStatAct, setUserStatAct] = useState('Active');
  const [userPrfData, setUserPrfData] = useState({
    userId: "ACU435GRh",
    Name: "Richard Parker",
    Mobile: "908654576",
    email: "nawaz001@gmail.com",
    userType: "Staff (Support Team)",
    address: "B/10 Azad Nagar street No.-2 Delhi-110008",
    city: "Bihar",
    Pin: "110031",
    State: "Patna",
  });

  const handleInputChangeData = (e) => {
    const { name, value } = e.target;
    setUserPrfData({ ...userPrfData, [name]: value });
  };

  const hamdleImageUpdate = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectImg(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectImg(null);
    }
  };

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

  const { data: allUsers, refetch } = useQuery({
    queryKey: ["adminfetcUsers"],
    queryFn: () => adminGetAllUsers(),
  });

  return (
    <>
      <section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box user-det-top-flex-box4">
            <h6>All User Details</h6>

            <div className="right-user-filter-data-flex-box">
              <div className="user-data-search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </div>

              <div className="user-type-sel-box user-data-search-box">
                <select name="user-type-data" id="user-type-data">
                  {/* <option value="1">User</option>
                  <option value="1">Vendor</option>
                  <option value="1">Staff (Manager)</option>
                  <option value="1">Staff (Sales Team)</option>
                  <option value="1">Staff (Support Team)</option> */}
                </select>
              </div>

              <div className="user-type-sel-box  user-data-search-box user-type-sel-box3">
                <select name="user-type-data" id="user-type-data">
                  <option value="1">Today</option>
                  <option value="1">Last Week</option>
                  <option value="1">Last Monthly </option>
                </select>
              </div>

              <div className="sel-user-date-flex">
                <div className="sel-date sel-date-user">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                </div>

                <span>to</span>

                <div className="sel-date ">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  />
                </div>
              </div>

              <div className="user-data-search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>

          <div className="all-user-table">
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Profile</th>
                  <th>User Id</th>
                  <th>User Name</th>
                  <th>Mobile No.</th>
                  <th>Email</th>
                  <th>User Type</th>
                  <th>User Status</th>
                  <th>City</th>
                  <th>Zip Code</th>
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                {!allUsers?.error
                  ? allUsers?.map(
                      (
                        {
                          id,
                          profileImage,
                          username,
                          phoneNumber,
                          email,
                          role,
                          accountStatus,
                          fullname,
                          franchiseStatus
                        },
                        i
                      ) => {
                        return (
                          <>
                            <tr key={id}>
                              <td>
                                <span> {i + 1} </span>
                              </td>
                              <td>
                                <div className="user-prof-img">
                                  <img src={profileImage} alt="" />
                                </div>
                              </td>

                              <td>
                                <span> {id} </span>
                              </td>
                              <td>
                                <span> {fullname} </span>
                              </td>
                              <td>
                                <span> {phoneNumber} </span>
                              </td>
                              <td>
                                <span> {email} </span>
                              </td>
                              <td>
                                <span> {role} </span>
                              </td>
                              <td>
                                <span
                                  // style={{
                                  //   color:
                                  //     curElem.categoryStatus === "Active"
                                  //       ? "Green"
                                  //       : "orange",
                                  // }}
                                  // className={
                                  //   curElem.categoryStatus === "Banned"
                                  //     ? "status-t statColor"
                                  //     : "status-t"
                                  // }
                                >
                                  {" "}
                                  {accountStatus || franchiseStatus}{" "}
                                </span>
                              </td>
                              <td>
                                {/* <span> {curElem.City} </span> */}
                              </td>
                              <td>
                                {/* <span> {curElem.Zip} </span> */}
                              </td>

                              <td>
                                <div
                                  onClick={() => setEditableForm(true)}
                                  className="edit-user-btn"
                                >
                                  <i class="fa-regular fa-pen-to-square"></i>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      }
                    )
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        className={
          editableForm
            ? "all-user-editable-form-main-box editformactive"
            : "all-user-editable-form-main-box"
        }
      >
        <div className="all-user-edit-form-box">
          <div className="user-prof-editable-box">
            <h5>Profile</h5>

            <div className="update-prof-img-flex-box">
              <div className="update-prof-img">
                <img src={selectImg} alt="" />

                <div
                  onClick={() => {
                    setProfChange(true);
                  }}
                  className="prof-user-data-edit-btn"
                >
                  Edit
                </div>
              </div>

              {/* <label htmlFor="Updte_Prof_img">
                Upload Image
            </label>

            <input    type="file"
              accept="image/*"
              onChange={hamdleImageUpdate}
              name="Updte_Prof_img"
              id="Updte_Prof_img"
            /> */}
            </div>

            <div className="user-prof-data-box">
              <div className="user-prof-info-box">
                <label htmlFor="#">User Id</label>
                <span>ACU435GRh</span>
              </div>

              <div className="user-prof-info-box">
                <label htmlFor="#"> Name</label>
                <span>Richard Parker</span>
              </div>

              <div className="user-prof-info-box">
                <label htmlFor="#"> Mobile</label>
                <span>908654576</span>
              </div>

              <div className="user-prof-info-box">
                <label htmlFor="#"> Email</label>
                <span>nawaz001@gmail.com</span>
              </div>

              <div className="user-prof-info-box">
                <label htmlFor="#"> User Type</label>
                <span>Staff (Support Team) </span>
              </div>
            </div>

            <div className="user-prof-table-data-box">
              <table>
                <thead>
                  <tr>
                    <th>S-No.</th>
                    <th>Address</th>
                    <th>Add. Type</th>
                    <th>City</th>
                    <th>Pin</th>
                    <th>State</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>1</span>
                    </td>
                    <td>
                      <span>B/10 Azad Nagar street No.-2 Delhi-110008 </span>
                    </td>
                    <td>
                      <span>Home </span>
                    </td>
                    <td>
                      <span> Bihar </span>
                    </td>
                    <td>
                      <span> 110031 </span>
                    </td>
                    <td>
                      <span> Patna </span>
                    </td>
                    <td>
                      <button className="actin-btn"> primary </button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span>2</span>
                    </td>
                    <td>
                      <span>B/10 Azad Nagar street No.-2 Delhi-110008 </span>
                    </td>

                    <td>
                      <span>Work </span>
                    </td>

                    <td>
                      <span> Bihar </span>
                    </td>
                    <td>
                      <span> 110031 </span>
                    </td>
                    <td>
                      <span> Patna </span>
                    </td>
                    <td>
                      <button className="actin-btn actin-btn2">
                        {" "}
                        Delivery{" "}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <form
            action="#"
            className={
              editForm
                ? "user-edit-main-form editformactive"
                : "user-edit-main-form"
            }
          >
            <div className="user-data-form-edit">
              <div className="userdata-form-grid">
                <div className="user-edit-inpt-box">
                  <label htmlFor="User Id">User Id</label>
                  <div className="user-edit-inpt">
                    <input
                      type="text"
                      name="userId"
                      value={userPrfData.userId}
                      onChange={handleInputChangeData}
                      id="userId"
                      autoComplete="off"
                      disabled
                    />
                  </div>
                </div>

                <div className="user-edit-inpt-box">
                  <label htmlFor="User Name">User Name</label>
                  <div className="user-edit-inpt">
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      value={userPrfData.Name}
                      onChange={handleInputChangeData}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="user-edit-inpt-box">
                  <label htmlFor="Mobile No.">Mobile No.</label>
                  <div className="user-edit-inpt">
                    <input
                      type="text"
                      name="Mobile"
                      id="Mobile"
                      value={userPrfData.Mobile}
                      onChange={handleInputChangeData}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="user-edit-inpt-box">
                  <label htmlFor="Email ">Email</label>
                  <div className="user-edit-inpt">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={userPrfData.email}
                      onChange={handleInputChangeData}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>

              <div className="userdata-form-grid">
                <div className="user-edit-inpt-box">
                  <label htmlFor="UserType ">User Type</label>
                  <div className="user-edit-inpt user-edit-inpt2">
                    <select
                      name="userType"
                      id="userType"
                      value={userPrfData.userType}
                      onChange={handleInputChangeData}
                    >
                      <option value="User">User</option>
                      <option value="Vendor">Vendor</option>
                      <option value="Staff (Manager)">Staff (Manager)</option>
                      <option value="Staff  (Sales Team)">
                        Staff (Sales Team)
                      </option>
                      <option value="Staff  (Support Team)">
                        Staff (Support Team)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="user-edit-inpt-box">
                  <label htmlFor="City ">City</label>
                  <div className="user-edit-inpt">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={userPrfData.city}
                      onChange={handleInputChangeData}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="user-edit-inpt-box">
                  <label htmlFor="Zip_Code ">Zip Code</label>
                  <div className="user-edit-inpt">
                    <input
                      type="text"
                      name="Pin"
                      id="Pin"
                      value={userPrfData.Pin}
                      onChange={handleInputChangeData}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="user-edit-inpt-box">
                  <label htmlFor="Zip_Code ">State</label>
                  <div className="user-edit-inpt">
                    <input
                      type="text"
                      name="State"
                      id="State"
                      value={userPrfData.State}
                      onChange={handleInputChangeData}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button className="sqave-chang-btn">Save Changes</button>
          </form>

          <div
            onClick={() => setEditableForm(false)}
            className="edit-form-close-btn"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>

          <div
            onClick={() => setEditForm(!editForm)}
            className="edit-form-close-btn edit-user-btn2"
          >
            <i class="fa-solid fa-user-pen"></i>
          </div>
        </div>
      </section>

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

          <div className="prof-input-file-bx prof-input-file-bx3">
            <label htmlFor="prof_input">Update profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="prof_input"
            />
          </div>

          <button className="confirm-prof-btn">Confirm</button>

          <div
            onClick={() => setProfChange(false)}
            className="prof-popup-close-btn"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUser;
