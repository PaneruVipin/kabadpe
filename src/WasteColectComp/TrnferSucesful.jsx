import React from 'react'

const TrnferSucesful = ({onclickTrnferDet}) => {
  return (
    <>
        <section className="sucesfuly-trnsctin-comp" >

<div className="sucesfuly-trnsctin-box">
    <div className="check-bx">
    <i class="fa-solid fa-check fa-fw"></i>
    </div>

    <p>Tranfer Successfully at 03:15PM on 19 Feb 2024.</p>
    <h6>Transaction ID: T230989570970474</h6>

    
    <button onClick={onclickTrnferDet}  className="tranfer-btn tranfer-btn5 mt-4">
            View Details
        </button>
    
</div>

</section>
    </>
  )
}

export default TrnferSucesful
