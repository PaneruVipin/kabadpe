import React, { useContext, useState } from "react";
import { OrderContext } from "../Context";
import { NavLink } from "react-router-dom";
import MyOrderDet from "./MyOrderDet";

const MyOrder = () => {

    const MyOrderData = useContext(OrderContext);
    const [component , setComponent] = useState(null);

    const openComp = (id) => {
            setComponent(id)
    }
    
  return (
    <>
     {component === null ? <section className="my-offer-comp my-order-comp use-prf-left-main-bx">
        <div className="my-order-data-list-bx">

            {MyOrderData.map((curData,id) => (
                <div onClick={() => openComp(curData.id)} className="order-data-bx" key={curData.id}>
                    <div className="left-order-name-img-bx">
                        <div className="order-img-bx">
                            <img src={curData.img} alt="" />
                        </div>
                        <h6> {curData.name} </h6>
                    </div>

                    <div className="center-prod-order-price">
                        <h5> ₹{curData.price} </h5>
                    </div>

                    <div className="right-delivery-type-bx">
                      
                        <h6> {curData.status}
                        <div className="dottype" 
                        style={{ backgroundColor : curData.type === 'delivered' ? '#0dd60d' : curData.type === 'underprocess' ?  '#e0e000' : curData.type === 'canceled' ? 'red' :  curData.type === 'refund' ? 'orange' : curData.type === 'dispatch' ? "#0dd60d" : 'red'  }}
                        ></div> </h6>
                        <span> {curData.text} </span>
                    </div>
                    
                </div>
                
            ))}
            
        </div>
      </section> : null}

      {component !== null && (
        <MyOrderDet orderData={MyOrderData.find((e) => e.id === component)} /> 
      )}
      
    </>
  );
};

export default MyOrder;
