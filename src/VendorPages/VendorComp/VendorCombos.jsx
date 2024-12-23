import { useState } from "react";
import AddCombo from "./AddCombo";
import { greenProductsFetch } from "../../apis/products/product";
import { useQuery } from "@tanstack/react-query";
import { search } from "../../lib/array";
import {
  greenProdComboFetch,
  greenProdComboUpdate,
} from "../../apis/products/combos";

const VendorCombos = ({}) => {
  const [selectedRow, setSelectedRow] = useState(undefined);
  const [searchValue, setSearchValue] = useState("");
  const { data: products, refetch } = useQuery({
    queryKey: ["greenprodcombo"],
    queryFn: () => greenProdComboFetch({}),
  });
  console.log("this is c ombo products ", products);
  return (
    <>
      <section className="product-comp">
        <div className="product-added-del-main">
          <div className="right-prod-btns-flex">
            <button
              onClick={() => {
                setSelectedRow(null);
              }}
              className="prod-add-del-btn prod-add-del-btn3"
            >
              <i className="fa-solid fa-plus"></i> Add Group
            </button>
          </div>
        </div>

        <div className="product-filter-main">
          <div className="ord-filt-bx">
            <input
              type="text"
              name="searchproduct"
              id="searchproduct"
              placeholder="Search Product"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <div className="ord-filt-bx"></div>
        </div>

        <div className="recent-ord-table all-user-table mt-4 prod-table">
          <table>
            <thead>
              <tr>
                <th>Actions</th>
                <th>Product Name</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {!products?.error
                ? search(products?.combos, searchValue)
                    ?.sort(
                      (a, b) => new Date(b?.updatedOn) - new Date(a?.updatedOn)
                    )
                    ?.map(({ id, groupIds, groupDiscount, items }) => {
                      return (
                        <tr key={id}>
                          <td>
                            <div className="prod-edit-de-flex-btn">
                              <button
                                onClick={() => {
                                  setSelectedRow({
                                    id,
                                    groupIds,
                                    groupDiscount,
                                  });
                                }}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </button>

                              <button
                                onClick={async () => {
                                  await greenProdComboUpdate({
                                    id,
                                    status: "delete",
                                  });
                                  refetch();
                                }}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                              }}
                              className="prod-info-v"
                            >
                              {items?.map(({ name, id }) => {
                                return (
                                  <>
                                    {" "}
                                    <p style={{ lineHeight: "1px" }}>
                                      {name?.substring(0, 80)}{" "}
                                    </p>
                                  </>
                                );
                              })}
                            </div>
                          </td>

                          <td>
                            <span> {groupDiscount}% </span>
                          </td>
                        </tr>
                      );
                    })
                : null}
            </tbody>
          </table>
        </div>
      </section>

      {selectedRow !== undefined ? (
        <AddCombo
          initialValues={selectedRow}
          allGroupIds={products?.allGroupIds||[]}
          onClickClose={() => {
            refetch();
            setSelectedRow(undefined);
          }}
        />
      ) : null}
    </>
  );
};

export default VendorCombos;
