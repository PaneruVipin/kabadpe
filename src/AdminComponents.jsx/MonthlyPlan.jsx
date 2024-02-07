import React from 'react'

const MonthlyPlan = ({onClickCloseMonthly}) => {
  return (
    <>

    <section className="indi-plan-form-comp" onClick={onClickCloseMonthly}>

        <div className="ind-plan-form-main" onClick={(e) => e.stopPropagation()}>
            <h3>Plan For Individual</h3>

            <form action="#">

                
            <div className="ind-plan-form-bx">

<div className="admin-login-fild">
        <label htmlFor="planname">Plan B (Monthly) </label>
        <div className="admin-login-input">
          <input
            type="text"
            name="planeName"
            id="planname"
            placeholder="Enter  Plan  Name"
            autoComplete="off"
       
          />
        </div>
      
      </div>

      <div className="admin-login-fild">
        <label htmlFor="planname">Fixed</label>
        <div className="input-parent-bx">
        <div className="admin-login-input">
          <input
            type="text"
            name="planeName"
            id="planname"
            placeholder="Enter Fixed Price"
            autoComplete="off"
       
          />
        </div>
        <span>₹/Lead</span>
        </div>
      </div>

      <div className="admin-login-fild">
        <label htmlFor="planname">Comission</label>
        <div className="input-parent-main-grid">
        <div className="input-parent-bx input-parent-bx2">
        <div className="admin-login-input">
          <input
            type="text"
            name="planeName"
            id="planname"
            placeholder="Enter ₹"
            autoComplete="off"
       
          />
        </div>
        <span>₹</span>
        </div>

        <div className="plus">
        <i class="fa-solid fa-plus"></i>
        </div>

        <div className="input-parent-bx input-parent-bx2">
        <div className="admin-login-input">
          <input
            type="text"
            name="planeName"
            id="planname"
            placeholder="Enter %"
            autoComplete="off"
       
          />
        </div>
        <span>%</span>
        </div>
      </div>
      </div>
      </div>

{/* 
                      




      <div className="ind-plan-form-bx">

<div className="admin-login-fild">
        <label htmlFor="planname">Plan C</label>
        <div className="admin-login-input">
          <input
            type="text"
            name="planeName"
            id="planname"
            placeholder="Enter  Plan  Name"
            autoComplete="off"
       
          />
        </div>
      
      </div>

      <div className="admin-login-fild">
        <label htmlFor="planname">Fixed</label>
        <div className="input-parent-bx">
        <div className="admin-login-input">
          <input
            type="text"
            name="planeName"
            id="planname"
            placeholder="Enter Fixed Price"
            autoComplete="off"
       
          />
        </div>
        <span>₹/Lead</span>
        </div>
      </div>

      <div className="admin-login-fild">
        <label htmlFor="planname">Comission</label>
        <div className="input-parent-main-grid">
        <div className="input-parent-bx input-parent-bx2">
        <div className="admin-login-input">
          <input
            type="text"
            name="planeName"
            id="planname"
            placeholder="Enter ₹"
            autoComplete="off"
       
          />
        </div>
        <span>₹</span>
        </div>

        <div className="plus">
        <i class="fa-solid fa-plus"></i>
        </div>

        <div className="input-parent-bx input-parent-bx2">
        <div className="admin-login-input">
          <input
            type="text"
            name="planeName"
            id="planname"
            placeholder="Enter %"
            autoComplete="off"
       
          />
        </div>
        <span>%</span>
        </div>
      </div>
      </div>
      </div>
                     */}
                <button  className="add-work-area-btn">
                     Done
                    </button>
            </form>
            
        </div>
        
    </section>
      
    </>
  )
}

export default MonthlyPlan
