import { useState } from "react";
import AddCombo from "./AddCombo";
import { greenProductsFetch } from "../../apis/products/product";
import { useQuery } from "@tanstack/react-query";
import { search } from "../../lib/array";
import {
  greenProdComboFetch,
  greenProdComboUpdate,
} from "../../apis/products/combos";
import AddBox from "./AddBox";
import {
  greenProdBoxFetch,
  greenProdBoxUpdate,
} from "../../apis/products/boxes";

const VendorBoxes = ({}) => {
  const [selectedRow, setSelectedRow] = useState(undefined);
  const [searchValue, setSearchValue] = useState("");
  const { data: products, refetch } = useQuery({
    queryKey: ["greenProdBoxFetch"],
    queryFn: () => greenProdBoxFetch({}),
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
              <i className="fa-solid fa-plus"></i> Add Combo
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
                <th>Combo Title</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Number Of Products</th>
              </tr>
            </thead>
            <tbody>
              {!products?.error
                ? search(products, searchValue)
                    ?.sort(
                      (a, b) => new Date(b?.updatedOn) - new Date(a?.updatedOn)
                    )
                    ?.map(({ id, variantIds, price, Product, size, name }) => {
                      return (
                        <tr key={id}>
                          <td>
                            <div className="prod-edit-de-flex-btn">
                              <button
                                onClick={() => {
                                  setSelectedRow({
                                    id,
                                    variantIds,
                                    price,
                                    Product,
                                    size,
                                    name,
                                  });
                                }}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </button>

                              <button
                                onClick={async () => {
                                  await greenProdBoxUpdate({
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
                            <span> {name} </span>
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
                              <p> {Product?.name}</p>
                              {variantIds?.map((variationId, index) => {
                                const variation = Product?.ProdVariations?.find(
                                  ({ id }) => id == variationId
                                );
                                let label = JSON.parse(
                                  variation?.variation || "{}"
                                );
                                const keys = Object.keys(label);
                                label = keys
                                  ?.map((key) => `${key} : ${label?.[key]}`)
                                  .join(", ");
                                return (
                                  <p key={id} style={{ lineHeight: "1px" }}>
                                    {index + 1} - {label}
                                  </p>
                                );
                              })}
                            </div>
                          </td>

                          <td>
                            <span> {price} </span>
                          </td>
                          <td>
                            <span> {size} </span>
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
        <AddBox
          initialValues={selectedRow}
          allGroupIds={products?.allGroupIds || []}
          onClickClose={() => {
            refetch();
            setSelectedRow(undefined);
          }}
        />
      ) : null}
    </>
  );
};

export default VendorBoxes;
