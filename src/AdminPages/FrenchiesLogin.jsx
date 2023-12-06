import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FrenchiesLogin = () => {
  const [adminEmail, setAdminEmail] = useState("Type your Email or Mobile No.");
  const [adminpaswrd, setAdminPaswrd] = useState("12345");

  // frenchies singup placeholder-text
  const [frenComp, setFrenComp] = useState("Type your company name");
  const [gst, setGst] = useState("Type your GST");
  const [fullName, setFullName] = useState("Type your full name");
  const [mobNum, setMobNum] = useState("Type your phone number");
  const [emailAdd, setEmailAdd] = useState("Type your Email Id");
  const [workArea, setWorkArea] = useState("Type your Work Area");
  const [passwrd, setPasswrd] = useState("Type your Password");
  const [confPasswrd, setConfPasswrd] = useState("Type your confirm password");

  const [showPassword, setShowPassword] = useState(false);
  const [frenchiesSignup, setFrenchiesSignup] = useState(false);
  // const [signupText , setSignupText] = useState('Sign Me In');
  const [signIn, setSignIn] = useState("Sign up");
  const [frenHead, setFrenHead] = useState("Frenchies Log In");
  const [otp, setOtp] = useState(false);
  // const [thankText , setThankText] = useState(false);
  const [frencParent, setFrencParent] = useState(false);
  const [priceNum , setPriceNum] = useState(null);
  const [wasteColectPrice , setWasteColectPrice] = useState(false);
  const [chosePlan , setChosePlan] = useState(false)
  const [frenchLoginMain , setFrenchLoginMain] = useState(false);
  const [mainFrenchLogin , setMainFrenchLogin] = useState(false);

  const handleChangeFunc = function (e) {
    setAdminEmail(e.target.value);
    setFullName(e.target.value);
    setGst(e.target.value);
    setMobNum(e.target.value);
    setEmailAdd(e.target.value);
    setWorkArea(e.target.value);
    setPasswrd(e.target.value);
    setConfPasswrd(e.target.value);
  };

  const handleChangeFuncPasswrd = function (e) {
    setAdminPaswrd(e.target.value);
  };

  const frenchiesSubmitBtn = () => {
    setFrenchiesSignup(!frenchiesSignup);

    // if(signupText === 'Sign Me In'){
    //   setSignupText('Sign Me Up')
    // }else{
    //   setSignupText('Sign Me In')

    // }

    if (signIn === "Sign up") {
      setSignIn("sign In");
    } else {
      setSignIn("Sign up");
    }

    if (frenHead === "Frenchies Log In") {
      setFrenHead("Frenchies Sign Up");
    } else {
      setFrenHead("Frenchies Log In");
    }
  };

  const otpFunc = () => {
    setOtp(true);
    if (frenHead === "Frenchies Sign Up") {
      setFrenHead("OTP Verification");
    } else {
      setFrenHead("Frenchies Sign Up");
    }
  };

  const verifOtp = () => {
    setChosePlan(true)
    setFrenchLoginMain(true)
  };

  const btnValue = (priceValue) => {

      setPriceNum(priceValue)
    
  }

  const payFunc = () => {

    setMainFrenchLogin(true)

    
  }

  return (
    <>
    <main className={mainFrenchLogin ? "french-login-main mainfrenchloginactive" : "french-login-main"}>

      <section className={frenchLoginMain ?  "admin-login-comp admin-login-comp2 frenchLoginActive" : "admin-login-comp admin-login-comp2"}>
        <div
          className={
            frencParent
              ? "frenchies-login-parent-box frencparentactive"
              : "frenchies-login-parent-box"
          }
        >
          

          <div
            className={otp ? "admin-login-main otpactive" : "admin-login-main"}
          >
            <div className="admin-login-img">
              <img src="./images/customImg/nav-logo.png" alt="" />
            </div>

            <p> {frenHead} </p>

            <div className="verify-otp-box">
              <form action="#">
                <div className="admin-login-fild">
                  <label htmlFor="Company_Name">OTP Verification</label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      placeholder=""
                      autoComplete="off"
                    />
                  </div>
                </div>
              </form>

              <button
                onClick={() => verifOtp()}
                className="admin-form-btn mt-5"
              >
                Verifi OTP
              </button>
            </div>

            <form
              action="#"
              className={
                frenchiesSignup
                  ? "frenchiessingup frencactive"
                  : "frenchiessingup"
              }
            >
              <div className="frenchies-singup-box">
                <div className="admin-login-fild">
                  <label htmlFor="Company_Name">Company Name</label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder=""
                      value={frenComp}
                      onChange={handleChangeFunc}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="admin-login-fild">
                  <label htmlFor="gst">GST (Optional) </label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="gst"
                      id="gst"
                      placeholder=""
                      value={gst}
                      onChange={handleChangeFunc}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="admin-login-fild">
                  <label htmlFor="fulname">Full Name </label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="fulname"
                      id="fulname"
                      placeholder=""
                      value={fullName}
                      onChange={handleChangeFunc}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="admin-login-fild">
                  <label htmlFor="mobnum">Mobile Number </label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="mobnum"
                      id="mobnum"
                      placeholder=""
                      value={mobNum}
                      onChange={handleChangeFunc}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="admin-login-fild">
                  <label htmlFor="Id">Email Id </label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="Id"
                      id="Id"
                      placeholder=""
                      value={emailAdd}
                      onChange={handleChangeFunc}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="admin-login-fild">
                  <label htmlFor="areawork">Area Of Work </label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="areawork"
                      id="areawork"
                      placeholder=""
                      value={workArea}
                      onChange={handleChangeFunc}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="admin-login-fild">
                  <label htmlFor="password">Password </label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder=""
                      value={passwrd}
                      onChange={handleChangeFunc}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="admin-login-fild">
                  <label htmlFor="confpassword">Confirm Password </label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="confpassword"
                      id="confpassword"
                      placeholder=""
                      value={confPasswrd}
                      onChange={handleChangeFunc}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>

              <div className="admin-login-form">
                <div className="admin-login-fild">
                  <label htmlFor="email">Email / Mobile No.</label>
                  <div className="admin-login-input">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=""
                      value={adminEmail}
                      onChange={handleChangeFunc}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="admin-login-fild">
                  <label htmlFor="email">Password</label>
                  <div className="admin-login-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder=""
                      value={adminpaswrd}
                      onChange={handleChangeFuncPasswrd}
                      autoComplete="off"
                    />

                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="view-eye-btn"
                    >
                      {showPassword ? (
                        <i class="fa-regular fa-eye"></i>
                      ) : (
                        <i class="fa-regular fa-eye-slash"></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-check2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember my preference
                </label>
              </div>

              <NavLink to="/forgotpassword">
                {" "}
                <button className="admin-forgot-passwrd-btn">
                  Forgot Password ?
                </button>
              </NavLink>

              <button className="admin-form-btn admin-form-btn2 admin-form-btn3">
                Sign Me In
              </button>
              <button
                onClick={() => otpFunc()}
                className="admin-form-btn admin-form-btn2 admin-form-btn4"
              >
                Sign Me Up
              </button>
            </form>

            <p className="signuptext">
              Don't have an account ?{" "}
              <a href="#" onClick={() => frenchiesSubmitBtn()}>
                {signIn}
              </a>{" "}
            </p>
          </div>
        </div>

        <div className={chosePlan ? "choose-your-plan-main-bx choseplanactive" : "choose-your-plan-main-bx"}>
          <h6>Choose Your Plan</h6>

          <div className="chose-plan-flex-bx">
            <button onClick={() => setWasteColectPrice(!wasteColectPrice)}>Monthly</button>
            <button onClick={() => setWasteColectPrice(!wasteColectPrice)}>Quaterly</button>
            <button>Variable</button>
          </div>

          <div className={wasteColectPrice ? "numbr-wast-colect-bx numbwasteactive" : "numbr-wast-colect-bx"}>
            <p>Number of Waste Collector</p>

            <div className="waste-colect-btn">
              <button onClick={() => btnValue('1')}> 5 </button>
              <button onClick={() => btnValue('2')}> 10 </button>
              <button onClick={() => btnValue('3')}>1 5 </button>
            </div>


            <div className="price-show-bx">

              {priceNum === '1' ? <p>Price : <span>₹215</span> </p> : null}
              {priceNum === '2' ? <p>Price : <span>₹300</span> </p> : null}
              {priceNum === '3' ?  <p>Price : <span>₹425</span> </p> : null }

              
            </div>


            
          </div>

          <button onClick={() => payFunc()} className="pay-nw-btn submit-btn">
            Pay Now
          </button>
          
        </div>

        <div className="thank-u-box">
            <div className="thank-u-gif">
              <img src="./images/customImg/happy.gif" alt="" />
            </div>

            <p>
              Thank You, Your application has been submitted, We will check and
              confirm via email or SMS.
            </p>

            <span className="dashb-btn"> See You Soon </span>
          </div>
      </section>
      </main>
    </>
  );
};

export default FrenchiesLogin;
