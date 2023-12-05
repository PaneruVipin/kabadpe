import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react';

const FrenchEdit = ({onClickCloseEditForm}) => {
    const [selectedImg , setSelectedImg] = useState('./images/customImg/c-1.jpg')
    const editor = useRef(null);
	const [content, setContent] = useState('');


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setSelectedImg(event.target.result);
          };
          reader.readAsDataURL(file);
        }
      };
    
  return (
    <>

    <section className="french-edit-comp">

        <div className="french-edit-main-box">

            <h5>Frenchies Details (Edit) </h5>

        <div className="french-det-logo-box">

            <div className="f-logo">
                {selectedImg && (
                <img src={selectedImg} alt="" />

                )}
            </div>
            <label  htmlFor='image_Path' className="french-logo-btn">
                Upload
            </label>
            <input type="file" accept='image/*' id='image_Path' onChange={handleImageChange} />
            
        </div>
            

            <div className="french-det-grid">

            <div className="admin-login-fild">
              <label htmlFor="companyname">Name of the Company</label>
              <div className="admin-login-input">
                <input type="text" name='companyname' id='companyname' placeholder='Company Name'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="companyname">Manager Name /  POC </label>
              <div className="admin-login-input">
                <input type="text" name='managername' id='managername' placeholder='Manager Name'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="Email">Email  </label>
              <div className="admin-login-input">
                <input type="email" name='email' id='email' placeholder='Email ID'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="mobilenumber">Phone Number  </label>
              <div className="admin-login-input">
                <input type="text" name='mobilenumber' id='mobilenumber' placeholder='Mobile number'   autoComplete='off' />
              </div>
            </div>


            <div className="admin-login-fild">
              <label htmlFor="gstnumber">GST Number  </label>
              <div className="admin-login-input">
                <input type="text" name='gstnumber' id='gstnumber' placeholder='GST Number'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="workarea">Area of Work  </label>
              <div className="admin-login-input">
                <input type="text" name='workarea' id='workarea' placeholder='Work Area'   autoComplete='off' />
              </div>
            </div>

        

            <div className="admin-login-fild">
              <label htmlFor="bankname">Bank Name  </label>
              <div className="admin-login-input">
                <input type="text" name='bankname' id='bankname' placeholder='Bank Name'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="accountnumber">Account Number  </label>
              <div className="admin-login-input">
                <input type="password" name='accountnumber' id='accountnumber' placeholder='Account Number'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="confirmaccountnumber">Confirm Account Number  </label>
              <div className="admin-login-input">
                <input type="text" name='confirmaccountnumber' id='confirmaccountnumber' placeholder='Confirm Account Number'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="ifsc">IFSC Code  </label>
              <div className="admin-login-input">
                <input type="text" name='ifsc' id='ifsc' placeholder='IFSC Code'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="zipcode">Zip Code  </label>
              <div className="admin-login-input">
                <input type="text" name='zipcode' id='zipcode' placeholder='Zip Code'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild ">
              <label htmlFor="zipcode">Subscription Type  </label>
              <div className="admin-login-input">
                <select name="subscriptiontype" id="subscriptiontype">
                <option value="Monthly">Choose</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quaterly">Quaterly</option>

                </select>
              </div>
            </div>
                
            </div>

            <div className="text-editor-bx">
   <JoditEditor 
    ref={editor}
    value={content}
    onChange={newContent => {setContent(newContent)}}
    
/>
            
            
        </div>

        <button onClick={onClickCloseEditForm} className="close-popup-btn">
        <i class="fa-solid fa-xmark"></i>
        </button>

        <button className="submit-btn submit-btn5">
          Save Changes
        </button>

        </div>
        
    </section>
      
    </>
  )
}

export default FrenchEdit
