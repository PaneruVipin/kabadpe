import React, { useState } from 'react'
import AdminProdAddCateg from '../AdminComponents.jsx/AdminProdAddCateg';

const AdminProdCateg = ({onClickRedirect}) => {
    const [switchActive , setSwitchActive] = useState(false);
    const [prodCateg , setProdCateg] = useState(false);
    const [prodCateg2 , setProdCateg2] = useState(false);


    const data = {
        title : "Add Category",
    }

    const data2 = {
        title : "Update Category",
    }
  return (
    <>
          <section className="admin-prod-atribute-comp">


<h4>Product Attributes</h4>

<div className="admin-prod-atribute-top-flex-bx mb-5">

    <div className="prod-atr-search-bx">
        <input type="text" name='prod-search' id='prod-search' placeholder='Search by Category name' />
    </div>

    <div className="prod-atribute-buton-flex">

        <button className='search-btn-flex'>
        <ion-icon name="search-outline"></ion-icon>  
        Search
        </button>

        
        <button>
        {/* <ion-icon name="trash"></ion-icon>   */}
        Delete
        </button>

        
        <button onClick={() => setProdCateg(true)}>
        {/* <ion-icon name="add-sharp"></ion-icon>  */}
         Add Category
        </button>
        
    </div>
    
</div>

<div onClick={() => setSwitchActive(!switchActive)} className={switchActive ? "swithc-toggle-btn  swithc-toggle-btn2 swithc-toggle-btn23 switchactive mb-4" : "swithc-toggle-btn swithc-toggle-btn23 swithc-toggle-btn2 mb-4"}>
        <div className="round-bx"></div>
        <span>All</span>
        <span>Parents Only</span>
        </div>

<div className="all-user-table waste-prod-table admin-prod-atribute-table">
    <table>
        <thead>
            <tr>
                <th>
                <div className="form-check-bxx">
        <input
          className="form-check-input"
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
                <th>Product Counts</th>
                <th>Admin Charges</th>
                <th>Published</th>
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
                    <span>20</span>
                </td>

                <td>
                    <span>20%</span>
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

               

                <td>
                  <div className="prod-edit-de-flex-btn">
                  <button onClick={onClickRedirect}>
                  <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </button>
                    <button onClick={() => setProdCateg2(true)}>
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
                    <span>30</span>
                </td>

                <td>
                    <span>12%</span>
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

            
                <td>
                  <div className="prod-edit-de-flex-btn">
                  <button onClick={onClickRedirect}>
                  <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </button>
                    <button onClick={() => setProdCateg2(true)}>
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
                    30
                  </td>

                  <td>
                    <span>10%</span>
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

                <td>
                  <div className="prod-edit-de-flex-btn">
                  <button onClick={onClickRedirect}>
                  <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </button>
                    <button onClick={() => setProdCateg2(true)}>
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

        <div className="ord-page-num ord-page-num2  pageactive">1</div>

        <div className="ord-page-num ord-page-num2">2</div>

        <div className="ord-page-num ord-page-num2">3</div>
        <div className="ord-page-num ord-page-num2">4</div>

        <button className="ord-page-prev-btn ord-page-next-btn">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>

{prodCateg ?<AdminProdAddCateg data={data} onClickClose={() => setProdCateg(false)}/> : null}
{prodCateg2 ?<AdminProdAddCateg data={data2} onClickClose={() => setProdCateg2(false)}/> : null}


</section>
    </>
  )
}

export default AdminProdCateg
