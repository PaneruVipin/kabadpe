import React, { useState } from 'react'
import '../style/AdminProduct.css'
import AllProdTab from './AllProdTab'
import OrderTab from './OrderTab';

const AdminOrder = ({orderUpdatedData}) => {
const [index , setIndex] = useState(1);

const indexFunc = () => {

    if(index !== 5){
        setIndex(index + 1);
    }else{
        setIndex(5);
    }
    
}

const indexFuncPrev = () => {

    if( index !== 1){
        setIndex(index - 1);

    }else{
        setIndex(1);

    }
    
}
    
  return (
    <>

    <section className="all-prod-admin-comp">

        <div className="top-prod-filter-flex-box">


        <div className="breadcrum-main-box">

            <h6> All <span className='num-brck'> (2,346) </span>  </h6>
            <h6> Processing <span className='num-brck'> (1,311) </span>  </h6>
            <h6> On hold <span className='num-brck'> (112) </span>  </h6>
            <h6> Completed <span className='num-brck'> (1,456) </span>  </h6>
            <h6> Refunded <span className='num-brck'> (4) </span>  </h6>
            <h6> Failed <span className='num-brck'> (2) </span>  </h6>


            
        </div>

        <div className="right-prod-search-flex-bx">

        <div className="right-all-prod-search-box">
            <input type="text" name='search' id='search' autoComplete='off' placeholder='Search...' />
        </div>

        <button className="search-prod-btn">
            Search Orders
        </button>
        </div>

        </div>

        <div className="all-prod-filter-flex-box-two">

            <div className="left-all-prod-filt-sel-flex-box">

                <div className="all-prod-sel-apply-flt-box">
                <div className="all-prod-sel-filt-box">
                    <select name="product" id="product">
                        <option value="product">Bulk actions</option>
                        <option value="product">Bulk actions</option>
                        <option value="product">Bulk actions</option>
                        <option value="product">Bulk actions</option>

                    </select>

                </div>
                <button className="prod-filt-btn">
                    Apply
                </button>
                </div>

               

                <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                    <select name="product" id="product">
                        <option value="product">All Dates</option>
                        <option value="product">All Dates</option>
                        <option value="product">All Dates</option>
                        <option value="product">All Dates</option>


                    </select>

                </div>

                <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                    <select name="product" id="product">
                        <option value="product">Filter by registered customer</option>
                        <option value="product">Filter by registered customer</option>
                        <option value="product">Filter by registered customer</option>
                        <option value="product">Filter by registered customer</option>



                    </select>

                </div>

                <button className="prod-filt-btn prod-filt-btn2">
                    Filter
                </button>
                
            </div>

            <div className="right-all-prod-paginat-flex-box">

                    <div className="items-num">
                     <p>2,345 Items</p>   
                    </div>

                    {/* <div className="duble-arrow-btn page-filt-btn">
                    <i class="fa-solid fa-angles-left"></i>
                    </div> */}
                    <div onClick={indexFuncPrev}  className="sing-arrow-btn page-filt-btn">
                    <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="page-num-box">
                        {index}
                    </div>
                   
                   <p>of <span>5</span></p>
                
                   {/* <div className="duble-arrow-btn page-filt-btn page-filt-btn3">
                    <i class="fa-solid fa-angles-right"></i>
                    </div> */}

                    <div onClick={indexFunc} className="sing-arrow-btn page-filt-btn">
                    <i class="fa-solid fa-angle-right"></i>
                    </div>
            </div>
            
        </div>

        
    </section>

    <OrderTab orderUpdatedDatatable={orderUpdatedData} />
    
    </>
  )
}

export default AdminOrder

