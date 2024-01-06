import React, { useState } from "react";
import {AutoComplete} from 'antd'

const AddAddressList = ({ onclickClose }) => {
  const [addrsForm, setAddrsForm] = useState(false);
  const [mark , setMark] = useState(false)

  const options  = [

    { 
      label : "Gandhi Nagar",
      value : "Gandhi Nagar",
     },
     { 
      label : "Laxmi Nagar",
      value : "Laxmi Nagar",
     },

     { 
      label : "Azad Nagar",
      value : "Azad Nagar",
     },

     { 
      label : "Kundan Nagar",
      value : "Kundan Nagar",
     },

     { 
      label : "Anand Vihar ",
      value : "Anand Vihar",
     },

     { 
      label : "Seelumpur",
      value : "Seelumpur",
     },
     
    
  ]


  const pins  = [

    { 
      label : "110031",
      value : "110031",
     },
     { 
      label : "110091",
      value : "110091",
     },

     { 
      label : "110008",
      value : "110008",
     },

     { 
      label : "110005",
      value : "110005",
     },

     { 
      label : "110045 ",
      value : "110045",
     },

     { 
      label : "110004",
      value : "110004",
     },
     
    
  ]

  const city  = [

    { 
      label : "Delhi",
      value : "Delhi",
     },
     { 
      label : "Bihar",
      value : "Bihar",
     },

     { 
      label : "Lucknow",
      value : "Lucknow",
     },

     { 
      label : "Chattisgarh",
      value : "Chattisgarh",
     },

     { 
      label : "Mumbai ",
      value : "Mumbai",
     },

     { 
      label : "Banglore",
      value : "Banglore",
     },
     
    
  ]
  

  return (
    <>
      <section className="add-address-table-comp" onClick={onclickClose}>
        <div className="addrs-popup-bx" onClick={(e) => e.stopPropagation()}>
          <div className="addp--flex-bx">
            <h6>Address List</h6>

            <button
              onClick={() => setAddrsForm(!addrsForm)}
              className="add-new-addres-btn"
            >
              Add New Address
            </button>
          </div>

          <div className="all-user-table adres-table">
            <table>
              <thead>
                <tr>
                  <th>SN.</th>
                  <th>Add. Type</th>
                  <th>Address</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Pin</th>
                  <th>Area</th>
                  <th>SubArea</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                 
                  <td>
                    {" "}
                    <span>Home</span>{" "}
                  </td>

                  <td>
                    {" "}
                    <span>
                      {" "}
                      2145 b/09  Street No.-1 {" "}
                    </span>{" "}
                  </td>

                  <td>
                    {" "}
                    <span>Delhi</span>{" "}
                  </td>


                  <td>
                    {" "}
                    <span>New Delhi</span>{" "}
                  </td>
                  
                  <td>
                    <span>110031</span>
                  </td>
                  <td>
                    <span>Krishna Nagar</span>
                  </td>
                  <td>
                    <span>Lalquater</span>
                  </td>
                  <td>
                    {" "}
                    <div className="act-btn-flex-bx">
                      <button onClick={() => setAddrsForm(!addrsForm)}>
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>

                      <button>
                        <i class="fa-regular fa-trash-can"></i>
                      </button>

                      <div className="chose-ths-btn ">
                        Choose this
                      </div>
                      
                    </div>{" "}
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                 
                  <td>
                    {" "}
                    <span>Shop</span>{" "}
                  </td>

                  <td>
                    {" "}
                    <span>
                      {" "}
                      2145 b/09  Street No.-1 {" "}
                    </span>{" "}
                  </td>

                  <td>
                    {" "}
                    <span>Delhi</span>{" "}
                  </td>


                  <td>
                    {" "}
                    <span>New Delhi</span>{" "}
                  </td>
                  
                  <td>
                    <span>110031</span>
                  </td>
                  <td>
                    <span>Krishna Nagar</span>
                  </td>
                  <td>
                    <span>Lalquater</span>
                  </td>
                  <td>
                    {" "}
                    <div className="act-btn-flex-bx">
                      <button onClick={() => setAddrsForm(!addrsForm)}>
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>

                      <button>
                        <i class="fa-regular fa-trash-can"></i>
                      </button>

                      <div className="chose-ths-btn unavalble ">
                        Choose this
                      </div>
                      
                    </div>{" "}
                  </td>
                </tr>


                <tr>
                  <td>3</td>
                 
                  <td>
                    {" "}
                    <span>Office</span>{" "}
                  </td>

                  <td>
                    {" "}
                    <span>
                      {" "}
                      2145 b/09  Street No.-1 {" "}
                    </span>{" "}
                  </td>

                  <td>
                    {" "}
                    <span>Delhi</span>{" "}
                  </td>


                  <td>
                    {" "}
                    <span>New Delhi</span>{" "}
                  </td>
                  
                  <td>
                    <span>110031</span>
                  </td>
                  <td>
                    <span>Krishna Nagar</span>
                  </td>
                  <td>
                    <span>Lalquater</span>
                  </td>
                  <td>
                    {" "}
                    <div className="act-btn-flex-bx">
                      <button onClick={() => setAddrsForm(!addrsForm)}>
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>

                      <button>
                        <i class="fa-regular fa-trash-can"></i>
                      </button>

                      <div className="chose-ths-btn">
                        Choose this
                      </div>
                      
                    </div>{" "}
                  </td>
                </tr>
              
              </tbody>
            </table>
          </div>

          <div onClick={onclickClose} className="close-btn close-btn-adres">
            <i class="fa-solid fa-xmark"></i>
          </div>

          <div
            className={
              addrsForm
                ? "add-addres-form-bx addresactive"
                : "add-addres-form-bx"
            }
          >
            <form action="#">
              <div className="address-add-type-grid-bx">

                
              <div className="apnt-inpt-bx apnt-inpt-bx-address apnt-inpt-bx-s ">
                  <select name="addresstype" id="addresstype">
                    <option value="#"> Address Type</option>
                    <option value="#">Home</option>
                    <option value="#">Office</option>
                    <option value="#">Shop</option>
                    <option value="#">Mall/Outlet</option>

                  </select>
                </div>


                <div className="apnt-inpt-bx apnt-inpt-bx-address apnt-inpt-bx-a ">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="apnt-inpt-bx apnt-inpt-bx-address apnt-inpt-bx-s ">
                  <select name="addresstype" id="addresstype">
                    <option value="#"> State</option>
                    <option value="#">State1</option>
                    <option value="#">State2</option>
                    <option value="#">State3</option>
                    <option value="#">State4</option>

                  </select>
                </div>

               
              </div>

              <div className="addrs-form-grid">

                  <AutoComplete optionSelectedColor={"#050505"} className="apnt-inpt-bx-autotype"  options={city} filterOption={true} placeholder="Enter City here" />

                  <AutoComplete optionSelectedColor={"#050505"} className="apnt-inpt-bx-autotype"  options={pins} filterOption={true} placeholder="Enter Pin here" />

                  <AutoComplete optionSelectedColor={"#050505"} className="apnt-inpt-bx-autotype"  options={options} filterOption={true} placeholder="Enter Area" />

                  <AutoComplete optionSelectedColor={"#050505"} className="apnt-inpt-bx-autotype"  options={options} filterOption={true} placeholder="Enter Sub Area" />

                
               
              </div>

              

              <button className="apnt-form-submit-btn apnt-form-submit-btn-add-new-adres center-form-btn">
                  Submit
                </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAddressList;
