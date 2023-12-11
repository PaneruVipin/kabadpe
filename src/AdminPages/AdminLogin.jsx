import React, { useState } from 'react'

const AdminLogin = () => {

  const [adminEmail , setAdminEmail] = useState("hello@example.com");
  const [adminpaswrd , setAdminPaswrd] = useState("12345");
  const [showPassword , setShowPassword] = useState(false);

  const handleChangeFunc = function(e){

    setAdminEmail(e.target.value)
    
  }

  const handleChangeFuncPasswrd = function(e){

    setAdminPaswrd(e.target.value)
    
  }
  

  
  return (
    <>

    <section className="admin-login-comp">

      <div className="admin-login-main admin-login-main-loginonly ">

        <div className="admin-login-img">
          <img src="./images/customImg/nav-logo.png" alt="" />
        </div>

        <p>Sign in your account</p>

          <form action="#">

          <div className="admin-login-form">

            <div className="admin-login-fild">
              <label htmlFor="email">Email</label>
              <div className="admin-login-input">
                <input type="email" name='email' id='email' placeholder='' value={adminEmail} onChange={handleChangeFunc} autoComplete='off' />
              </div>
            </div>


            <div className="admin-login-fild">
              <label htmlFor="email">Password</label>
              <div className="admin-login-input">
                <input type={showPassword ? "text" : "password"} name='password' id='password' placeholder='' value={adminpaswrd} onChange={handleChangeFuncPasswrd} autoComplete='off' />

                <div onClick={() => setShowPassword(!showPassword)} className="view-eye-btn">

                  { showPassword ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i> }
                  
                </div>
                
              </div>
            </div>

            

        </div>

            <div class="form-check2">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      <label class="form-check-label" for="flexCheckDefault">
        Remember my preference
      </label>
    </div>


    <button className="admin-forgot-passwrd-btn">
      Forgot Password ?
    </button>

        
            
          </form>

          <button className="admin-form-btn">
            Sign Me In
          </button>
          
      </div>
      
    </section>
      
    </>
  )
}

export default AdminLogin
