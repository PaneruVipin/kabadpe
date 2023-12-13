import React, { useState } from 'react'

const CompltProfPopup = ({onclickRedirectDetPage}) => {
    const [compltProfpopUp , setCompltProfPopup] = useState(null);

    const detPageFunc = () => {

        setCompltProfPopup(false)
        
    }
    
  return (
    <>
        <div className={compltProfpopUp === false ? "complt-prof-popup-bx disablePopup" : "complt-prof-popup-bx"}>

<div className="complt-prof-popup">
  <h6>Complete your profile Detail</h6>

  <button className="edit-prof-btn5" onClick={() => {onclickRedirectDetPage() , detPageFunc()} } >
    Edit Profile
  </button>
  
</div>

</div>
    </>
  )
}

export default CompltProfPopup
