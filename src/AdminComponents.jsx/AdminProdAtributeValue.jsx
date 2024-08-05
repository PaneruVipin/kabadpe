import React, { useState } from 'react'
import AdminProdAtributeUpdate from './AdminProdAtributeUpdate'

const AdminProdAtributeValue = () => {
    const [prodAtrbte , setProdAtrbte] = useState(false);

    const data= {
        title : "Add/Update Attribute Value",
    }
  return (
    <>
        <section className="admin-prod-atribute-comp vendor-attributes-comp vendor-attributes-comp2">

    <div className="atribute-value-flex-bx">
        <div className="atribute-title">
<h4>Product Attributes Values</h4>
<h6> Attributes <span> Color </span></h6>
</div>


<div className="prod-atribute-buton-flex prod-atribute-buton-flex1 mt-5">
   
<button onClick={() => setProdAtrbte(true)}>
    {/* <ion-icon name="add-sharp"></ion-icon>  */}
     Add Attributes
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
                        <span>Color</span>
                      </td>

                    
                      
                      <td>
                        <span>Check Box</span>
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
      {    true ?   <div class={ true   ?   "form-checkss form-switch unchecked" : "form-checkss form-switch"}>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"   />
</div> : null}

{ false  ? <div className="form-switch-main">  
  <div class={ "form-checkss form-switch form-switch3"}>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked   />
</div>

</div> : null}


                      </td>

                  

                      <td>
                      <div className="prod-edit-de-flex-btn">
                            <button onClick={() => setProdAtrbte(true)} > 
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
                        <span>Color</span>
                      </td>

                     
                      
                      <td>
                        <span>Check Box</span>
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
      {    false ?   <div class={ true   ?   "form-checkss form-switch unchecked" : "form-checkss form-switch"}>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"   />
</div> : null}

{ true  ? <div className="form-switch-main">  
  <div class={ "form-checkss form-switch form-switch3"}>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked   />
</div>

</div> : null}


                      </td>


                      <td>
                      <div className="prod-edit-de-flex-btn">
                            <button onClick={() => setProdAtrbte(true)}>
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
</section>

   {prodAtrbte ? <AdminProdAtributeUpdate data={data} onClickClose={() => setProdAtrbte(false)} /> : null}

    </>
  )
}

export default AdminProdAtributeValue
