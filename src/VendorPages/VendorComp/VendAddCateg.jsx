import React, { useState } from 'react'

const VendAddCateg = ({onClickClose}) => {
    const [switchBtn , setSwitchBtn] = useState(false);
    const [tabActive , setTabActive] = useState('basic');
    const [images , setImages] = useState([]);

    const handleImageChange = (e) => {

        const selectedImage =  Array.from(e.target.files);
        const imageUrl =  selectedImage.map(image => URL.createObjectURL(image));
        setImages([...images, ...imageUrl]);
    }

    const handleDeleteImage = (index) => {
        const updatedImage =  [...images];
        updatedImage.splice(index , 1);
        setImages(updatedImage);
        
    }
    
  return (
    <>
    <section className="add-prod-comp" onClick={onClickClose}>
        
        <div className="add-prod-main-bx add-prod-main-bx21" onClick={(e) => 
            e.stopPropagation()}>

            <div className="top-add-prod-flex-bx">

                <div className="left-add-prod-title-bx">
                    <h6>Update Category </h6>
                    <p>Updated your Product category and necessary information from here</p>
                </div>

                <div className="right-lang-sel-bx-flex">

                    <div onClick={onClickClose} className="add-prod-close-btn">
                    <ion-icon name="close-outline"></ion-icon>
                    </div>
                    
                </div>
                
            </div>


         

        <form action="" className="add-prod-form-main">

            <div className="add-product-form-bx">

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Name</span>
                <input type="text" name='producttitle' id='producttitle' placeholder='Fish & Meat' autoComplete='off' required  />
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx  add-prod-desc-bx">
            <span>Description</span>
            <textarea name="desc" id="desc" cols="30" rows="3" placeholder='Fish & Meat' autoComplete='off' required></textarea>
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Category Images</span>
                
                <div className="right-prod-img-add-bx">
            <div className="right-prod-upload-img-bx-main">

                <input type="file" accept='image/*' multiple id='imageUpload' onChange={handleImageChange} />

                <label htmlFor="imageUpload" >
                <ion-icon name="cloud-upload-outline"></ion-icon>
                <p>Drag your images here</p>
                <span> (Only *jpeg, *webp and * png images will be accepted) </span>
                </label>
                
            </div>

            <div className="image-add-grid">
                {images.map((imgUrl,indx) => {

                    return (
                        <>
                        <div className="upld-prod-img-bx" key={indx}>
                            <img src={imgUrl} alt="" />
                            {indx === 0 ? <p>Default Image</p> : null }
                            <button onClick={() => handleDeleteImage(indx)} className="delete-prod-img-bx">
                            <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                        </>
                    )
                    
                })}
            </div>
            
            </div>
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

export default VendAddCateg
