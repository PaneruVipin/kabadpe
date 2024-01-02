import React, { useState } from "react";

const OrderTab = ({orderUpdatedDatatable , }) => {
  const [check, setCheck] = useState(false);
  const [checkboxes, setCheckboxes] = useState(Array(1).fill(false));

  const getValue = (index) => {
    setCheck(index === check ? null : index);
  };

  const getFunctClass = (index) => {
    return index === check ? "form-check-box checkactive" : "form-check-box";
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = checkboxes.map((checkbox, i) =>
      index === 'all' || index === i ? !checkbox : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };

  const handleAllCheckboxChange = () => {
    const allChecked = checkboxes.every((checkbox) => checkbox);
    const updatedCheckboxes = checkboxes.map(() => !allChecked);
    setCheckboxes(updatedCheckboxes);
  };





  return (
    <>
      <section className="all-prod-table-comp">
        <table>
          <thead>
            <tr>
              <th>
              <input
          type="checkbox"
          checked={checkboxes.every((checkbox) => checkbox)}
          onChange={handleAllCheckboxChange}
        />
              </th>
              <th>S No.</th>
            
              <th>
                <span>Order</span>
              </th>
              <th>
                <span>Date</span>
              </th>
              <th>
                <span>Status</span>
              </th>
              <th>
                <span>Biling</span>
              </th>
              <th>
                <span>Total</span>
              </th>

              <th>
                <span>Vendors</span>
              </th>

              <th>
                <span>Actions</span>
              </th>

              <th>
                <span>Payment Mode</span>
              </th>

             
            </tr>
          </thead>
          <tbody>
            {orderUpdatedDatatable.map((elem, index) => {
              return (
                <>
                  <tr key={index}>
              {checkboxes.map((isChecked, index) => {
                return (
                    <>
                    <td key={index}>

          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(index)}
          />
              </td>

                    </>
                )
              })}


                    <td>
                      <span> {index + 1} </span>
                    </td>

                    <td>
                      <span> {elem.order} </span>
                    </td>

                    <td>
                      <span> {elem.date} </span>
                    </td>

                    <td>
                        <button style={{ color : elem.statype === "cancelled" ? "red" : "#21cd21"} } className={elem.status === "Processing" ? "ord-sta-btn ordstaactive" : "ord-sta-btn"}>
                            {elem.status}
                        </button>
                    </td>

                    <td>
                        <p className="biling-text"> {elem.billingone} </p>
                        <span className="bilng-text-2"> {elem.billingtwo} </span>
                    </td>

                    <td>
                        <span> ₹{elem.total} </span>
                    </td>

                    <td>
                        <span> {elem.vendor} </span>
                    </td>

                    <td>
                        <button className="det-ord-btn">
                            Details
                        </button>
                    </td>

                    <td>
                        <span> {elem.upi} </span>
                    </td>

                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>

    
    </>
  );
};

export default OrderTab;
