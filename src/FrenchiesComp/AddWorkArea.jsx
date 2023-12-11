import React, { useState } from "react";
import addworkareaData from "../AddWorkAreaData";
import Addworkareaedit from "./Addworkareaedit";

const AddWorkArea = () => {

    const [addWorkArea , setAddWorkArea] = useState(false);
    
  return (
    <>
      <section className="add-work-comn-comp">
        <div className="add-work-btn-flex-bx">
          <h6 className="banktext mb-0">Add Work Area</h6>

          <button onClick={() => setAddWorkArea(true)} className="add-work-btn-comn addnew-work-btn">
            Add New Work Area
          </button>
        </div>

        <div className="all-user-table add-wrk-table">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>State</th>
                <th>City</th>
                <th>Zip Code</th>
                <th>Area </th>
                <th>Sub Area</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {addworkareaData.map((elem, id) => {
                return (
                  <>
                    <tr key={id} id={elem.id}>
                      <td>
                        <span> {elem.id}  </span>
                      </td>
                      <td>
                        <span> {elem.state} </span>
                      </td>
                      <td>
                        <span> {elem.city} </span>
                      </td>
                      <td>
                        <span> {elem.zipCode} </span>
                      </td>
                      <td>
                        <span> {elem.Area} </span>
                      </td>
                      <td>
                        <span> {elem.Subarea} </span>
                      </td>

                      <td>

                        <div className="edit-remv-btns">

                            <button onClick={() => setAddWorkArea(true)} className="add-wrok-actn-btn">
                            <i class="fa-solid fa-pen-to-square"></i>
                            </button>

                            <button  className="add-wrok-actn-btn">
                            <i class="fa-solid fa-trash"></i>
                            </button>
                            
                        </div>
                        
                      </td>
                      
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

     {addWorkArea ? <Addworkareaedit onclickCloseAddWorkEdit={() => setAddWorkArea(false)} /> : null}
      
    </>
  );
};

export default AddWorkArea;
