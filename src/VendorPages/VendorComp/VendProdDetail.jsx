import React, { useState } from "react";
import AddProduct from "./AddProduct";
import { greenProductsFetchOne } from "../../apis/products/product";
import { useQuery } from "@tanstack/react-query";

const VendProdDetail = ({ data }) => {
  const [addProd, setAddProd] = useState(false);
  const { data: product, refetch } = useQuery({
    queryKey: ["greenProductsFetchOne"],
    queryFn: () => greenProductsFetchOne({ id: data?.id }),
  });
  const images = !product?.error ? product?.ProdImages : [];
  return (
    <>
      <section className="vend-prod-det-comp">
        <h6>Product Details</h6>
        {!product?.error ? (
          <>
            <div className="prod-det-main-vend">
              <div className="left-vend-prod-det-img">
                <img src={images?.[0]?.image} alt="" />
              </div>
              <div className="right-vend-prod-det-bx">
                {/* <p>
                  Status: <span>This product Showing</span>
                </p> */}
                <h3>{product?.name}</h3>
                <h6>
                  SKU: <span>{product?.sku}</span>
                </h6>

                <div className="vend-prod-price">
                  <h6>₹{product?.sellPrice}</h6>
                  <span>₹{product?.productPrice}</span>
                </div>

                <div className="vend-stock-qunt-bx">
                  <span className="stock-text">
                    {product?.quantity ? "In Stock" : "Out Stock"}
                  </span>
                  <p>Quantity: {product?.quantity}</p>
                </div>

                {/* <h4>T-Shirt</h4> */}

                <h5 className="categ-prod-text">
                  Category: <span>{product?.ProdCategory?.name}</span>
                </h5>

                <button
                  onClick={() => setAddProd(true)}
                  className="prod-comn-btn"
                >
                  Edit Product
                </button>
              </div>
            </div>

            {/* <div className="prod-varent-list-main">
              <h6>Product Variant List</h6>

              <div className="prod-var-table recent-ord-table all-user-table">
                <table>
                  <thead>
                    <tr>
                      <th>SR</th>
                      <th>IMAGE</th>
                      <th>Combination</th>
                      <th>SKU</th>
                      <th>BarCODE</th>
                      <th>Original Price</th>
                      <th>Sale Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>1</span>
                      </td>
                      <td>
                        {" "}
                        <div className="prod-info-v">
                          <img
                            src="/images/customImg/prod-img-det.jpg"
                            className="prod-img-bx"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        {" "}
                        <span>(65c1dd3a9976080008ae99e1-0)</span>{" "}
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <span>200.00</span>
                      </td>
                      <td>
                        <span>150.00</span>{" "}
                      </td>
                      <td>
                        <span>100</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>2</span>
                      </td>
                      <td>
                        {" "}
                        <div className="prod-info-v">
                          <img
                            src="/images/customImg/prod-img-det.jpg"
                            className="prod-img-bx"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        {" "}
                        <span>(65c1dd3a9976080008ae99e1-0)</span>{" "}
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <span>200.00</span>
                      </td>
                      <td>
                        <span>150.00</span>{" "}
                      </td>
                      <td>
                        <span>100</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>3</span>
                      </td>
                      <td>
                        {" "}
                        <div className="prod-info-v">
                          <img
                            src="/images/customImg/prod-img-det.jpg"
                            className="prod-img-bx"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        {" "}
                        <span>(65c1dd3a9976080008ae99e1-0)</span>{" "}
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <span>200.00</span>
                      </td>
                      <td>
                        <span>150.00</span>{" "}
                      </td>
                      <td>
                        <span>100</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}

            {/* <div className="ord-pagination-flex-bx">
              <span>Showing 1-8 of 30</span>

              <div className="ord-page-btn-flex">
                <button className="ord-page-prev-btn">
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </button>

                <div className="ord-page-num pageactive">1</div>

                <div className="ord-page-num">2</div>

                <div className="ord-page-num">3</div>
                <div className="ord-page-num">4</div>

                <button className="ord-page-prev-btn ord-page-next-btn">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
              </div>
            </div> */}
          </>
        ) : null}
      </section>
      {addProd ? (
        <AddProduct
          initialValues={!product?.error ? product : {}}
          onClickClose={() => {
            refetch();
            setAddProd(false);
          }}
        />
      ) : null}
    </>
  );
};

export default VendProdDetail;
