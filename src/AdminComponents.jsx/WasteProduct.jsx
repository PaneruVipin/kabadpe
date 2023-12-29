import React, { useState } from 'react'
import WasteProdData from './WasteProdData'
import WasteProdEdit from './WasteProdEdit';

const WasteProduct = () => {
    const [wasteProd , setWasteProd] = useState(WasteProdData);
    const [prodEdit , setProdEdit] =  useState(false)
  return (
    <>

<section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box user-det-top-flex-box4">
            <h6>Waste Products</h6>

            <div className="right-user-filter-data-flex-box waste-prod-filt-flex">

                <div className="left-waste-prod-filt-bx">

                <div className="user-data-search-box">
                    <input type="text" name="search" id="search" placeholder="Search..." autoComplete="off" />
                </div>

                <div className="user-type-sel-box user-data-search-box">
                    <select name="user-type-data" id="user-type-data">
                        <option value="1">User</option>
                        <option value="1">Vendor</option>
                        <option value="1">Staff (Manager)</option>
                        <option value="1">Staff (Sales Team)</option>
                        <option value="1">Staff (Support Team)</option>

                    </select>
                </div>

                <div className="user-type-sel-box  user-data-search-box user-type-sel-box3">
                    <select name="user-type-data" id="user-type-data">
                        <option value="1">Today</option>
                        <option value="1">Last Week</option>
                        <option value="1">Last Monthly </option>
                    </select>
                </div>

                
                <div className="user-data-search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                </div>

             
                
            </div>

            <div onClick={() => setProdEdit(true)} className="add-product-btn">
            Add Product
          </div>
            
          </div>

            <div className="all-user-table waste-prod-table">

                <table>
                    <thead>
                        <tr>
                            <th>SNO.</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Retail Price</th>
                            <th>Bulk Price</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>

                    <tbody>

                        {wasteProd.map((elem,indx) => {

                            return (
                                <>

                                <tr key={indx}>
                                    <td> <span> {indx + 1}</span> </td>
                                    <td> <span> {elem.prodname}</span> </td>
                                    <td> <img src={elem.prodImg} alt="" /> </td>
                                    <td> <span> {elem.retprice}</span> </td>
                                    <td> <span> {elem.bulkprice}</span> </td>

                                    <td>

                                        <div className="edit-remove-flex">

                                            <button onClick={() => setProdEdit(true)} >
                                            <i class="fa-solid fa-pen-to-square"></i>
                                            </button>

                                            
                                            <button>
                                            <i class="fa-solid fa-trash"></i>
                                            </button>
                                            
                                        </div>
                                        
                                    </td>
                                    
                                </tr>
                                
                                </>
                            )
                            
                        })}
                        
                    </tbody>
                </table>
                
            </div>
         

          </div>

          </section>

   { prodEdit ? <WasteProdEdit prodEditTrue={prodEdit} onclickEditClose={() => setProdEdit(false)} />  : null  }       

    
      
    </>
  )
}

export default WasteProduct
