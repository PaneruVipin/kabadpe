import React, { useState } from 'react'
import VendAddCateg from './VendAddCateg';

const VendCategories = () => {
    const [switchActive , setSwitchActive] = useState(false);
    const [categBox , setCategBox] = useState(false);

  return (
    <>

    <section className="vendor-attributes-comp ">

        <h4>Category</h4>

        
    <div className="product-filter-main product-filter-main32 " >
          <div className="ord-filt-bx">
            <input
              type="text"
              name="searchproduct"
              id="searchproduct"
              placeholder="Search Product"
            />
          </div>


          <div className="ord-filt-btn-flex">
            <button className="filt-ord-btn">Filter</button>

            <button className="filt-ord-btn filt-ord-btn3">Reset</button>
          </div>
        </div>

        <div onClick={() => setSwitchActive(!switchActive)} className={switchActive ? "swithc-toggle-btn  swithc-toggle-btn2 switchactive" : "swithc-toggle-btn swithc-toggle-btn2"}>
        <div className="round-bx"></div>
        <span>All</span>
        <span>Parents Only</span>

    </div>
        
        <div className="recent-ord-table all-user-table mt-4 prod-table categ-table">
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
                <th>Icon</th>
                <th>Name</th>
                <th>Description</th>
                <th>Published</th>
                {/* <th>Actions</th> */}
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
                 <img src="https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/carp-fish_paxzrt.png" alt="" />
                </td>

                <td>
                  <h6>Fish & Meat</h6>
                  <div className={ switchActive === true  ? "subcateg-bx subcategactive" : "subcateg-bx"}>
                    <span>Fish</span>
                    <span>Meat</span>

                  </div>
                </td>

                <td>
                    <span>Fish & Meat</span>
                </td>

               


                <td>
               
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

               

                {/* <td>
                  <div className="prod-edit-de-flex-btn">
                    <button onClick={() => setCategBox(true)}>
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>

                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td> */}
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
                  <span>81B2</span>
                </td>

                <td>
                 <img src="https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/cookie_1_ugipqa.png" alt="" />
                </td>

                <td>
                  <h6>Biscuits & Cakes</h6>
                  <div className={ switchActive === true  ? "subcateg-bx subcategactive" : "subcateg-bx"}>
                    <span>Biscuits</span>
                    <span>Cakes</span>

                  </div>
                </td>

                <td>
                    <span>Fish & Meat</span>
                </td>

                <td>
               
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

            
                {/* <td>
                  <div className="prod-edit-de-flex-btn">
                    <button onClick={() => setCategBox(true)}>
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>

                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td> */}
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
                  <span>81B2</span>
                </td>

                <td>
                 <img src="https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/cabbage_n59uv3.png" alt="" />
                </td>

                <td>
                  <h6>Fruits & Vegetables</h6>
                  <div className={ switchActive === true  ? "subcateg-bx subcategactive" : "subcateg-bx"}>
                    <span>Fresh Fruits</span>
                    <span>Fresh Vegetables</span>
                    <span>Baby Food</span>


                  </div>
                </td>

                <td>
                    <span>Fruits & Vegetables</span>
                </td>

               


                <td>
               
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

               

                {/* <td>
                  <div className="prod-edit-de-flex-btn">
                    <button onClick={() => setCategBox(true)}>
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>

                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>

                    
                  </div>
                </td> */}
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


        {/* { categBox ? <VendAddCateg onClickClose={() => setCategBox(false)} /> : null} */}
        
    </section>
      
    </>
  )
}

export default VendCategories
