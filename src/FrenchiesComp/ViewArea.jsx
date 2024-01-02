import React from 'react'

const ViewArea = ({onclickCloseBx , areaData}) => {
  return (
    <>

    <section className="vw-area-comp" onClick={onclickCloseBx}>
        <div className="vw-area-bx" onClick={(e) => e.stopPropagation()}>

            <h6>View Area</h6>

        <div className="vw-area-table all-user-table">
            <table>
                <thead>
                    <tr>
                        <th>SNO.</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Pin</th>
                        <th>Area</th>
                        <th>Subarea</th>

                    </tr>
                </thead>
                <tbody>

                    {areaData.map((elem,id) => {
                        return (

                              elem.area.map((curitem,index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td> <span> {curitem.id} </span> </td>
                                            <td> <span> {curitem.state} </span> </td>
                                            <td> <span> {curitem.city} </span> </td>
                                            <td> <span> {curitem.pin} </span> </td>
                                            <td> <span> {curitem.area} </span> </td>
                                            <td> <span> {curitem.subArea} </span> </td>

                                        </tr>
                                    </>
                                )
                              })
                            
                        )
                    })}
                    
                </tbody>
            </table>
        </div>

        <div onClick={onclickCloseBx} className="close-btn">
        <i class="fa-solid fa-xmark"></i>
        </div>
            
        </div>
    </section>
      
    </>
  )
}

export default ViewArea
