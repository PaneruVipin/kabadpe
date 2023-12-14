import React, { useState } from 'react'

const AppointSlot = ({onclickCloseApntSlot , onClickOpenPopup}) => {
    const [date , setDate] = useState('')
    
    const handleChangeData = (event) => {

        const date = event.target.value ;
        setDate(date)
    }
    
  return (


    
    <>

    <section className="appoint-slots-comp">

        <div className="appoint-slots-main-bx">

            <h6>Appointments Slots</h6>

            <div className="current-date-bx-flex">

                <p> Current Date : <span> { date || '2023-11-30' }   </span> </p>

                <div className="select-date-bx">
                    <input type="date" name='date' id='date' value={date} onChange={handleChangeData} />
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
