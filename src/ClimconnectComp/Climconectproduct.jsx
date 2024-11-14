import { useQuery } from "@tanstack/react-query";
import React from "react";
import { greenProductsFetchAll } from "../apis/products/product";

const Climconeectproduct = () => {
  const { data: products, refetch: refetchProduct } = useQuery({
    queryKey: ["greenProductsFetchAllInclimeConnect"],
    queryFn: () => greenProductsFetchAll({}),
  });
  return (
    <>
      <section className="clim-conect-product-ads-sec">
        <h5>The Green Saman Shop</h5>
        {!products?.error
          ? products
              ?.sort((a, b) => new Date(b?.addedOn) - new Date(a?.addedOn))
              ?.slice(0, 10)
              .map(
                (
                  {
                    ProdCategory,
                    ProdImages,
                    categoryId,
                    gst,
                    hsn,
                    id,
                    longDesc,
                    name,
                    productPrice,
                    productStatus,
                    quantity,
                    sellPrice,
                    shortDesc,
                    sku,
                    vendorId,
                    ...curelem
                  },
                  indx
                ) => {
                  return (
                    <div className="prod-sug-card-bx prod-sug-card-bx2">
                      <div className="prod-sug-img-bx prod-sug-img-bx2">
                        <img
                          src={ProdImages?.[0]?.image || "/images/no_img.jpg"}
                          onError={(e) => (e.target.src = "/images/no_img.jpg")}
                          alt=""
                        />
                        <img
                          src={
                            ProdImages?.[1]?.image ||
                            ProdImages?.[0]?.image ||
                            "/images/no_img.jpg"
                          }
                          onError={(e) =>
                            (e.currentTarget.src = "/images/no_img.jpg")
                          }
                          alt=""
                        />
                      </div>

                      <div className="prod-sugg-info prod-sugg-info2">
                        <span>{ProdCategory?.name}</span>
                        <h6>{name}</h6>

                        {/* <div className="rating-bx">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                          </div>
                          <span>90%</span>
                        </div> */}
                        <div className="price-buy-now-btn-bx">
                          <h6>₹{sellPrice}</h6>

                          <a
                            href={`https://thegreensamanshop.com/product/${id}`}
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
              )
          : null}

        <a
          href="https://thegreensamanshop.com/shop?query=p"
          className="check-cart-btn  "
        >
          See More...
        </a>
      </section>
    </>
  );
};

export default Climconeectproduct;
