import React, { useState } from 'react'
import AddAttributes from './VendorComp/AddAttributes';

const VendorAttributes = ({onClickRedirect}) => {
  const [exportBox, setExportBox] = useState(false);
  const [importBox, setImportBox] = useState(false);
  const [rangeBtn, setRangeBtn] = useState(false);
  const [rangeNum, setRangeNum] = useState(null);
  const [addAtribute , setAddAtribute] = useState(false)
  const [updateAtribute , setUpdateAtribute] = useState(false);

//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('');
  const rangeActiveFunc = (getValue) => {
    setRangeNum(getValue);
    console.log(rangeNum);
    setRangeBtn(!rangeBtn);
  };

  const data = {

    title : "Add Attribute Value",
    para : "Add your attribute values and necessary information from here",
    
  }

  const data2 = {

    title : "Update Attribute Value",
    para : "Updated your attribute values and necessary information from here",
    
  }
  
  return (
    <>

    <section className="vendor-attributes-comp">

        <h4>Attributes</h4>

    <div className="product-added-del-main">
          <div className="left-prod-exp-imp-bx">
            <div className="prod-exp-imp-bx">
              <button
                onClick={() => setExportBox(!exportBox)}
                className="prod-exp-imp-btn"
              >
                <i class="fa-solid fa-arrow-up-from-bracket"></i> Export
              </button>

              {exportBox ? (
                <div className="export-info-bx">
                  <div className="export-file">
                    <i class="fa-regular fa-file-lines"></i>{" "}
                    <span>Export to CSV</span>
                  </div>
                  <div className="export-file">
                    <i class="fa-regular fa-file-code"></i>{" "}
                    <span>Export to JSON</span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="prod-exp-imp-bx prod-exp-imp-bx2">
              <button
                onClick={() => setImportBox(!importBox)}
                className="prod-exp-imp-btn prod-exp-imp-btn2"
              >
                <i class="fa-solid fa-arrow-up-from-bracket"></i> Import
              </button>

              {importBox ? (
                <div className="import-now-file-bx">
                  <div className="imp-file-btn">
                    <label htmlFor="impFile">
                      {" "}
                      <ion-icon name="cloud-download-outline"></ion-icon>{" "}
                      SelectYourJSON Products File
                    </label>
                    <input
                      type="file"
                      id="impFile"
                      accept=".jpg, .jpeg, .png, .pdf"
                    />
                  </div>

                  <button className="imp-btn">
                    <ion-icon name="add-outline"></ion-icon> ImportNow
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="right-prod-btns-flex">
            <button className="prod-add-del-btn">
              <i class="fa-regular fa-pen-to-square"></i> Bulk Action
            </button>

            <button className="prod-add-del-btn prod-add-del-btn2">
              <i class="fa-solid fa-trash-can"></i> Delete
            </button>
 
            <button onClick={() => setAddAtribute(true)} className="prod-add-del-btn prod-add-del-btn3">
              <i class="fa-solid fa-plus"></i> Add Attribute
            </button>
          </div>
        </div>

        <div className="product-filter-main product-filter-main32">
          <div className="ord-filt-bx">
            <input
              type="text"
              name="searchproduct"
              id="searchproduct"
              placeholder="Search by attribute name"
            />
          </div>


          <div className="ord-filt-btn-flex">
            <button className="filt-ord-btn">Filter</button>

            <button className="filt-ord-btn filt-ord-btn3">Reset</button>
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
                <th>Display Name</th>
                <th>Option</th>
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
                      <div onClick={onClickRedirect}  className="prod-edit-de-flex-btn">
                            <button>
                            <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            </div>
                      </td>

                      <td>
                      <div className="prod-edit-de-flex-btn">
                            <button onClick={() => setUpdateAtribute(true)}> 
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
                            <button onClick={() => setUpdateAtribute(true)}>
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



    { addAtribute ? <AddAttributes onclickClose={() => setAddAtribute(false)} data={data} /> : null }  
    { updateAtribute ? <AddAttributes onclickClose={() => setUpdateAtribute(false)} data={data2} /> : null }  

        
    </section>
      
    </>
  )
}

export default VendorAttributes
