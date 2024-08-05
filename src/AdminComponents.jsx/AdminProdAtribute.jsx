import React, { useState } from 'react'
import AdminProdAtributeEdit from './AdminProdAtributeEdit';

const AdminProdAtribute = ({onClickRedirect}) => {
    const [adminProdAtribute , setAdminProdAtribute] = useState(false);
    const [adminProdAtributeTwo , setAdminProdAtributeTwo] = useState(false);

    const [rangeBtn, setRangeBtn] = useState(false);
    const [rangeNum, setRangeNum] = useState(null);
  
  //   const [selectedOptions, setSelectedOptions] = useState([]);
  //   const [selectedOption, setSelectedOption] = useState('');
    const rangeActiveFunc = (getValue) => {
      setRangeNum(getValue);
      console.log(rangeNum);
      setRangeBtn(!rangeBtn);
    };
    const data= {
        title : "Add Attribute Value",
        // para : "Add your attribute values and necessary information from here",
    }

    const data1= {
        title : "Update Attribute Value",
        // para : "Add your attribute values and necessary information from here",
    }
    
  return (
    <>

    <section className="admin-prod-atribute-comp">


            <h4>Product Attributes</h4>

            <div className="admin-prod-atribute-top-flex-bx mb-5">

                <div className="prod-atr-search-bx">
                    <input type="text" name='prod-search' id='prod-search' placeholder='Search by attribute name' />
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

                    
                    <button onClick={() => setAdminProdAtribute(true)}>
                    {/* <ion-icon name="add-sharp"></ion-icon>  */}
                     Add Attributes
                    </button>
                    
                </div>
                
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
                            <th>Name</th>
                            <th>Display Name</th>
                            <th>Counts</th>
                            <th>Published</th>
                            <th>Values</th>
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
                        <span>Color</span>
                      </td>
                      
                      <td>
                        <span>30</span>
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
                      <div  className="prod-edit-de-flex-btn">
                            <button onClick={onClickRedirect}>
                            <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            </div>
                      </td>

                      <td>
                      <div className="prod-edit-de-flex-btn">
                            <button onClick={() => setAdminProdAtributeTwo(true)}> 
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
                        <span>Color</span>
                      </td>
                      
                      <td>
                        <span>40</span>
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
                            <button onClick={onClickRedirect}>
                            <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            </div>
                      </td>

                      <td>
                      <div className="prod-edit-de-flex-btn">
                            <button onClick={() => setAdminProdAtributeTwo(true)}>
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
            
      
     {adminProdAtribute ? <AdminProdAtributeEdit data={data} onClickClose={() => setAdminProdAtribute(false)} /> : null }
     {adminProdAtributeTwo ? <AdminProdAtributeEdit data={data1} onClickClose={() => setAdminProdAtributeTwo(false)} /> : null }
      
    </section>
    
      
    </>
  )
}

export default AdminProdAtribute
