import React from "react";

const AddWorkerComp = ({ onClickClose }) => {
  return (
    <>
      <section className="add-worker-comp">
        <div className="add-worker-bx">
          <div className="add-work-field">
            <label htmlFor="#">Work Type</label>
            <input
              type="text"
              name="worktype"
              id="worktype"
              autoComplete="off"
            />
          </div>

          <button className="submit-btn add-work-btn">Submit</button>

          <div onClick={onClickClose} className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddWorkerComp;
