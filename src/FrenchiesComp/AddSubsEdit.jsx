import React, { useState } from "react";

const AddSubsEdit = ({onclickCloseSubsPlanBx}) => {

    const [cityAmount , setCityAmount] = useState(null)
    const [wasteColectAmount , setWasteColectAmount] = useState(null)

    const handleCityChangeAmount = (e) => {

        setCityAmount( e.target.value) ;
        
    }

    const handlewastecolectChangeAmount = (e) => {

        setWasteColectAmount( e.target.value) ;
        
    }

    const calculatePrice = () => {

        const sumPrice =  Number(cityAmount) + Number(wasteColectAmount)
        return isNaN(sumPrice) ? 0 : sumPrice ;
        
    }
    
  return (
    <>
      <section className="add-work-area-edit-comp">
        <div className="add-work-area-edit-main-bx add-subs-plan">
          <h6 className="banktext">Add Subscription Plan (Add or Edit)</h6>

          <form action="#">

          <div className="addwrkarea-form-bx">
            <div className="admin-login-fild">
              <label htmlFor="planname">Plan Name</label>
              <div className="admin-login-input">
                <input
                  type="text"
                  name="planname"
                  id="planname"
                  placeholder="Enter your Plan Name"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="City">No. of Waste Collector</label>
              <div className="admin-login-input">
                <input
                  type="text"
                  name="City"
                  id="City"
                  placeholder="No. of waste collector"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <div className="admin-login-fild mt-3">
              <label htmlFor="City">Price</label>
              <div className="admin-login-input">
                <input
                  type="text"
                  name="City"
                  id="City"
                  placeholder="Total Price"
                  autoComplete="off"
                  readOnly
                  value={calculatePrice()}
                />
              </div>
            </div>

            <div className="addwrkarea-form-bx mt-3">
            <div className="admin-login-fild">
              <label htmlFor="City">City</label>
              <div className="admin-login-input">
                <input
                  type="number"
                  name="City"
                  id="City"
                  value={cityAmount}
                  onChange={handleCityChangeAmount}
                  placeholder="Enter city amount"
                  autoComplete="off"
                />
              </div>
            </div>

            <span className="add-amount"><i class="fa-solid fa-plus"></i></span>

            <div className="admin-login-fild">
              <label htmlFor="wastecolect">Waste Collector</label>
              <div className="admin-login-input">
                <input
                  type="number"
                  name="wastecolect"
                  id="wastecolect"
                  value={wasteColectAmount}
                  onChange={handlewastecolectChangeAmount}
                  placeholder="Enter waste-collector amount"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
            </form>

            
            <button className="add-work-area-btn">
                Save
            </button>

            <div onClick={onclickCloseSubsPlanBx} className="close-add-work-bx-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
      </section>
    </>
  );
};

export default AddSubsEdit;
