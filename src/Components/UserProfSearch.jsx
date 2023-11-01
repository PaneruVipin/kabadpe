import React, { useState } from "react";
import "../style/Profile.css";
import UserProfCounter from "./UserProfCounter";
import UserProfCards from "./UserProfCards";
import UserProfUpdates from "./UserProfUpdates";
import "../style/Support.css";
import { useSelector } from "react-redux";

const UserProfSearch = () => {
  const [prfEditForm, setPrfEditForm] = useState(false);
  const user = useSelector((s) => s.user.userInfo);
  return (
    <>
      <section className="use-prf-left-main-bx">
        <section className="top-user-prof-search-bx">
          <div className="u-p-cont top-user-prof-search-bx-flex">
            <div className="left-user-prof-name-bx">
              <h5>
                Hi, <span>{user?.fullname}</span>
              </h5>
            </div>

            <div className="right-user-prof-search-flex-bx">
              <div className="u-prf-srch-bx">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                />
              </div>

              <button
                onClick={() => setPrfEditForm(true)}
                className="u-prf-btn-bx"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </section>

        <section
          className={
            prfEditForm === true
              ? "user-prof-edit-popup-comp editpopupcompshow"
              : "  user-prof-edit-popup-comp"
          }
        >
          <div className="u-prf-edit-popup-bx">
            <h5>User Profile Change</h5>

            <form action="#">
              <div className="u-prf-edt-inpt-bx">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Name"
                />
              </div>

              <div className="u-prf-edt-inpt-bx">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Last Name"
                />
              </div>

              <div className="u-prf-edt-inpt-bx">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="u-prf-edt-inpt-bx">
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                />
              </div>

              <button className="prof-chagen-btn">Update</button>
            </form>

            <div
              onClick={() => setPrfEditForm(false)}
              className="prof-user-edit-form-bx-close"
            >
              <i class="fa-regular fa-circle-xmark"></i>
            </div>
          </div>
        </section>

        <UserProfCounter />

        <UserProfCards />

        <UserProfUpdates />
      </section>
    </>
  );
};

export default UserProfSearch;
