import React from 'react'

const AcceptQue = ({setAcept}) => {
  return (
    <>

    <section onClick={() => setAcept(false)} className="que-accept-dec-comp">

        <div onClick={(e) => e.stopPropagation()} className="quer-accept-dec-bx">
        <ion-icon name="shield-checkmark-sharp"></ion-icon>

        <p>You have accepted this query . We will update the requester.</p>

   
        
        </div>
        
    </section>
      
    </>
  )
}

export default AcceptQue
