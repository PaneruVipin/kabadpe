import React, { useState } from "react";
import IndPlanForm from "./IndPlanForm";
import MonthlyPlan from "./MonthlyPlan";
import QuaterPlan from "./QuaterPlan";

const ForIndividuals = ({onSwitch , onactive , onSwitchPrev}) => {
    const [indPlanForm , setIndPlanForm] = useState(null);
    const [monthlyPlan, setMonthlyPlan] = useState(null);
    const [quaterPlan, setQuaterPlan] = useState(null);



  return (
    <>
      <section className="add-work-comn-comp">
        <div className="add-work-btn-flex-bx">
          <h6 className="banktext mb-0">Subscriptions Plans</h6>

        

          <div className="for-french-indi-flex-btn">
            <button
              className={
                onactive === "addsubscription"
                  ? "switch-btn switchactive"
                  : "switch-btn "
              } onClick={onSwitchPrev}
              
            >
              For Frenchies
            </button>

            <button
              className={
                onactive === "individuals"
                  ? "switch-btn switchactive"
                  : "switch-btn "
              }
              onClick={onSwitch}
            >
              For Individuals
            </button>
          </div>

         
        </div>

        <div className="all-user-table add-wrk-table">
            <table>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>Plan Name</th>
                        <th>Fixed Price</th>
                        <th>Comission Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>Plan A Name</span>
                        </td>
                        <td>
                            <span>₹300 <span className="mini-text">/week</span> </span>
                        </td>
                        <td>
                        <span> ₹2 <span className="plus-sign">+</span> 2.5%<span className="mini-text">(weekly)</span></span>
                        </td>
                        <td>
                            <div className="edit-remv-btns">
                                <button onClick={() => setIndPlanForm(true)}>Edit</button>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span>2</span>
                        </td>
                        <td>
                            <span>Plan B Name</span>
                        </td>
                        <td>
                            <span>₹300<span className="mini-text">/monthly</span></span>
                        </td>
                        <td>
                        <span> ₹5 <span className="plus-sign">+</span> 2.5%<span className="mini-text">(monthly)</span></span>
                        </td>
                        <td>
                            <div className="edit-remv-btns">
                                <button onClick={() => setMonthlyPlan(true)}>Edit</button>
                            </div>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <span>3</span>
                        </td>
                        <td>
                            <span>Plan C Name</span>
                        </td>
                        <td>
                            <span>₹300<span className="mini-text">/quaterly</span></span>
                        </td>
                        <td>
                            <span> ₹7 <span className="plus-sign">+</span> 2.5%<span className="mini-text">(quaterly)</span></span>
                        </td>
                        <td>
                            <div className="edit-remv-btns">
                                <button onClick={() => setQuaterPlan(true)}>Edit</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
       
      </section>

      { indPlanForm ? (

      <IndPlanForm onClickClose={() => setIndPlanForm(null)} /> 
      ) : null 
       }

{ monthlyPlan ? (

<MonthlyPlan onClickCloseMonthly={() => setMonthlyPlan(null)} /> 
) : null 
 }

{ quaterPlan ? (

<QuaterPlan onClickCloseQuaterly={() => setQuaterPlan(null)} /> 
) : null 
 }

    </>
  );
};

export default ForIndividuals;
