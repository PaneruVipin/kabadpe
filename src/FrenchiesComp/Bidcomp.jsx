import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BidProductData from './BidProductData';

const Bidcomp = ({onClickDetPage , onClickCreatePost}) => {
  const [unit , setUnit] = useState('Unit');
  const [showOption , setShowOption] = useState(false);

  const Options = [ 'KG' , 'PICS' ]; 


  const handleOptionChange = (selectOption) => {

    setUnit(selectOption);
    setShowOption(false);
    
  }

  const BidProdData = [

    {
      id : 1,
      bidImg : '/images/customImg/serv-img-1.jpg',
      ProdName : 'Bid Product One',
      prodPrice : 699.00,
      pertext : '/Kg'
    },
    {
      id : 2,
      bidImg : '/images/customImg/serv-img-2.jpg',
      ProdName : 'Bid Product Two',
      prodPrice : 699.00,
      pertext : '/Kg'

    },
    {
      id : 3,
      bidImg : '/images/customImg/serv-img-3.jpg',
      ProdName : 'Bid Product Three',
      prodPrice : 699.00,
      pertext : '/Kg'

    },
    {
      id : 4,
      bidImg : '/images/customImg/serv-img-4.jpg',
      ProdName : 'Bid Product Four',
      prodPrice : 699.00,
      pertext : '/Kg'

    },
    {
      id : 5,
      bidImg : '/images/customImg/instagram-1.jpg',
      ProdName : 'Bid Product Five',
      prodPrice : 699.00,
      pertext : '/Kg'

    },
    {
      id : 6,
      bidImg : '/images/customImg/instagram-2.jpg',
      ProdName : 'Bid Product Six',
      prodPrice : 699.00,
      pertext : '/piece'

    },
    {
      id : 7,
      bidImg : '/images/customImg/instagram-3.jpg',
      ProdName : 'Bid Product Seven',
      prodPrice : 699.00,
      pertext : '/Kg'

    },
    {
      id : 8,
      bidImg : '/images/customImg/instagram-4.jpg',
      ProdName : 'Bid Product Eight',
      prodPrice : 699.00,
      pertext : '/piece'

    },
    {
      id : 9,
      bidImg : '/images/customImg/instagram-5.jpg',
      ProdName : 'Bid Product Nine',
      prodPrice : 699.00,
      pertext : '/piece'

    },
    {
      id : 10,
      bidImg : '/images/customImg/instagram-6.jpg',
      ProdName : 'Bid Product Ten',
      prodPrice : 699.00,
      pertext : '/Kg'

    },
    {
      id : 11,
      bidImg : '/images/customImg/gall-img-4.jpg',
      ProdName : 'Bid Product Eleven',
      prodPrice : 699.00,
      pertext : '/Kg'

    },
    {
      id : 12,
      bidImg : '/images/customImg/gall-img-3.jpg',
      ProdName : 'Bid Product Twelve',
      prodPrice : 699.00,
      pertext : '/piece'

    },
    
  ]
  
  
  return (
    <>

    <section className="bid-product-listing-comp">
      <div className="common-container">

        <div className="top-bid-header-flex">

          <div className="left-bid-header-bx">

            <NavLink to="/">
              Home
            </NavLink>
            <span>Products</span>
            
          </div>


          <div className="right-unit-flex-bx">

           <div className="unit-select-main-bx">

            <div onClick={() => setShowOption(!showOption)} className="select-bx">
          {unit}
          <div className="s-arw">
          <i class="fa-solid fa-angle-down"></i>
          </div>
            </div>

            <div className={ showOption ? "unit-options-bx selectactive" : "unit-options-bx"}>

              {Options.map((option) => {
                return (
                  <>
                  <span key={option} onClick={() => handleOptionChange(option)}> {option} </span>
                  </>
                )
              })}
              
            </div>
                  

              
            
           </div>

           <button onClick={onClickCreatePost} className="create-post-btn">
            Create Post
           </button>

            
          </div>
          
        </div>

        <BidProductData onClickRedirect={onClickDetPage}  bidData={BidProdData}/>

        
      </div>
    </section>

      
    </>
  )
}

export default Bidcomp
