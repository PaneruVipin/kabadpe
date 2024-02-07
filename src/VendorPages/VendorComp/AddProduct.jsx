import React, { useState } from 'react'

const AddProduct = () => {
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
    <section className="add-prod-comp">
        
        <div className="add-prod-main-bx">

            <div className="top-add-prod-flex-bx">

                <div className="left-add-prod-title-bx">
                    <h6>Add Product </h6>
                    <p>Add your product and necessary information from here</p>
                </div>

                <div className="right-lang-sel-bx-flex">

                    <div className="lang-sel-bx">
                        <select name="lang" id="lang">
                            <option value="lang">en</option>
                            <option value="lang">vi</option>
                            <option value="lang">hi</option>
                            <option value="lang">ne</option>
                            <option value="lang">bn</option>
                            <option value="lang">de</option>
                            <option value="lang">es</option>



                        </select>
                    </div>

                    <div className="add-prod-close-btn">
                    <ion-icon name="close-outline"></ion-icon>
                    </div>
                    
                </div>
                
            </div>

            <div className="right-prod-varient-switch-bx">
                    <span>Does this product have variants?</span>

                    <div onClick={() => setSwitchBtn(!switchBtn)} className={switchBtn ? "switch-btn-v switchBtnactive" : "switch-btn-v"}>
                <div className="pin"></div>
                <p className='yes-text'>Yes</p>
                <p>No</p>
                    </div>
                    
                </div>

            <div className="add-prod-tab-flex-bx">

                <div className="left-add-prod-tab-main">

                        <button onClick={() => setTabActive('basic')} className={ tabActive === 'basic' ? 'tab-add-prod tabactive' : 'tab-add-prod'}>Basic Info</button>
                        <button onClick={() => setTabActive('combination')}  style={{ display : switchBtn ? 'block' : 'none' }} className={ tabActive === 'combination' ? 'tab-add-prod tabactive' : 'tab-add-prod'}>Combination</button>
                    
                </div>

               
                
            </div>

        <form action="" className="add-prod-form-main">

            <div className="add-product-form-bx">

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Product Title/Name</span>
                <input type="text" name='producttitle' id='producttitle' placeholder='Product Title/Name' autoComplete='off' required  />
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx  add-prod-desc-bx">
            <span>Product Description</span>
            <textarea name="desc" id="desc" cols="30" rows="3" placeholder='Product Description' autoComplete='off' required></textarea>
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Product Images</span>
                
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

                
            <div className="ord-filt-bx add-prod-inpt-bx mt-5">
            <span>Product SKU</span>
                <input type="text" name='productsku' id='productsku' placeholder='Product SKU' autoComplete='off' required  />
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Product Barcode</span>
                <input type="text" name='productbarcode' id='productbarcode' placeholder='Product Barcode' autoComplete='off' required  />
            </div>

            
            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Product Price</span>
            <div className="prod-price-bx">
                <input type="text" name='price' id='price' placeholder='0' autoComplete='off' required  />
                <span>₹</span>
                </div>
            </div>

               
            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Sale Price</span>
            <div className="prod-price-bx">
                <input type="text" name='saleprice' id='saleprice' placeholder='0' autoComplete='off' required  />
                <span>₹</span>
                </div>
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Product Quantity</span>
                <input type="text" name='prodquantity' id='prodquantity' placeholder='0' autoComplete='off' required  />
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Product Slug</span>
                <input type="text" name='slug' id='slug' placeholder='Product Slug' autoComplete='off' required  />
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Product Tags</span>
                <input type="text" name='slug' id='slug' placeholder='Product Tag (Write then press enter to add new tag) ' autoComplete='off' required  />
            </div>
                
            </div>
            

            <div className="prod-add-can-flex-btn">
                <button className='prod-add-del-btn upld-can-prod'>Cancel</button>
                <button className='prod-add-del-btn upld-add-prod'>Add Product</button>
            </div>
            
            </form>
            
        </div>
        
    </section>
      
    </>
  )
}

export default AddProduct
