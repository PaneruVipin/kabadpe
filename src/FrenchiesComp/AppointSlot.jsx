import React, { useEffect, useRef, useState } from 'react'

const AppointSlot = ({onclickCloseApntSlot , ApntSlotTrue , onClickOpenPopup}) => {
    const [currentDate , setcurrentdate] = useState(new Date());
    
    const handleChangeDate =(event) => {

        const inputData = new Date(event.target.value)

        setcurrentdate(inputData)

      



        
    }

    const handleDateChange = (direction) => {
        const newDate = new Date(currentDate);
    
        if (direction === 'left') {
          newDate.setDate(newDate.getDate() - 1);
        } else if (direction === 'right') {
          newDate.setDate(newDate.getDate() + 1);
        }

        setcurrentdate(newDate)


    }

    const apntSlotRef =  useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {
    
            if(apntSlotRef.current && !apntSlotRef.current.contains(event.target)) {
    
                onclickCloseApntSlot();
              
            }
          
        }
    
    
        if(ApntSlotTrue){
          document.addEventListener("mousedown", handleClickOutside);
        }else{
          document.removeEventListener("mousedown", handleClickOutside);
    
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
    
        }
        
    
      
      }, [ApntSlotTrue])
    
  return (


    
    <>

    <section className="appoint-slots-comp">

        <div className="appoint-slots-main-bx" ref={apntSlotRef}>

            <h6>Appointments Slots</h6>

            <div className="current-date-bx-flex">
{/* toISOString().split('T')[0] */}
                <p> Current Date : <span> { currentDate.toISOString().split('T')[0] || '2023-11-30' }   </span> </p>

                <div className="select-date-bx">
                    <input type="date" name='date' id='date' value={currentDate} onChange={handleChangeDate} />
                </div>

                <div className="left-right-arrow-btn-flex">

                    <button onClick={() => handleDateChange("left")} className="date-btn">
                    <i class="fa-solid fa-angle-left"></i>
                    </button>

                    
                    <button onClick={() => handleDateChange("right")} className="date-btn">
                    <i class="fa-solid fa-angle-right"></i>
                    </button>
                    
                </div>
                
            </div>

            <div className="buy-waste-table appoint-slot-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th> <div className="slot-text-flex"> <p>Slot1</p>   10AM - 12PM </div> </th>
                            <th>  <div className="slot-text-flex"> <p>Slot2</p>  12PM - 2PM </div> </th>
                            <th> <div className="slot-text-flex"> <p>Slot3</p>  2PM - 4PM </div> </th>
                            <th> <div className="slot-text-flex"> <p>Slot4</p>  4PM - 6PM </div> </th>
                            <th> <div className="slot-text-flex"> <p>Slot5</p>  6PM - 8PM  </div></th>
                            <th><div className="slot-text-flex"> <p>Slot6</p>  8PM - 10PM </div> </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <span> Faiz </span>
                            </td>
                            <td>
                                <div className="assign-flex-bx">



                                <button  className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                            <td>
                                <div className="assign-flex-bx">

                                <div className="slot-data">
                                    <span>1. Laxmi Nagar</span>
                                    <span>2. Kundan Nagar</span>
                                    <span>3. Azad Nagar</span>

                                </div>

                                <button  className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                            <td>
                                <div className="assign-flex-bx">



                                <button  className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>


                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>


                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>
                            
                            
                        </tr>

                        <tr>
                            <td>
                                <span> Faisal </span>
                            </td>
                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                           

                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>


                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>


                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                            <td>
                                <div className="assign-flex-bx">

                                <div className="slot-data">
                                    <span>1. Laxmi Nagar</span>
                                    <span>2. Kundan Nagar</span>
                                    <span>3. Azad Nagar</span>

                                </div>

                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>
                            
                            
                        </tr>

                        <tr>
                            <td>
                                <span> Ahmad Hasan </span>
                            </td>

                            <td>
                                <div className="assign-flex-bx">

                                <div className="slot-data">
                                    <span>1. Laxmi Nagar</span>
                                    <span>2. Kundan Nagar</span>
                                    <span>3. Azad Nagar</span>

                                </div>

                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>


                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                           

                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>


                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>


                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                          

                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>
                            
                            
                        </tr>

                        <tr>
                            <td>
                                <span> Kunal Verma </span>
                            </td>

                         

                            
                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                           

                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>


                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>
                            <td>
                                <div className="assign-flex-bx">

                                <div className="slot-data">
                                    <span>1. Laxmi Nagar</span>
                                    <span>2. Kundan Nagar</span>
                                    <span>3. Azad Nagar</span>

                                </div>

                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>


                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>

                          

                            <td>
                                <div className="assign-flex-bx">



                                <button className="assign-btn assign-btn3" onClick={onClickOpenPopup}>
                        Assign
                        </button>
                                </div>
                           
                            </td>
                            
                            
                        </tr>
                    </tbody>
                </table>
            </div>

            <div onClick={onclickCloseApntSlot} className="close-appoint-btn-bx">
            <i class="fa-solid fa-xmark"></i>
            </div>
            
        </div>
        
    </section>
      
    </>
  )
}

export default AppointSlot
