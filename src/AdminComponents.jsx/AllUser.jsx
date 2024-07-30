import React, { useEffect, useRef, useState } from "react";
import "../style/AllUserData.css";
import DatePicker from "react-datepicker";
import alluserData from "../AlluserData";
import {
  adminGetAllUsers,
  adminUserAdd,
  adminUsersUpdate,
} from "../apis/admins/users";
import { useQuery } from "@tanstack/react-query";
import { kabadPeUserIdMapper, search } from "../lib/array";
import { Form, Formik } from "formik";
import { userAddressesFetch } from "../apis/user";
const AllUser = ({ updatedFilterData }) => {
  const [formType, setFormType] = useState("edit");
  const [userData, setUserData] = useState(alluserData);
  const [selectImg, setSelectImg] = useState("/images/customImg/c-1.jpg");
  const [editableForm, setEditableForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [serachQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    "/images/customImg/836.jpg"
  );
  const [profChange, setProfChange] = useState(false);
  const [editForm, setEditForm] = useState(false);
  // const [userStatAct, setUserStatAct] = useState('Active');
  const [selectedUser, setSelectedUser] = useState();
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
  const [otherErrors, setOtherErrors] = useState({});
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

  const handleImageChange = (object, feild) => (e) => {
    const file = e.target.files[0];
    object[feild] = file;
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async ({
    fullname,
    email,
    phoneNumber,
    accountStatus,
    id,
    profileImage,
    password,
  }) => {
    setOtherErrors({});
    const res =
      formType == "edit"
        ? await adminUsersUpdate({
            fullname,
            email,
            phoneNumber,
            accountStatus,
            role: "user",
            id,
            profileImage,
          })
        : await adminUserAdd({
            fullname,
            email,
            phoneNumber,
            password,
            profileImage,
          });
    if (!res?.error) {
      setEditableForm(false);
      refetch();
      return;
    }
    setOtherErrors({ update: res?.message });
  };
  const { data: allUsers, refetch } = useQuery({
    queryKey: ["adminfetcUsers"],
    queryFn: () => adminGetAllUsers(),
  });

  const { data: useAddress, refetch: refetchAddress } = useQuery({
    queryKey: ["adminfetcuseAddress"],
    queryFn: () => userAddressesFetch(selectedUser?.id),
  });
  useEffect(() => {
    refetchAddress();
  }, [selectedUser]);
  return (
    <>
      <section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box user-det-top-flex-box4">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h6>All User Details</h6>
              <button
                onClick={() => {
                  setFormType("add");
                  setEditableForm(true);
                  setSelectedUser({});
                }}
                style={{ marginTop: "-1px", marginRight: "-20px" }}
                type="submit"
                className="sqave-chang-btn"
              >
                Add User
              </button>
            </div>
            <div className="right-user-filter-data-flex-box">
              <div className="user-data-search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  autoComplete="off"
                  value={serachQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value?.trimStart());
                  }}
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
                <i className="fa-solid fa-magnifying-glass"></i>
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
                  <th>User Status</th>
                  {/* <th>City</th>
                  <th>Zip Code</th> */}
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                {!allUsers?.error
                  ? search(
                      kabadPeUserIdMapper(allUsers, "KPU"),
                      serachQuery
                    )?.map(
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
                          franchiseStatus,
                          hashId,
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
                                  <img
                                    src={
                                      profileImage ||
                                      "/images/temp/temp-user-profile.png"
                                    }
                                    onError={(e) => {
                                      e.currentTarget.src =
                                        "/images/temp/temp-user-profile.png";
                                    }}
                                    alt=""
                                  />
                                </div>
                              </td>

                              <td>
                                <span>{hashId}</span>
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
                                  {accountStatus}{" "}
                                </span>
                              </td>
                              {/* <td> <span> {curElem.City} </span> </td>
                              <td> <span> {curElem.Zip} </span> </td> */}

                              <td>
                                <div
                                  onClick={() => {
                                    setFormType("edit");
                                    setSelectedUser({
                                      id,
                                      profileImage,
                                      username,
                                      phoneNumber,
                                      email,
                                      role,
                                      accountStatus,
                                      fullname,
                                      franchiseStatus,
                                      hashId,
                                    });
                                    setEditableForm(true);
                                  }}
                                  className="edit-user-btn"
                                >
                                  <i className="fa-regular fa-pen-to-square"></i>
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

      {editableForm ? (
        <section
          onClick={() => setEditableForm(false)}
          className={
            editableForm
              ? "all-user-editable-form-main-box editformactive"
              : "all-user-editable-form-main-box"
          }
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="all-user-edit-form-box"
          >
            <div className="user-prof-editable-box">
              <h5>Profile</h5>

              <div className="update-prof-img-flex-box">
                {/* <div className="update-prof-img">
                  <img
                    src={
                      selectedUser?.profileImage ||
                      "/images/temp/temp-user-profile.png"
                    }
                    onError={(e) => {
                      e.currentTarget.src =
                        "/images/temp/temp-user-profile.png";
                    }}
                    alt=""
                  />

                  <div
                    onClick={() => {
                      setProfChange(true);
                    }}
                    className="prof-user-data-edit-btn"
                  >
                    Edit
                  </div> 
                </div> */}

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

              {/* <div className="user-prof-data-box">
                <div className="user-prof-info-box">
                  <label htmlFor="#">User Id</label>
                  <span>{selectedUser?.hashId}</span>
                </div>

                <div className="user-prof-info-box">
                  <label htmlFor="#"> Name</label>
                  <span>{selectedUser?.fullname}</span>
                </div>

                <div className="user-prof-info-box">
                  <label htmlFor="#"> Mobile</label>
                  <span>{selectedUser?.phoneNumber}</span>
                </div>

                <div className="user-prof-info-box">
                  <label htmlFor="#"> Email</label>
                  <span>{selectedUser?.email}</span>
                </div>
              </div> */}
              <Formik initialValues={selectedUser} onSubmit={handleSubmit}>
                {({
                  handleBlur,
                  handleChange,
                  values,
                  errors,
                  touched,
                  ...rest
                }) => {
                  return (
                    <Form className={"user-edit-main-form editformactive"}>
                      <div className="user-data-form-edit">
                        <div className="french-det-logo-box">
                          <div className="f-logo">
                            <img
                              src={
                                selectedImage ||
                                selectedUser?.profileImage ||
                                "/images/temp/temp-user-profile.png"
                              }
                              onError={(e) => {
                                e.currentTarget.src =
                                  "/images/temp/temp-user-profile.png";
                              }}
                              alt=""
                            />
                          </div>
                          <label
                            htmlFor="image_Path"
                            className="french-logo-btn"
                          >
                            Upload
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            name="profileImage"
                            id="image_Path"
                            onChange={handleImageChange(values, "profileImage")}
                          />
                        </div>
                        <div className="userdata-form-grid">
                          <div className="user-edit-inpt-box">
                            <label htmlFor="User Name">User Name</label>
                            <div className="user-edit-inpt">
                              <input
                                type="text"
                                name="fullname"
                                id="Name"
                                value={values?.fullname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                              />
                            </div>
                          </div>

                          <div className="user-edit-inpt-box">
                            <label htmlFor="Mobile No.">Mobile No.</label>
                            <div className="user-edit-inpt">
                              <input
                                type="text"
                                name="phoneNumber"
                                id="Mobile"
                                value={values?.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
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
                                value={values?.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                              />
                            </div>
                          </div>
                          {formType == "edit" ? (
                            <div className="user-edit-inpt-box">
                              <label htmlFor="status">Status</label>
                              <div className="user-edit-inpt">
                                <select
                                  type="text"
                                  name="accountStatus"
                                  value={values?.accountStatus}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  id="status"
                                  autoComplete="off"
                                >
                                  <option value="active">Active</option>
                                  <option value="inactive">Inactive</option>
                                  <option value="ban">Ban</option>
                                </select>
                              </div>
                            </div>
                          ) : (
                            <div className="user-edit-inpt-box">
                              <label htmlFor="Email ">Password</label>
                              <div className="user-edit-inpt">
                                <input
                                  type="text"
                                  name="password"
                                  id="email"
                                  value={values?.password}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <p
                        style={{
                          color: "red",
                          textAlign: "center",
                          lineHeight: 0.1,
                        }}
                      >
                        {otherErrors?.update}
                      </p>
                      <button type="submit" className="sqave-chang-btn">
                        Save Changes
                      </button>
                    </Form>
                  );
                }}
              </Formik>

              {formType == "edit" ? (
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
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {!useAddress?.error && useAddress
                        ? useAddress?.map(
                            (
                              {
                                id,
                                street,
                                city,
                                state,
                                zipCode,
                                landmark,
                                locationType,
                                aria,
                                subAria,
                              },
                              i
                            ) => (
                              <tr>
                                <td>
                                  <span>{i + 1}</span>
                                </td>
                                <td>
                                  <span>{street}</span>
                                </td>
                                <td>
                                  <span>{locationType}</span>
                                </td>
                                <td>
                                  <span>{city} </span>
                                </td>
                                <td>
                                  <span> {zipCode} </span>
                                </td>
                                <td>
                                  <span> {state} </span>
                                </td>
                                {/* <td>
                                <button className="actin-btn"> primary </button>
                              </td> */}
                              </tr>
                            )
                          )
                        : null}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>

            <div
              onClick={() => setEditableForm(false)}
              className="edit-form-close-btn"
            >
              <i className="fa-solid fa-xmark"></i>
            </div>

            {/* <div
              onClick={() => setEditForm(!editForm)}
              className="edit-form-close-btn edit-user-btn2"
            >
              <i className="fa-solid fa-user-pen"></i>
            </div> */}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default AllUser;
