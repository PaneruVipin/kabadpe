import React, { useState } from 'react'

const VendEditProf = ({onclickClose}) => {
    const [switchBtn , setSwitchBtn] = useState(false);
    const [tabActive , setTabActive] = useState('basic');
    const [images , setImages] = useState();

    const handleImageChange = (e) => {

        const selectedImage =  Array.from(e.target.files);
        const imageUrl =  selectedImage.map(image => URL.createObjectURL(image));
        setImages(imageUrl);
    }

    const handleDelete = () => {
        setImages() 
        
    }
    
  return (
    <>
    <section className="add-prod-comp" onClick={onclickClose}>
        
        <div className="add-prod-main-bx add-prod-main-bx42" onClick={(e) => e.stopPropagation()}>

            <div className="top-add-prod-flex-bx">

                <div className="left-add-prod-title-bx">
                    <h6>Edit Profile </h6>
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
                <input type="text" name='profilename' id='profilename' placeholder='Enter Profile Name' autoComplete='off' required  />
            </div>

          

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Profile Picture</span>
                
                <div className="right-prod-img-add-bx">
            <div className="right-prod-upload-img-bx-main">

                <input type="file" accept='image/*' multiple id='imageUpload' onChange={handleImageChange} />

                <label htmlFor="imageUpload" >
                <ion-icon name="cloud-upload-outline"></ion-icon>
                <p>Drag your images here</p>
                <span> (Only *jpeg, *webp and * png images will be accepted) </span>
                </label>
                
            </div>

           { images ? <div className="image-add-prof">

                        <div className="upld-prod-img-bx upld-prod-img-bx21" >
                            <img src={images} alt="" />
                            <button onClick={() => handleDelete()} className="delete-prod-img-bx">
                            <ion-icon name="close-outline"></ion-icon>
                            </button> 
                        </div>
                    
            </div> : null}
            
            </div>
                </div>

                
            <div className="ord-filt-bx add-prod-inpt-bx mt-5">
            <span>Email</span>
                <input type="email" name='profileemail' id='profileemail' placeholder='admin@gmail.com' autoComplete='off' required  />
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Contact Number</span>
                <input type="number" name='contnumber' id='contnumber' placeholder='Enter Phone number' autoComplete='off' required  />
            </div>

         
                
            </div>
            
            </form>
            <div className="prod-add-can-flex-btn prod-add-can-flex-btn21">
                <button className='prod-add-del-btn upld-add-prod'>Update Profile</button>
            </div>
        </div>
        
    </section>
      
    </>
  )
}

export default VendEditProf
