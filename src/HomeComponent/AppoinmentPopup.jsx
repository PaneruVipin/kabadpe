import React, { useEffect, useRef, useState } from "react";
import Appointment from "./Appointment";

const AppoinmentPopup = ({
  setAppoinmentForm,
  appoinmentForm,
  setUserForm,
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
            <Appointment setUserForm={setUserForm} />
            <div
              style={{ zIndex: 1000, marginTop: "-15rem" }}
              onClick={() => setAppoinmentForm(false)}
              className="close-btn"
            >
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default AppoinmentPopup;
