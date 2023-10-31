import React from 'react'

const PrfPasswrd = () => {
  return (
    <>

    <section className="prof-passwrd-comp">
        <div className="prf-passwrd-form">
            <h5>Password</h5>

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
    </section>
      
    </>
  )
}

export default PrfPasswrd
