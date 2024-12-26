import React from "react";

const VendSubscription = () => {
  const plans = [
    {
      id: 1,
      planType: "Basic Plan",
      price: 0,
      planList: [
        "Subscription Duration - 3 months",
        "Query Limit - upto 5/month",
        "Bulk Order Management",
        "Priority Support",
      ],
      PS: false,
    },

    {
      id: 2,
      planType: "Standard Plan",
      price: 999,
      planList: [
        "Subscription Duration - 3 months",
        "Query Limit - upto 15/month",
        "Bulk Order Management",
        "Priority Support",
      ],
      PS: true,
    },

    {
      id: 3,
      planType: "Premium Plan",
      price: 3499,
      planList: [
        "Subscription Duration - 1 year",
        "Query Limit - Unlimited",
        "Bulk Order Management",
        "Priority Support",
      ],
      PS: true,
    },
  ];

  return (
    <>
      <section className="vend_subsc_comp">
        <div className="subsc-text-bx">
          <h3>Choose your plan</h3>


           <button className="filt-ord-btn exp-btn">
           Expires on 2025-01-26
              </button>
        </div>

        <div className="subsc-grid-bx ">
          {plans.map((curData, id) => (
            <div className="subsc-bx" key={curData.id}>
              <span> {curData.planType} </span>

              <h4>
                ₹{curData.price} <span>/Quater</span>{" "}
              </h4>

              <div className="planLists">
                {curData.planList.map((curElem,index) => (
                    <li>
                        {index === curData.planList.length - 1 && (
                            curData.PS ? <ion-icon style={{color : "#0c990c"}} name="checkmark-outline"></ion-icon> : <ion-icon  style={{color : "#ff0000"}} name="close-outline"></ion-icon>

                        )}
                        {index  === curData.planList.length - 1 ? null : <ion-icon style={{color : "#0c990c"}} name="checkmark-outline"></ion-icon>}
                        {curElem}
                    </li>
                ))}
              </div>

              <button className="filt-ord-btn subsc-btn">
                {id === plans.length - 3 ? "Subscribed" : id === plans.length - 2 ?    "Expired" : "Subscribe"}
              </button>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default VendSubscription;
