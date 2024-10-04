import React, { useState } from "react";
import allProducts from "../AllProdData";
import { useQuery } from "@tanstack/react-query";
import { greenProductsFetchAll } from "../apis/products/product";
import { DateTime } from "luxon";

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
      index === "all" || index === i ? !checkbox : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };

  const handleAllCheckboxChange = () => {
    const allChecked = checkboxes.every((checkbox) => checkbox);
    const updatedCheckboxes = checkboxes.map(() => !allChecked);
    setCheckboxes(updatedCheckboxes);
  };
  const { data: products, refetch: refetchProduct } = useQuery({
    queryKey: ["greenProductsFetchAll"],
    queryFn: () => greenProductsFetchAll({}),
  });
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
              <th>Vendor Name</th>
              <th>
                {" "}
                <div className="prod-img">
                  <i className="fa-solid fa-image"></i>
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

              {/* <th>
                <div className="star-icon">
                  <i className="fa-regular fa-star"></i>
                </div>
              </th> */}

              <th>
                <span>Date</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {!products?.error
              ? products?.map(
                  (
                    {
                      id,
                      Vendor,
                      sku,
                      quantity,
                      productPrice,
                      sellPrice,
                      ProdImages,
                      ProdCategory,
                      name,addedOn,
                      ...rest
                    },
                    index
                  ) => {
                    return (
                      <tr key={id}>
                        <td key={index}>
                          <input type="checkbox" />
                        </td>

                        <td>
                          <span> {index + 1} </span>
                        </td>

                        <td>
                          <span> {Vendor?.fullname} </span>
                        </td>

                        <td>
                          <div className="prod-imge">
                            <img src={ProdImages?.[0]?.image} alt="" />
                          </div>
                        </td>

                        <td>
                          <span> {name} </span>
                          <div className="prod-edit-bin-vw-flx-box">
                            <span>Id: {id} </span>
                            <span>Edit</span>
                            <span>Bin</span>
                            <span>View</span>
                            <span>Duplicate</span>
                          </div>
                        </td>

                        <td>
                          <span> {sku} </span>
                        </td>

                        <td>
                          <span
                            style={{
                              color: quantity ? "green" : "red",
                            }}
                          >
                            {" "}
                            {quantity}
                          </span>
                        </td>

                        <td>
                          <div className="price-prod-text">
                            {" "}
                            <span>₹{productPrice} </span>{" "}
                            <span>₹{sellPrice}</span>{" "}
                          </div>
                        </td>

                        <td>
                          <span> {ProdCategory?.name} </span>
                        </td>

                        {/* <td>
                          <i className="fa-solid fa-star"></i>
                        </td> */}

                        <td>
                          <span> {DateTime.fromISO(addedOn, {
                      zone: "utc",
                    })
                      .setZone("Asia/Kolkata")
                      .toFormat("ccc dd LLL yyyy")} at {DateTime.fromISO(addedOn, {
                        zone: "utc",
                      })
                        .setZone("Asia/Kolkata")
                        .toFormat("hh:mm a")} </span>
                        </td>
                      </tr>
                    );
                  }
                )
              : null}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AllProdTab;
