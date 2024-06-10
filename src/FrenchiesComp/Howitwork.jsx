import React from 'react'

const Howitwork = ({onClickClose}) => {
  return (
    <>

    <section onClick={onClickClose} className="how-it-work-comp">

        <div className="howit-work-img-bx" onClick={(e) => e.stopPropagation()}>
            <img src="/images/customImg/how-it-works.jpg" alt="" />
        </div>

        
    </section>
      
    </>
  )
}

export default Howitwork
