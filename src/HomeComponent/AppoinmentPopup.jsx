import React, { useEffect, useRef, useState } from "react";
import Appointment from "./Appointment";

const AppoinmentPopup = ({
  setAppoinmentForm,
  appoinmentForm,
  setUserForm,
  component,
  userData,
}) => {
  return (
    <>
      {appoinmentForm ? (
        <section
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
          className="waste-prod-edit-comp"
          onClick={() => setAppoinmentForm(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              marginTop: "15rem",
              marginInline: "auto",
              position: "relative",
            }}
          >
            <Appointment
              userData={userData}
              component={component}
              setUserForm={setUserForm}
            />
            <div
              style={{ zIndex: 1000, marginTop: "-15rem" }}
              onClick={() => setAppoinmentForm(false)}
              className="close-btn"
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default AppoinmentPopup;
