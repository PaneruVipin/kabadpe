import React, { useState } from "react";
import WasteProdData from "./WasteProdData";
import WasteProdEdit from "./WasteProdEdit";
import {
  adminkabadProductDelete,
  adminkabadProductFetch,
} from "../apis/admins/kabadProducts";
import { useQuery } from "@tanstack/react-query";
import { search } from "../lib/array";
import { IoDuplicate } from "react-icons/io5";

const WasteProduct = () => {
  const [wasteProd, setWasteProd] = useState(WasteProdData);
  const [prodEdit, setProdEdit] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [editFormValues, setEditFormValues] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products, refetch } = useQuery({
    queryKey: ["adminkabadProductFetch"],
    queryFn: () => adminkabadProductFetch(),
  });
  return (
    <>
      <section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box user-det-top-flex-box4">
            <h6>Waste Products</h6>

            <div className="right-user-filter-data-flex-box waste-prod-filt-flex">
              <div className="left-waste-prod-filt-bx">
                <div className="user-data-search-box">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    autoComplete="off"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value.trimStart())}
                  />
                </div>

                {/* <div className="user-type-sel-box user-data-search-box">
                  <select name="user-type-data" id="user-type-data">
                    <option value="1">User</option>
                    <option value="1">Vendor</option>
                    <option value="1">Staff (Manager)</option>
                    <option value="1">Staff (Sales Team)</option>
                    <option value="1">Staff (Support Team)</option>
                  </select>
                </div>

                <div className="user-type-sel-box  user-data-search-box user-type-sel-box3">
                  <select name="user-type-data" id="user-type-data">
                    <option value="1">Today</option>
                    <option value="1">Last Week</option>
                    <option value="1">Last Monthly </option>
                  </select>
                </div>

                <div className="user-data-search-btn">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div> */}
              </div>
            </div>

            <div
              onClick={() => {
                setProdEdit(true);
                setisEdit(false);
              }}
              className="add-product-btn"
            >
              Add Product
            </div>
          </div>

          <div className="all-user-table waste-prod-table">
            <table>
              <thead>
                <tr>
                  <th>SNO.</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Area</th>
                  <th>Retail Price</th>
                  <th>Bulk Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {!products?.error
                  ? search(products, searchQuery)?.map(
                      (
                        {
                          bulkEndWeight,
                          bulkStartWeight,
                          retailEndWeight,
                          retailStartWeight,
                          bulkPrice,
                          retailPrice,
                          productImage,
                          productName,
                          id,
                          Arium,
                        },
                        i
                      ) => {
                        return (
                          <>
                            <tr key={i}>
                              <td>
                                {" "}
                                <span> {i + 1}</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {productName}</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <img src={productImage} alt="" />{" "}
                              </td>
                              <td>
                                <p>
                                  {Arium?.subAriaName} --{" "}
                                  <span>{`${Arium?.state}, ${Arium?.city}, ${Arium?.ariaName} - ${Arium?.pincode}`}</span>
                                </p>
                              </td>
                              <td>
                                {" "}
                                <span> {retailPrice}</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {bulkPrice}</span>{" "}
                              </td>

                              <td>
                                <div className="edit-remove-flex">
                                  <button
                                    onClick={() => {
                                      setProdEdit(true);
                                      setisEdit(true);
                                      setEditFormValues({
                                        bulkEndWeight,
                                        bulkStartWeight,
                                        retailEndWeight,
                                        retailStartWeight,
                                        bulkPrice,
                                        retailPrice,
                                        productImage,
                                        productName,
                                        id,
                                        Arium,
                                      });
                                    }}
                                  >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                  </button>

                                  <button
                                    onClick={async () => {
                                      await adminkabadProductDelete(id);
                                      refetch();
                                    }}
                                  >
                                    <i class="fa-solid fa-trash"></i>
                                  </button>
                                  <button
                                    onClick={() => {
                                      setisEdit(false);
                                      setProdEdit(true);
                                      setEditFormValues({
                                        bulkEndWeight,
                                        bulkStartWeight,
                                        retailEndWeight,
                                        retailStartWeight,
                                        bulkPrice,
                                        retailPrice,
                                        productImage,
                                        productName,
                                        id,
                                        Arium,
                                      });
                                    }}
                                  >
                                    <IoDuplicate />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      }
                    )
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {prodEdit ? (
        <WasteProdEdit
          isEdit={isEdit}
          editFormValues={editFormValues}
          refetch={refetch}
          onclickEditClose={() => {
            setProdEdit(false);
            setEditFormValues(null);
          }}
        />
      ) : null}
    </>
  );
};

export default WasteProduct;
