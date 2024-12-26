import React from 'react'

const DecQue = ({setDec}) => {
  return (
    <>
       <section onClick={() => setDec(false)} className="que-accept-dec-comp">

<div onClick={(e) => e.stopPropagation()} className="quer-accept-dec-bx quer-accept-dec-bx2">
<ion-icon name="close-sharp"></ion-icon>

<p>You have declined this query .</p>

    <button onClick={() => setDec(false)} className="confirm-btn">
        Confirm
    </button>

</div>

</section>
    </>
  )
}

export default DecQue
