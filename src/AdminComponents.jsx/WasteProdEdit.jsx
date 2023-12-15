import React, { useState } from "react";

const WasteProdEdit = ({onclickEditClose}) => {
    const [selectImg , setSelectImg] = useState('./images/customImg/plastic.png')

    const handleImageChange = (event) => {

            const file =  event.target.files[0];
            const reader =  new FileReader();

            reader.onload = () => {

                setSelectImg(reader.result);
                
            }

            if(file){

                reader.readAsDataURL(file);
                
            }
        
    }
    
  return (
    <>
      <section className="waste-prod-edit-comp">
        <div className="waste-prod-edit-main-bx">
          <h5>Waste Product (Add or Edit) </h5>

          <form action="#">
            <div className="admin-login-fild admin-login-fild3">
              <label htmlFor="#">Product Name</label>
              <input
                type="text"
                name="productname"
                id="productname"
                autoComplete="off"
                placeholder="Enter Product Name"
              />
            </div>

            <div className="prod-image-main mt-3">
              <h6>Product Image</h6>

              <div className="image-fild-flex-bx">

                <div className="image-add-bx">
                    <img src={selectImg} alt="" />
                </div>

                <div className="input-file-btn">
                    <label htmlFor="Prod_img">Product Image</label>
                    <input type="file" accept="image/*" id="Prod_img" onChange={handleImageChange} />
                </div>
                
              </div>
              
            </div>

            <div className="three-fild-bx">
              <h6>Retail Price</h6>

              <div className="three-fild-grid">
                <div className="admin-login-fild admin-login-fild3">
                  <label htmlFor="#">Start</label>
                  <div className="fild-bx">
                    <input
                      type="text"
                      name="Startret"
                      id="Startret"
                      autoComplete="off"
                    />
                    <span>Kg</span>
                  </div>
                </div>

                <div className="admin-login-fild admin-login-fild3">
                  <label htmlFor="#">End</label>
                  <div className="fild-bx">
                    <input
                      type="text"
                      name="endret"
                      id="endret"
                      autoComplete="off"
                    />
                    <span>Kg</span>
                  </div>
                </div>

                <div className="admin-login-fild admin-login-fild3">
                  <label htmlFor="#">Price</label>
                  <div className="fild-bx">
                    <input
                      type="text"
                      name="Price"
                      id="Price"
                      autoComplete="off"
                    />
                    <span>₹</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="three-fild-bx">
              <h6>Bulk Price</h6>

              <div className="three-fild-grid">
                <div className="admin-login-fild admin-login-fild3">
                  <label htmlFor="#">Start</label>
                  <div className="fild-bx">
                    <input
                      type="text"
                      name="Startret"
                      id="Startret"
                      autoComplete="off"
                    />
                    <span>Kg</span>
                  </div>
                </div>

                <div className="admin-login-fild admin-login-fild3">
                  <label htmlFor="#">End</label>
                  <div className="fild-bx">
                    <input
                      type="text"
                      name="endret"
                      id="endret"
                      autoComplete="off"
                    />
                    <span>Kg</span>
                  </div>
                </div>

                <div className="admin-login-fild admin-login-fild3">
                  <label htmlFor="#">Price</label>
                  <div className="fild-bx">
                    <input
                      type="text"
                      name="Price"
                      id="Price"
                      autoComplete="off"
                    />
                    <span>₹</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="add-prod-btn confirm-btn">
                Add Product
            </button>
            
          </form>

          <div onClick={onclickEditClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default WasteProdEdit;
