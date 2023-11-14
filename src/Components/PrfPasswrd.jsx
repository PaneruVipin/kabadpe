import React, { useState } from 'react'

const PrfPasswrd = () => {
    const [formBox, setFormBox] =  useState(false);
    const [showhide , setShowhide] = useState('Show');

    const showHide = () => {

        setFormBox(!formBox)

        if(showhide == 'Hide'){
            setShowhide('Show')
        }else{
            setShowhide('Hide')

        }
        
    }
    
  return (
    <>

    <section className="prof-passwrd-comp">
        <div className="prf-passwrd-form">

            <div className="comn-top-flex-bx">
            <h5>Password</h5>

            <button onClick={showHide} className="show-hide">
                {showhide}
            </button>
            
            </div>

            <div className={formBox ? ' formboxxactive' : 'form-boxx'}>

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
