import React, { useState } from 'react'

const VendEditOrg = ({onclickClose}) => {
    const [switchBtn , setSwitchBtn] = useState(false);
    const [tabActive , setTabActive] = useState('basic');

  
    
  return (
    <>
    <section className="add-prod-comp" onClick={onclickClose}>
        
        <div className="add-prod-main-bx add-prod-main-bx42" onClick={(e) => e.stopPropagation()}>

            <div className="top-add-prod-flex-bx">

                <div className="left-add-prod-title-bx">
                    <h6>Edit Organization </h6>
                </div>

                <div className="right-lang-sel-bx-flex">

                    <div onClick={onclickClose} className="add-prod-close-btn">
                    <ion-icon name="close-outline"></ion-icon>
                    </div>
                    
                </div>
                
            </div>


         

        <form action="" className="add-prod-form-main">

            <div className="add-product-form-bx">

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Name</span>
                <input type="text" name='name' id='name' placeholder='Enter name' autoComplete='off' required  />
            </div>

            
            <div className="ord-filt-bx add-prod-inpt-bx mt-5">
            <span>Company Name</span>
                <input type="text" name='compname' id='compname' placeholder='HtmlLover Itd' autoComplete='off' required  />
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>GST Number</span>
                <input type="text" name='gstnumber' id='gstnumber' placeholder='Enter GST number' autoComplete='off' required  />
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx  add-prod-desc-bx">
            <span>Address</span>
            <textarea name="address" id="address" cols="30" rows="3" placeholder='Enter address' autoComplete='off' required></textarea>
            </div>

            
            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Post Code</span>
            <div >
                <input type="text" name='postcode' id='postcode' placeholder='Enter Post Code' autoComplete='off' required  />
                </div>
            </div>

               
            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Contact</span>
            <div >
                <input type="text" name='contact' id='contact' placeholder='Enter number' autoComplete='off' required  />
                </div>
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Email</span>
                <input type="email" name='email' id='email' placeholder='example@gmail.com' autoComplete='off' required  />
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Web site</span>
                <input type="text" name='url' id='url' placeholder='Paste Web URL' autoComplete='off' required  />
            </div>

                
            </div>
            

            
            </form>
            
            <div className="prod-add-can-flex-btn prod-add-can-flex-btn21">
                <button className='prod-add-del-btn upld-can-prod'>Cancel</button>
                <button className='prod-add-del-btn upld-add-prod'>Add Product</button>
            </div>
        </div>
        
    </section>
      
    </>
  )
}

export default VendEditOrg
