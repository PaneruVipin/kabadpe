import React, { useRef } from 'react'
import '../style/ReferEarn.css';
import "../style/Profile.css";
import "../style/BankCard.css";
const ReferEarn = () => {
    const selectTextRef =  useRef(null);

    const handleCopy = () => {

        const range = document.createRange();
        range.selectNode(selectTextRef.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    
        // Copy the selected text to the clipboard
        document.execCommand('copy');
    
        // Deselect the text
        window.getSelection().removeAllRanges();
        
    }
    
  return (
    <>

    <section className="user-prof-grid-comp referearn-comp">

        <div className="refrearn-grd-bx">

            <div className="left-refer-earn-bx">

        <div className="referral-link-box">

          

            <div className="refer-table">
            
            <div className="refrl-title-bx">
            <h4>My Referrals</h4>

            <div className="refrl-balance-box">
              <p>Total Balance</p>
              <div className="balance-box">
                <div className="rupes-icon">
                ₹
                </div>
                <span>500.00</span>
              </div>
            </div>
            </div>

            <div className="bank-card-table refernearn-table">
              <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Total Cost</th>
                <th>Earn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Harshit</td>
                <td>5000</td>
              <td>3000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Harshit</td>
                <td>5000</td>
              <td>3000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Harshit</td>
                <td>5000</td>
              <td>3000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Harshit</td>
                <td>5000</td>
              <td>3000</td>
              </tr>
            </tbody>
              </table>
          </div>

          </div>

            </div>

            </div>

            <div className="right-qr-box">

            <div className="right-qr-code-img">
                <img src="./images/customImg/qrcode.png" alt="" />

                <div className="referall-code-box">
                  <h6>Refer and earn</h6>
                  <p>You are on the journey of becoming eco-friendly . Now, invite your friends to join the movement and earn rewards together.</p>
                  {/* <p></p> */}
                </div>

                <button className="share-dwnload-link">
                  Share download link
                  <i class="fa-solid fa-share-nodes"></i>
                </button>
                
            </div>

            <div className="share-referral-friend-box">

              <div className="share-referral-friend-text-box">

                <p>Refer to your friend and when they complete their first pickup you win ₹50 . </p>


                <p>The more referrals , the more you earn !</p>

                <div className="progress-bar-box"></div>
                
              </div>
              
            </div>


            </div>
            
        </div>
            
    </section>
      
    </>
  )
}

export default ReferEarn
