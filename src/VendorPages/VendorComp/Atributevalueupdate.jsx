import React, { useState } from 'react'

const Atributevalueupdate = ({data , onClickClose}) => {
    const [switchActive , setSwitchActive] = useState(false);
  return (
    <>
       <section className="add-attribute-comp" onClick={onClickClose} >

        

<div className="add-atribute-bx" onClick={(e) => e.stopPropagation()}>

    <div className="attribute-heading">

    <div className="atrbiute-heading">
        <h6> {data.title} </h6>
        <p> {data.para} </p>
    </div>


    <button  onClick={onClickClose} className=" delt-btn21221">
    <ion-icon name="close-outline"></ion-icon>
                    </button>

    </div>

<div className="atribute-fields-flex-bx">



             
<div className="ord-filt-bx add-prod-inpt-bx">
    <span>Display Name
    </span>
        <input type="text" name='displayname' id='displayname' placeholder='Color or Size or Dimension or Material or Fabric' autoComplete='off' required  />
    </div>
    
    <div className="ord-filt-bx add-prod-inpt-bx">
    <span>Display Name
    </span>

    <div onClick={() => setSwitchActive(!switchActive)} className={switchActive ? "swithc-toggle-btn switchactive" : "swithc-toggle-btn"}>
        <div className="round-bx"></div>
        <span>Yes</span>
        <span>No</span>

    </div>
       
    </div>

  
    
</div>
  
<div className=" attribute-btns-flex">
        <button className='prod-add-del-btn upld-can-prod'>Cancel</button>
        <button className='prod-add-del-btn upld-add-prod'>Update Attribute</button>
    </div>
</div>

</section>
    </>
  )
}

export default Atributevalueupdate
