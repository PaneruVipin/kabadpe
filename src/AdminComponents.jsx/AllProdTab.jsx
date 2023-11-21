import React, { useState } from "react";
import allProducts from "../AllProdData";

const AllProdTab = () => {
  const [check, setCheck] = useState(false);
  const [prodData, setProdData] = useState(allProducts);
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
              <th>S-No.</th>
              <th>
                {" "}
                <div className="prod-img">
                  <i class="fa-solid fa-image"></i>
                </div>{" "}
              </th>
              <th>
                <span>Name</span>
              </th>
              <th>
                <span>SKU</span>
              </th>
              <th>
                <span>Stock</span>
              </th>
              <th>
                <span>Price</span>
              </th>

              <th>
                <span>Categories</span>
              </th>

              <th>
                <div className="star-icon">
                  <i className="fa-regular fa-star"></i>
                </div>
              </th>

              <th>
                <span>Date</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {prodData.map((elem, index) => {
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
                      <div className="prod-imge">
                        <img src={elem.prodImg} alt="" />
                      </div>
                    </td>

                    <td>
                      <span> {elem.prodName} </span>
                      <div className="prod-edit-bin-vw-flx-box">
                        <span>Id: {elem.id} </span>
                        <span>Edit</span>
                        <span>Bin</span>
                        <span>View</span>
                        <span>Duplicate</span>
                      </div>
                    </td>

                    <td>
                      <span> {elem.sku} </span>
                    </td>

                    <td>
                      <span
                        style={{
                          color: elem.stock === "In Stock" ? "green" : "red",
                        }}
                      >
                        {" "}
                        {elem.stock}{" "}
                      </span>
                    </td>

                    <td>
                      <div className="price-prod-text">
                        {" "}
                        <span> {elem.old_price} </span>{" "}
                        <span>₹{elem.price}</span>{" "}
                      </div>
                    </td>

                    <td>
                      <span> {elem.Category} </span>
                    </td>

                    <td>
                      <i className="fa-solid fa-star"></i>
                    </td>

                    <td>
                      <span> {elem.Date} </span>
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

export default AllProdTab;
