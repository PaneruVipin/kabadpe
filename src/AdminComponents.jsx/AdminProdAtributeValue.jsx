import React, { useState } from "react";
import AdminProdAtributeUpdate from "./AdminProdAtributeUpdate";
import { useQuery } from "@tanstack/react-query";
import {
  greenProductsAttributeValueDelete,
  greenProductsAttributeValueFetch,
  greenProductsAttributeValueUpdate,
} from "../apis/products/attribute";
const AdminProdAtributeValue = ({ data: atributeData }) => {
  const [prodAtrbte, setProdAtrbte] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const { data: attributesValues, refetch } = useQuery({
    queryKey: ["greenProductsAttributeValueFetch"],
    queryFn: () =>
      greenProductsAttributeValueFetch({
        id: atributeData?.id,
        includeRes: "draft",
      }),
  });
  return (
    <>
      <section className="admin-prod-atribute-comp vendor-attributes-comp vendor-attributes-comp2">
        <div className="atribute-value-flex-bx">
          <div className="atribute-title">
            <h4>Product Attributes Values</h4>
            <h6>
              {" "}
              Attributes <span> {atributeData?.label} </span>
            </h6>
          </div>

          <div className="prod-atribute-buton-flex prod-atribute-buton-flex1 mt-5">
            <button
              onClick={() => {
                setSelectedData(null);
                setProdAtrbte(true);
              }}
            >
              {/* <ion-icon name="add-sharp"></ion-icon>  */}
              Add Attributes
            </button>

            <button>
              {/* <ion-icon name="trash"></ion-icon>   */}
              Delete
            </button>
          </div>
        </div>

        <div className="all-user-table waste-prod-table admin-prod-atribute-table mt-lg-4">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="form-check-bxx">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th>ID</th>
                <th>Name</th>
                {atributeData?.name?.toLocaleLowerCase()?.trim() == "color" ? (
                  <th>Color</th>
                ) : null}
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!attributesValues?.error
                ? attributesValues?.map(
                    ({
                      attributeId,
                      id,
                      value,
                      valueStatus,
                      colorCode,
                      ...rest
                    }) => {
                      return (
                        <tr key={id}>
                          <td>
                            <div className="form-check-bxx">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </td>

                          <td>
                            <span>{id}</span>
                          </td>

                          <td>
                            <span>{value}</span>
                          </td>

                          {atributeData?.name?.toLocaleLowerCase()?.trim() ==
                          "color" ? (
                            <td>
                              <div
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "50%",
                                  backgroundColor: colorCode,
                                }}
                              ></div>
                            </td>
                          ) : null}

                          <td>
                            {/* <button
                          className={
                            rangeBtn
                              ? "toggle-range-btn rangeactive"
                              : "toggle-range-btn"
                          }
                          onClick={() => rangeActiveFunc(elem.id)}
                        >
                         
                          <div className="toggle-round"></div>
                        </button> */}
                            <div
                              onClick={async () => {
                                await greenProductsAttributeValueUpdate({
                                  id,
                                  valueStatus:
                                    valueStatus == "active"
                                      ? "inactive"
                                      : "active",
                                });
                                refetch();
                              }}
                              class={
                                // true ?
                                "form-checkss form-switch unchecked"
                                // : "form-checkss form-switch"
                              }
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={valueStatus != "inactive"}
                              />
                            </div>
                          </td>

                          <td>
                            <div className="prod-edit-de-flex-btn">
                              <button
                                onClick={() => {
                                  setSelectedData({
                                    attributeId,
                                    id,
                                    value,
                                    valueStatus,
                                    colorCode,
                                    ...rest,
                                  });
                                  setProdAtrbte(true);
                                }}
                              >
                                <i class="fa-regular fa-pen-to-square"></i>
                              </button>

                              <button
                                onClick={async () => {
                                  await greenProductsAttributeValueDelete({
                                    ids: id,
                                  });
                                  refetch();
                                }}
                              >
                                <i class="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )
                : null}
            </tbody>
          </table>
        </div>
        <div className="ord-pagination-flex-bx">
          <span>Showing 1-8 of 30</span>

          <div className="ord-page-btn-flex">
            <button className="ord-page-prev-btn">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            <div className="ord-page-num ord-page-num2  pageactive">1</div>

            <div className="ord-page-num ord-page-num2">2</div>

            <div className="ord-page-num ord-page-num2">3</div>
            <div className="ord-page-num ord-page-num2">4</div>

            <button className="ord-page-prev-btn ord-page-next-btn">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </section>

      {prodAtrbte ? (
        <AdminProdAtributeUpdate
          attributeData={atributeData}
          data={selectedData}
          onClickClose={() => {
            refetch();
            setProdAtrbte(false);
          }}
        />
      ) : null}
    </>
  );
};

export default AdminProdAtributeValue;
