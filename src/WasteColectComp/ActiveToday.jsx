import React, { useEffect, useRef } from 'react'

const ActiveToday = ({onclickClose , todayTrue}) => {

  const todayRef = useRef(null);


  useEffect(() => {

    const handleClickOutside = (event) => {

      if(todayRef.current && !todayRef.current.contains(event.target)){
        onclickClose()
      }
    
  }

    if(todayTrue){
      document.addEventListener("mousedown", handleClickOutside)
    }else{
      document.removeEventListener("mousedown", handleClickOutside)

    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
      
  }, [todayTrue])
  
  return (
    <>

    <section className="comn-popup-comp">

        <div className="comn-popup-bx" ref={todayRef}>

            <h6>Mark you are working today .</h6>

            <button onClick={onclickClose} className="popup-action-btn">
                Confirm
            </button>

            <div onClick={onclickClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
            
        </div>
        
    </section>
      
    </>
  )
}

export default ActiveToday
