import React, { useState } from 'react'
import couponData from '../CouponData';

const CouponTable = () => {
  const [couponDataSet , setCouponDataSet] =  useState(couponData);

  return (
    <>

    <section className="all-prod-table-comp">
    <table>
        <thead>
            <tr>
                <th>SNo.</th>
                <th>Coupon Code</th>
                <th>Coupon Title</th>
                <th>Coupon Type</th>
                <th>Coupon Amount</th>
                <th>Vendor Name</th>
                <th>Usage / Limit</th>
                <th>Active Date</th>
                <th>Expire Date</th>


            </tr>
        </thead>
        <tbody>

            {couponDataSet.map((cruelem,id) => {
                return (
                    <>

                    <tr key={id}>
                        <td> <span> {id + 1} </span> </td>
                        <td> <span> {cruelem.code} </span> 
                        <div className="prod-edit-bin-vw-flx-box coupon-btn-flex-bx">
                        <span>Edit</span>
                        <span>Remove</span>
                        <span>Deactive</span>
                      </div>
                        </td>
                        <td> <span> {cruelem.couponTitle} </span> </td>
                        <td> <span> {cruelem.couponType} </span> </td>
                        <td> <span> {cruelem.amount} </span> </td>
                        <td> <span> {cruelem.vendorname} </span> </td>
                        <td> <span> {cruelem.usagelimit} </span> </td>
                        <td> <span> {cruelem.activeDate} </span> </td>
                        <td> <span> {cruelem.expireData} </span> </td>



                    </tr>
                    
                    </>
                )
            })}
            
        </tbody>
    </table>
        
    </section>
      
    </>
  )
}

export default CouponTable
