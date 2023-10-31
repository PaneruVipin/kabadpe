import React from 'react'
import '../style/Profile.css';

const UserProfUpdates = () => {
  return (
    <>

    <section className="user-prf-update-comp">
        <div className="u-p-cont">

            <h5>Appointments</h5>

            <div className="u-p-updt-table-bx">
                <table>
                    <tbody>
                    <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn">
                                    1
                                    </div>
                                    <div className="u-p-tb-info">
                                    <h6>Aman Aggarwal</h6>
                                    <span>Anand Vihar / 110031</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx">
                                    <h6>Today, 10:00 AM </h6>
                                    <span>7054387420</span>
                                </div>
                            </td>


                            <td>
                                <div className="complet-bx upcoming-bx">
                                    Upcoming
                                </div>
                            </td>
                            
                        </tr>
                        
                        <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn">
                                   2
                                    </div>
                                    <div className="u-p-tb-info">
                                    <h6>Pankaj Sharma</h6>
                                    <span>Shastri Park / 110045</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx">
                                    <h6> Yesterday, 11:25 AM </h6>
                                    <span>8447532101</span>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx">
                                    Completed
                                </div>
                            </td>
                            
                        </tr>

                        <tr>
                            <td>
                                <div className="u-p-tb-data">
                                    <div className="t-icn">
                                 3
                                    </div>
                                    <div className="u-p-tb-info">
                                    <h6>Pankaj Sharma</h6>
                                    <span>Shastri Park / 110008</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="u-p-tb-numb-bx">
                                    <h6> Yesterday, 11:25 AM </h6>
                                    <span>8447532101</span>
                                </div>
                            </td>

                            <td>
                                <div className="complet-bx">
                                    Completed
                                </div>
                            </td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
            
        </div>
    </section>

      
    </>
  )
}

export default UserProfUpdates
