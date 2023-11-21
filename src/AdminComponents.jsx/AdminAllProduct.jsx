import React, { useState } from 'react'
import '../style/AdminProduct.css'
import AllProdTab from './AllProdTab'

const AdminAllProduct = () => {
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

            <h6> All <span className='num-brck'> (446) </span>  </h6>
            <h6> Published <span className='num-brck'> (432) </span>  </h6>
            <h6> Drafts <span className='num-brck'> (4) </span>  </h6>
            <h6> Bin <span className='num-brck'> (467) </span>  </h6>
            <h6> Banned <span className='num-brck'> (132) </span>  </h6>

            
        </div>

        <div className="right-prod-search-flex-bx">

        <div className="right-all-prod-search-box">
            <input type="text" name='search' id='search' autoComplete='off' placeholder='Search...' />
        </div>

        <button className="search-prod-btn">
            Search Products
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
                        <option value="product">Select category</option>
                        <option value="product">Home Essentials</option>
                        <option value="product">Bathroom Essentials</option>
                        <option value="product">Food & nutrition</option>
                        <option value="product">Furniture</option>


                    </select>

                </div>

                <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                    <select name="product" id="product">
                        <option value="product">Filter by product type</option>
                        <option value="product">Filter by product type</option>
                        <option value="product">Filter by product type</option>
                        <option value="product">Filter by product type</option>


                    </select>

                </div>

                <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                    <select name="product" id="product">
                        <option value="product">Filter by stock status</option>
                        <option value="product">In status</option>
                        <option value="product">Out status</option>
                        <option value="product">On backorder </option>


                    </select>

                </div>

                <button className="prod-filt-btn prod-filt-btn2">
                    Filter
                </button>
                
            </div>

            <div className="right-all-prod-paginat-flex-box">

                    <div className="items-num">
                     <p>446 Items</p>   
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

    <AllProdTab />
    
    </>
  )
}

export default AdminAllProduct
