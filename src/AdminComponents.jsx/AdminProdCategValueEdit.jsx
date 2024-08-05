import React, { useState } from 'react'

const AdminProdCategValueEdit = ({data , onclickClose}) => {
    const [images , setImages] = useState("");
    const [switchActive , setSwitchActive] =  useState(false);

    const handleImageChange = (e) => {

        const selectedImage =  Array.from(e.target.files);
        const imageUrl =  selectedImage.map(image => URL.createObjectURL(image));
        setImages(imageUrl);
    }

    const handleDeleteImage = () => {
        setImages("");
        
    }
  return (
    <>
        <section className="waste-prod-edit-comp" onClick={onclickClose}>
        <div className="waste-prod-edit-main-bx admin-prod-atribute-main-bx" 
        onClick={(e) => e.stopPropagation()}>
          <h5> {data.title} </h5>

            <div className="admin-login-fild admin-login-fild3">
              <label htmlFor="#">Name</label>
              <input
                type="text"
                name="categname"
                id="categname"
                autoComplete="off"
                placeholder="Category name"
              />
            </div>
          

          <div className="admin-login-fild admin-login-fild3 admin-login-fild34 mt-3 mb-4">
            <label htmlFor="#">Description</label>
            <textarea name="desc" id="desc" placeholder='Enter Description'></textarea>
          </div>

          
          

        <div className="two-fild-grid">
        <div className="admin-login-fild admin-login-fild3 ">
            <label htmlFor="#">Parent Category</label>
            <select
              type="text"
              name="category"
              id="productname"
              autoComplete="off"
            >
              <option value="choose">Choose Category</option>
              <option value="checkbox">Fruits</option>
              <option value="checkbox">Fish</option>
              <option value="checkbox">Vegetables</option>
              <option value="checkbox">Household tools</option>

            </select>
          </div>

          <div className="admin-login-fild admin-login-fild3 ">
            <label htmlFor="#">Sub Category</label>
            <select
              type="text"
              name="category"
              id="productname"
              autoComplete="off"
            >
              <option value="choose">Choose Sub Category</option>
              <option value="checkbox">Fish </option>
              <option value="checkbox">Meat</option>
              <option value="checkbox">Dry Fruits</option>
              <option value="checkbox">Baby Food</option>

            </select>
          </div>
        </div>

        <div className="admin-login-fild admin-login-fild3 admin-login-fild34 mt-4">
            <label>Category Images</label>
                
                <div className="right-prod-img-add-bx">
            <div className="right-prod-upload-img-bx-main">

                <input type="file" accept='image/*' multiple id='imageUpload' onChange={handleImageChange} />

                <label htmlFor="imageUpload" >
                <ion-icon name="cloud-upload-outline"></ion-icon>
                <p>Drag your images here</p>
                <span> (Only *jpeg, *webp and * png images will be accepted) </span>
                </label>
                
            </div>

            <div className="image-add-grid  ">

            {images ? <div className="upld-prod-img-bx mb-3" >
                            <img src={images} alt="" /> 
                            <button onClick={handleDeleteImage} className="delete-prod-img-bx">
                            <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>: null}
            </div>
            <div className="admin-login-fild admin-login-fild3 admin-login-fild34 mt-4">
                <label htmlFor="">Published</label>
                
            <div onClick={() => setSwitchActive(!switchActive)} className={switchActive ? "swithc-toggle-btn switchactive" : "swithc-toggle-btn"}>
        <div className="round-bx"></div>
        <span>Yes</span>
        <span>No</span>

    </div>

    </div>
            
            </div>
                </div>

          <button type="submit" className="add-prod-btn   confirm-btn">
            Add Category
          </button>

          <div onClick={onclickClose} className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminProdCategValueEdit
