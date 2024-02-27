import React, { useState } from 'react'
import WalletCreditPopup from '../Components/WalletCreditPopup';

const UpdateWalet = ({onClickClose}) => {
    
  return (
    <>

    <section className="update-walet-credit-comp" onClick={onClickClose}>

        <div className="updte-walet-credit-bx" onClick={(e) => e.stopPropagation()}>
            <h6 className="text-center">Wallet Limit</h6>
            <div className="amnt-fild-bx">
                <label htmlFor="#">User</label>
                <input type="text" name='useramount' id='useramount' placeholder='User Amount...'  />
            </div>

            <div className="amnt-fild-bx">
                <label htmlFor="#">Worker</label>
                <input type="text" name='workeramount' id='workeramount' placeholder='Worker Amount...'  />
            </div>

            <div className="amnt-fild-bx">
                <label htmlFor="#">Frenchies</label>
                <input type="text" name='frenchiesamount' id='frenchiesamount' placeholder='Frenchies Amount...'  />
            </div>


            <p>Note :  <span>This will give wallet credit to your users at the time of registration, please check carefully and update as per your convenience or requirements.
</span></p>


            <button onClick={onClickClose} className="tranfer-btn tranfer-btn5 mt-3 mx-auto d-flex justify-content-center align-items-center">
                    Confirm
                </button>
        </div>
        
    </section>


      
    </>
  )
}

export default UpdateWalet
