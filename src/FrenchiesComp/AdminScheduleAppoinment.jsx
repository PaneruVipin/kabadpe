import { toast } from "react-toastify";
import { adminGetUserForAppoinment } from "../apis/admins/appoinments";
import { debounceAsync } from "../lib/debounce";
import { useState } from "react";
import AppoinmentPopup from "../HomeComponent/AppoinmentPopup";

const AdminScheduleAppoinment = ({ onclickClose }) => {
  const [appoinmentForm, setAppoinmentForm] = useState(false);
  const [userData, setUserData] = useState();
  const handleChange = (e) => {
    const value = e.target.value?.trim();
    if (!value) {
      return;
    }
    debounceAsync(async () => {
      const data = await adminGetUserForAppoinment({ id: value });
      // if (data?.error) {
      //   setUserData(null);
      //   return;
      // }
      setUserData(data);
    }, 1000)();
  };
  return (
    <>
      <section className="wrk-cpacity-comp" onClick={onclickClose}>
        <div className="wrk-cap-bx" onClick={(e) => e.stopPropagation()}>
          <div className="all-user-table wrk-table ">
            <div className="admin-login-fild">
              <label htmlFor="name">User Id</label>
              <div className="admin-login-input">
                <input
                  type="text"
                  name="phoneNumber"
                  id="name"
                  // value={values?.phoneNumber}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  //placeholder="Enter your name"
                  autoComplete="off"
                />
              </div>
              {userData?.error ? (
                <span style={{ color: "red" }}>{userData?.message}</span>
              ) : (
                <span style={{ color: "green" }}>{userData?.fullname}</span>
              )}
              <div>
                {!userData?.error && userData?.fullname ? (
                  <button
                    onClick={() => setAppoinmentForm(true)}
                    type="submit"
                    className="admin-form-btn admin-form-btn2 admin-form-btn3"
                  >
                    Next
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <div onClick={onclickClose} className="close-btn close-btn2">
            <i className="fa-solid fa-xmark "></i>
          </div>
        </div>
      </section>
      <AppoinmentPopup
        component="admin"
        userData={userData}
        // setUserForm={setUserForm}
        appoinmentForm={appoinmentForm}
        setAppoinmentForm={setAppoinmentForm}
      />
    </>
  );
};

export default AdminScheduleAppoinment;
