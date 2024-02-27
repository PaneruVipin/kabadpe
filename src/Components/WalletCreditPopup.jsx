import React from 'react'

const WalletCreditPopup = ({onclickClosePopup}) => {
  return (
    <>
      <section className="update-walet-credit-comp walet-credit-comp" onClick={onclickClosePopup}>
        <div className="updte-walet-credit-bx walet-credit-bx" onClick={(e) => e.stopPropagation()}>
        <h6 className="text-center">Wallet Credit</h6>

        <div className="amnt-fild-bx mt-4 mb-3">
                <input type="text" name='useramount' id='useramount' placeholder='Type User ID or Mobile No.'  />
            </div>

            <div className="walet-credit-two-bx">

                <div className="walet-credit-bx">
                    <span>User Name</span>
                    <div className="username-bx">
                        <span>Faiz</span>
                    </div>
                </div>

                <div className="walet-credit-bx">
                    <span>User Type</span>
                    <div className="username-bx">
                        <span>User</span>
                    </div>
                </div>
                
            </div>

            <div className="amnt-fild-bx mt-4">
                <label htmlFor="#">Wallet Eco Points</label>
                <input type="text" name='ecopoints' id='ecopoints' placeholder='Coins'  />
            </div>

            <p>Note :  <span>This will give wallet credit to your users at the time of registration, please check carefully and update as per your convenience or requirements.
</span></p>
            
            <button onClick={onclickClosePopup} className="tranfer-btn tranfer-btn5 mt-3 mx-auto d-flex justify-content-center align-items-center">
                    Apply
                </button>
        </div>
      </section>
    </>
  )
}

export default WalletCreditPopup
