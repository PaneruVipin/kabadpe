import React, { useState } from 'react'
import AcceptQue from './AcceptQue'
import DecQue from './DecQue';

const VendViewModal = ({queModal , setQueModal}) => {
    const [acept , setAcept] = useState(false);
    const [dec , setDec] = useState(false);

    const querTableData = [

        {
            id : 1,
            req : '2000 (Qty)',
            oferPrice : 100,
            cust : "Yes",
            custPrice : 5,
            delTime : "10",
            shipCharge : 500,
            Amnt : '1,00,000',
        },

        {
            id : 2,
            req : '1000 (Qty)',
            oferPrice : 200,
            cust : "Yes",
            custPrice : 10,
            delTime : "08",
            shipCharge : 500,
            Amnt : '2,00,000',
        },
        


        
      ]
    
  return (
    <>
      <section onClick={() => setQueModal(false)} className={queModal ? "vendQue-modal modalActive" : "vendQue-modal"}>

        <div onClick={(e) => e.stopPropagation()} className="quer-popup-bx">
        <button onClick={() => setQueModal(false)} className='close-que-btn' >
        <ion-icon name="close-circle-outline"></ion-icon>
        </button>
            <h4>Query</h4>

            <div className="quer-info-det-bx">

                <h6>Product Name : <span>Product 1</span></h6>

                <h5>Query From</h5>

                <h6>Name : <span>Nawaz Akhtar</span></h6>
                <h6>Organization Name : <span>Extra Frames</span></h6>
                <h6>Organization Address : <span>65A street No.4 Kundan Nagar Laxmi Nagar Delhi-92</span></h6>
                <h6>Contact No. : <span>+91 9971464758</span></h6>
                
            </div>


 <div className="all-user-table vend-que-table vend-que-table2">
        <table>
            <thead>
                <tr>
                    <th>Requirement</th>
                    <th>Offer Price</th>
                    <th>Customization</th>
                    <th>Custom Price</th>
                    <th>Delivery Time</th>
                    <th>Shipment Charges</th>
                    <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
             {querTableData.map((curData,id) => {
                return (
                    <>
                      <tr key={id}>
                    <td>
                        <span> {curData.req} </span>
                    </td>
                    <td>
                        <span> ₹{curData.oferPrice}/pcs. </span>
                    </td>
                    <td>
                        <span> {curData.cust} </span>
                    </td>
                    <td>
                        <span> ₹{curData.custPrice}/pcs. </span>
                    </td>
                    <td>
                        <span> {curData.delTime} days </span>
                    </td>
                    <td>
                        <span> ₹{curData.shipCharge} </span>
                    </td>
                    <td>
                        <span> ₹{curData.Amnt} </span>
                    </td>
                </tr>
                    </>
                )
             })}
            </tbody>
        </table>
    </div>

    <div className="attach-img-bx">
        <h6>Attachment</h6>
             <div className="attach-img-btn-flex">
        <img src="./images/customImg/cmp-4.jpg"alt="" />

        <button className="downld-btn">
            Download
        </button>
        </div>
        
    </div>

    <div className="content-bx">
        <h6>Content Format</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae in deleniti nam.</p>
    </div>

    <div className="vend-que-btns-flex">

        <button onClick={() => {setAcept(true), setQueModal(false)}} className='acept-btn'>
            Accept
        </button>
        <button onClick={() => {setDec(true),setQueModal(false)}} className='acept-btn dec-btn' >
            Decline
        </button>

      
        
    </div>

            
        </div>
        
      </section>

        {acept ? <AcceptQue setAcept={setAcept} /> : null}
        {dec ? <DecQue setDec={setDec} /> : null}

    </>
  )
}

export default VendViewModal
