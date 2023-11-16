import React, { useRef, useState } from 'react'
import '../style/Blogpost.css'
import JoditEditor from 'jodit-react';


const BlogPostEdit = ({onclickPostNone}) => {
    const editor = useRef(null);
    const [postImg , setPostImg] = useState('');
	const [content, setContent] = useState('');
    const [showText , setShowText] =  useState(false);

    const handleImageChange = (e) => {

        const file = e.target.files[0];
        if(file){

            const reader =  new FileReader();
            reader.onload = (event) => {
                setPostImg(event.target.result);

            };
            reader.readAsDataURL(file);
            
        }
        
    }
    
    const showTextFunc = function() {

            setShowText(true)
        
    }

    setTimeout(() => {
        setShowText(false)
        
    }, 3000);

  return (
    <>

    <section className="post-popup-comp ">
        <div className="post-edit-main-box">
            <h6>POST</h6>

            <div className="post-fields-box">

                <div className="p-inpt-box">
                    <label htmlFor="Title">Title</label>
                    <input type="text"name='title' id='title' autoComplete='off' required />
                </div>


            

                <div className="p-inpt-box">
                    <label htmlFor="description">Description</label>
                    <div className="text-editor-bx-blog">
                <JoditEditor 
                    ref={editor}
                    value={content}
                    onChange={newContent => {setContent(newContent)}}
                    
                />
   </div>
                </div>  

                
                <div className="post-img-flex-box">

                <div className="post-image-box">
              
                    <div className="post-img-inpt">
                    <label htmlFor="post_img">Attach Image</label>
                    <input type="file" accept='image/*' onChange={handleImageChange} name='post_img' id='post_img' />
                    </div>

                    <button onClick={showTextFunc} className="post-now-btn">
                    Post Now
                </button>

                <div className="show-text">
                {showText && (
                    <p>Thank You For Submiting Blog, It Will Refrect After Admin Confirmation.</p>
                )}
                </div>
                  
                </div>

                

                <div className="post-img">
                            {postImg && (
                            <img src={postImg} alt="" />
                                
                            )}
                    </div>
                    
                </div>

              
                </div>

                <div onClick={onclickPostNone} className="close-post">
                <i class="fa-solid fa-xmark"></i>
                </div>
                
            </div>
            
    </section>
      
    </>
  )
}

export default BlogPostEdit
