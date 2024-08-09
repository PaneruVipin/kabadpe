import React, { useState } from "react";
import Atributevalueupdate from "./Atributevalueupdate";

const AtributeValues = () => {
    const [atributeValues  , setAtributeValues] = useState(false);

    const data= {

        title : "Add/Update Attribute Valu",
        para : "Add your attribute values and necessary information from here",
        
    }
    
  return (
    <>
      <section className="vendor-attributes-comp vendor-attributes-comp2">
        <h4>Attribute Values</h4>

        <h6>
          {" "}
          Attributes <span> Color </span>
        </h6>

        <div className="product-added-del-main mt-4">
          <div className="left-prod-exp-imp-bx">
           
          </div>

          <div className="right-prod-btns-flex">
          <button onClick={() => setAtributeValues(true)} className="prod-add-del-btn prod-add-del-btn3">
              <i class="fa-solid fa-plus"></i> Add Attribute
            </button>

            <button className="prod-add-del-btn prod-add-del-btn32">
              <i class="fa-regular fa-pen-to-square"></i> Bulk Action
            </button>

            <button className="prod-add-del-btn prod-add-del-btn2 prod-add-del-btn32">
              <i class="fa-solid fa-trash-can"></i> Delete
            </button>
 
         
          </div>
        </div>

        <div className="recent-ord-table all-user-table mt-4 prod-table">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="form-check-bxx">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="form-check-bxx">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>

                <td>
                  <span>81B2</span>
                </td>

                <td>
                  <span>Red</span>
                </td>

               

                <td>
                  <span>Dropdown</span>
                </td>

                <td>
                  {/* <button
                          className={
                            rangeBtn
                              ? "toggle-range-btn rangeactive"
                              : "toggle-range-btn"
                          }
                          onClick={() => rangeActiveFunc(elem.id)}
                        >
                         
                          <div className="toggle-round"></div>
                        </button> */}
                  {true ? (
                    <div
                      class={
                        true
                          ? "form-checkss form-switch unchecked"
                          : "form-checkss form-switch"
                      }
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  ) : null}

                  {false ? (
                    <div className="form-switch-main">
                      <div class={"form-checkss form-switch form-switch3"}>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked
                        />
                      </div>
                    </div>
                  ) : null}
                </td>

               

                <td>
                  <div className="prod-edit-de-flex-btn">
                    <button onClick={() => setAtributeValues(true)}>
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>

                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check-bxx">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>

                <td>
                  <span>81B3</span>
                </td>

                <td>
                  <span>Green</span>
                </td>

               

                <td>
                  <span>Dropdown</span>
                </td>

                <td>
                  {/* <button
                          className={
                            rangeBtn
                              ? "toggle-range-btn rangeactive"
                              : "toggle-range-btn"
                          }
                          onClick={() => rangeActiveFunc(elem.id)}
                        >
                         
                          <div className="toggle-round"></div>
                        </button> */}
                  {false ? (
                    <div
                      class={
                        true
                          ? "form-checkss form-switch unchecked"
                          : "form-checkss form-switch"
                      }
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  ) : null}

                  {true ? (
                    <div className="form-switch-main">
                      <div class={"form-checkss form-switch form-switch3"}>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked
                        />
                      </div>
                    </div>
                  ) : null}
                </td>

               

                <td>
                  <div className="prod-edit-de-flex-btn">
                    <button onClick={() => setAtributeValues(true)}>
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>

                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
           
            </tbody>
          </table>
        </div>
        <div className="ord-pagination-flex-bx">
          <span>Showing 1-8 of 30</span>

          <div className="ord-page-btn-flex">
            <button className="ord-page-prev-btn">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            <div className="ord-page-num pageactive">1</div>

            <div className="ord-page-num">2</div>

            <div className="ord-page-num">3</div>
            <div className="ord-page-num">4</div>

            <button className="ord-page-prev-btn ord-page-next-btn">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>

                  

        { atributeValues ? <Atributevalueupdate data={data} onClickClose={() => setAtributeValues(false)} /> : null}
      </section>
    </>
  );
};

export default AtributeValues;
