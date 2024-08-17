import React, { useState } from "react";
import AdminProdAddCateg from "../AdminComponents.jsx/AdminProdAddCateg";
import { useQuery } from "@tanstack/react-query";
import {
  greenProdCategoryFetch,
  greenProdCategoryUpdate,
} from "../apis/products/categories";

const AdminProdCateg = ({ onClickRedirect }) => {
  const [switchActive, setSwitchActive] = useState(false);
  const [prodCateg, setProdCateg] = useState(false);
  const [initialvalues, setInitialvalues] = useState(null);

  const { data: categories, refetch } = useQuery({
    queryKey: ["greenProdCategoryFetch"],
    queryFn: () => greenProdCategoryFetch({ includeRes: "draft" }),
  });
  return (
    <>
      <section className="admin-prod-atribute-comp">
        <h4>Product Attributes</h4>

        <div className="admin-prod-atribute-top-flex-bx mb-5">
          <div className="prod-atr-search-bx">
            <input
              type="text"
              name="prod-search"
              id="prod-search"
              placeholder="Search by Category name"
            />
          </div>

          <div className="prod-atribute-buton-flex">
            <button className="search-btn-flex">
              <ion-icon name="search-outline"></ion-icon>
              Search
            </button>

            <button>
              {/* <ion-icon name="trash"></ion-icon>   */}
              Delete
            </button>

            <button
              onClick={() => {
                setInitialvalues(null);
                setProdCateg(true);
              }}
            >
              {/* <ion-icon name="add-sharp"></ion-icon>  */}
              Add Category
            </button>
          </div>
        </div>

        {/* <div
          onClick={() => setSwitchActive(!switchActive)}
          className={
            switchActive
              ? "swithc-toggle-btn  swithc-toggle-btn2 swithc-toggle-btn23 switchactive mb-4"
              : "swithc-toggle-btn swithc-toggle-btn23 swithc-toggle-btn2 mb-4"
          }
        >
          <div className="round-bx"></div>
          <span>All</span>
          <span>Parents Only</span>
        </div> */}

        <div className="all-user-table waste-prod-table admin-prod-atribute-table">
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
                <th>Sub-categories</th>
                <th>Admin Charges</th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!categories?.error
                ? categories?.map(
                    ({
                      ProdSubCategories,
                      categoryStatus,
                      charge,
                      desc,
                      id,
                      image,
                      name,
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

                          <td>
                            <span>{ProdSubCategories?.length}</span>
                          </td>

                          <td>
                            <span>{charge}</span>
                          </td>

                          <td>
                            <div class={"form-checkss form-switch unchecked"}>
                              <input
                                onChange={async () => {
                                  await greenProdCategoryUpdate({
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
                                onClick={() =>
                                  onClickRedirect({
                                    ProdSubCategories,
                                    categoryStatus,
                                    charge,
                                    desc,
                                    id,
                                    image,
                                    name,
                                  })
                                }
                              >
                                <i class="fa-solid fa-magnifying-glass-plus"></i>
                              </button>
                              <button
                                onClick={() => {
                                  setInitialvalues({
                                    ProdSubCategories,
                                    categoryStatus,
                                    charge,
                                    desc,
                                    id,
                                    image,
                                    name,
                                  });
                                  setProdCateg(true);
                                }}
                              >
                                <i class="fa-regular fa-pen-to-square"></i>
                              </button>

                              <button
                                onClick={async () => {
                                  await greenProdCategoryUpdate({
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
                      );
                    }
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

        {prodCateg ? (
          <AdminProdAddCateg
            initialValues={initialvalues}
            onClickClose={() => {
              refetch();
              setProdCateg(false);
            }}
          />
        ) : null}
      </section>
    </>
  );
};

export default AdminProdCateg;
