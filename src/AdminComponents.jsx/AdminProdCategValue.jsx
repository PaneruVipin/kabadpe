import React, { useState } from 'react'
import AdminProdCategValueEdit from './AdminProdCategValueEdit';

const AdminProdCategValue = () => {
    const [switchActive , setSwitchActive] = useState(false);
    const [categValue , setCategValue] = useState(false)
    const [categValue2 , setCategValue2] = useState(false)

    const data = {
        title : "Add Category",
    }
    const data2 = {
        title : "Update Category",
    }
  return (
    <>
       <section className="admin-prod-atribute-comp vendor-attributes-comp vendor-attributes-comp2">

<div className="atribute-value-flex-bx">
    <div className="atribute-title">
<h4>Category</h4>
<h6> Categories <span> Fish & Meat </span></h6>
</div>


<div className="prod-atribute-buton-flex prod-atribute-buton-flex1 ">

<button onClick={() => setCategValue(true)}>
{/* <ion-icon name="add-sharp"></ion-icon>  */}
 Add Category
</button>


<button>
{/* <ion-icon name="trash"></ion-icon>   */}
Delete
</button>


</div>
</div>


<div className="all-user-table waste-prod-table admin-prod-atribute-table mt-lg-4">
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
                <span>10</span>
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
               
                    <button onClick={() => setCategValue2(true)}>
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
                
                    <button onClick={() => setCategValue2(true)}>
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
                <span>30</span>
              </td>
              <td>
                <span>18%</span>
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
                 
                    <button onClick={() => setCategValue2(true)}>
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

    {categValue ? <AdminProdCategValueEdit data={data} onclickClose={() => setCategValue(false)} /> : null}
    { categValue2 ? <AdminProdCategValueEdit data={data2} onclickClose={() => setCategValue2(false)} /> : null}
    
</section> 
    </>
  )
}

export default AdminProdCategValue
