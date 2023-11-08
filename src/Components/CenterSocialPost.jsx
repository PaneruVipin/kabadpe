import React, { useState } from 'react'
import '../style/ChatSoclPost.css';
import '../style/SocialPost.css'
import '../style/CenterSocialPost.css'
import CenterSocialPostInfo from './CenterSocialPostInfo';


const CenterSocialPost = ({onClickCloseSocPost}) => {
 

    
    
  return (
    <>
  
        <section className="center-social-post-main-bx" >
        <section className="user-prf-parent-soc-post-chat-gpt-bx user-prf-parent-soc-post-chat-gpt-bx2">
      <div className="user-prof-right-main-bx">

        <div className="chat-message-btn-flex-bx chat-message-btn-flex-bx3">

         <div className="soc-logo soc-logo2">
          <img src="./images/customImg/nav-logo.png" alt="" />
         </div>

         

        </div>
        
    

      </div>

      <div className= "social-post soclpostactive">

<CenterSocialPostInfo  />
  
</div>

<div onClick={onClickCloseSocPost} className="close-soc-btn">
<i class="fa-regular fa-circle-xmark"></i>
</div>

</section>
</section>
    </>
  )
}

export default CenterSocialPost
