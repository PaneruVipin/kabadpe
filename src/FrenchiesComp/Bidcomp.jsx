import React from 'react'

const Bidcomp = ({onclickCloseBid}) => {
  return (
    <>

<div  className= "pay-now-btn-sec payactive">

<div className="paynow-btn-flex">

<button className="pay-btn">
  Prepaid Plan
</button>

<button  className="pay-btn">
Comission Based Plan
</button>

<div onClick={onclickCloseBid}  className="close-btn ">
<i class="fa-solid fa-xmark"></i>
</div>
  
</div>
              
</div>
      
    </>
  )
}

export default Bidcomp
