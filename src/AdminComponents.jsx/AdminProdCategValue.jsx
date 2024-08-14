import React, { useState } from "react";
import AdminProdCategValueEdit from "./AdminProdCategValueEdit";
import {
  greenProdSubCategoryFetch,
  greenProdSubCategoryUpdate,
} from "../apis/products/categories";
import { useQuery } from "@tanstack/react-query";

const AdminProdCategValue = ({ data }) => {
  const [switchActive, setSwitchActive] = useState(false);
  const [categValue, setCategValue] = useState(false);
  const [categValue2, setCategValue2] = useState(false);
  const [initialValue, setInitialValue] = useState(null);
  const { data: categories, refetch } = useQuery({
    queryKey: ["greenProdSubCategoryFetch"],
    queryFn: () =>
      greenProdSubCategoryFetch({ includeRes: "draft", id: data?.id }),
  });
  return (
    <>
      <section className="admin-prod-atribute-comp vendor-attributes-comp vendor-attributes-comp2">
        <div className="atribute-value-flex-bx">
          <div className="atribute-title">
            <h4>Category</h4>
            <h6>
              {" "}
              Categories <span> {data?.name} </span>
            </h6>
          </div>

          <div className="prod-atribute-buton-flex prod-atribute-buton-flex1 ">
            <button
              onClick={() => {
                setInitialValue(null);
                setCategValue(true);
              }}
            >
              {/* <ion-icon name="add-sharp"></ion-icon>  */}
              Add Sub-category
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
                <th>Icon</th>
                <th>Name</th>
                <th>Description</th>
                {/* <th>Product Counts</th>
                <th>Admin Charges</th> */}
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!categories?.error
                ? categories?.map(
                    ({ categoryStatus, desc, id, image, name }) => (
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
                          <img src={image} alt="" />
                        </td>

                        <td>
                          <h6>{name}</h6>
                          {/* <div
                            className={
                              switchActive === true
                                ? "subcateg-bx subcategactive"
                                : "subcateg-bx"
                            }
                          >
                            <span>Fish</span>
                            <span>Meat</span>
                          </div> */}
                        </td>

                        <td>
                          <span>{desc}</span>
                        </td>

                        {/* <td>
                          <span>10</span>
                        </td>

                        <td>
                          <span>12%</span>
                        </td> */}

                        <td>
                          <div class={"form-checkss form-switch unchecked"}>
                            <input
                              onChange={async () => {
                                await greenProdSubCategoryUpdate({
                                  id,
                                  categoryStatus:
                                    categoryStatus == "active"
                                      ? "inactive"
                                      : "active",
                                });
                                refetch();
                              }}
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                              checked={categoryStatus == "active"}
                            />
                          </div>
                        </td>

                        <td>
                          <div className="prod-edit-de-flex-btn">
                            <button
                              onClick={() => {
                                setInitialValue({
                                  categoryStatus,
                                  desc,
                                  id,
                                  image,
                                  name,
                                });
                                setCategValue(true);
                              }}
                            >
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>

                            <button
                              onClick={async () => {
                                await greenProdSubCategoryUpdate({
                                  id,
                                  categoryStatus: "delete",
                                });
                                refetch();
                              }}
                            >
                              <i class="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )
                : null}
            </tbody>
          </table>
        </div>
        {/* <div className="ord-pagination-flex-bx">
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
        </div> */}

        {categValue ? (
          <AdminProdCategValueEdit
            parentData={data}
            initialValues={initialValue}
            onclickClose={() => {
              refetch();
              setCategValue(false);
            }}
          />
        ) : null}
      </section>
    </>
  );
};

export default AdminProdCategValue;
