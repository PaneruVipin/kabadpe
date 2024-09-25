import { createContext, useState } from "react";
import MyOrderData from "./MyOrderData";

export const OrderContext  = createContext();

const OrderContextProvider  = (props) => {
    // const [orderData, setOrderData] = useState(MyOrderData);
    return (

        <OrderContext.Provider value={MyOrderData}>

            {props.children}
            
        </OrderContext.Provider>
        
    )
    
}

export default OrderContextProvider