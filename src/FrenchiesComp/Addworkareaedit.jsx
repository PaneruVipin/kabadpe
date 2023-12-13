import React from 'react'

const Addworkareaedit = ({onclickCloseAddWorkEdit}) => {
  return (
    <>

    <section className="add-work-area-edit-comp">
        <div className="add-work-area-edit-main-bx">

            <h6 className='banktext'>Add Work Area (Add or Edit)</h6>

            <form action="#">

                <div className="addwrkarea-form-bx">

                <div className="admin-login-fild">
              <label htmlFor="State">State</label>
              <div className="admin-login-input">
                <input type="text" name='State' id='State' placeholder='Enter your state'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="City">City</label>
              <div className="admin-login-input">
                <input type="text" name='City' id='City' placeholder='Enter your city'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="zipcode">Zip Code</label>
              <div className="admin-login-input">
                <input type="text" name='zipcode' id='zipcode' placeholder='Enter your zipcode'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="Area">Area</label>
              <div className="admin-login-input">
                <input type="text" name='Area' id='Area' placeholder='Enter your Area'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="subarea">Sub Area</label>
              <div className="admin-login-input">
                <input type="text" name='subarea' id='subarea' placeholder='Enter your sub area'   autoComplete='off' />
              </div>
            </div>


            <div className="admin-login-fild">
              <label htmlFor="subarea">Price</label>
              <div className="admin-login-input">
                <input type="text" name='cityprice' id='cityprice' placeholder='Enter your City Price'   autoComplete='off' />
              </div>
            </div>
                    
                </div>
                
            </form>

            <button className="add-work-area-btn">
                Save
            </button>


            <div onClick={onclickCloseAddWorkEdit} className="close-add-work-bx-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default Addworkareaedit
