import React, { useState } from 'react'

const PrfPasswrd = () => {
    const [formBox, setFormBox] =  useState(false);
    const [showhide , setShowhide] = useState('fa-plus');

    const showHide = () => {

        setFormBox(!formBox)

       if(showhide === 'fa-plus'){
        setShowhide('fa-minus')
       }else{
        setShowhide('fa-plus')

       }
        
    }
    
  return (
    <>

    <section className="prof-passwrd-comp">
        <div className="prf-passwrd-form">

            <div className="comn-top-flex-bx">
            <h5>Password</h5>

            <button onClick={showHide} className="show-hide">
                <i className={`fa-solid ${showhide}`}></i>
            </button>
            
            </div>

            <div className={formBox ? ' formboxx active' : 'form-boxx'} style={{marginTop : "2rem"}}>

            <form action="#">

                <div className="prf-passwrd-bx">
                    <input type="text" name='password' id='password' placeholder='Password' />
                </div>

                
                <div className="prf-passwrd-bx">
                    <input type="text" name='password' id='password' placeholder='Confirm Password' />
                </div>

                <button className="prf-passwrd-btn">
                    Save
                </button>
                
            </form>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default PrfPasswrd
