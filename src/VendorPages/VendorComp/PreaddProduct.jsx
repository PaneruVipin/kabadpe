import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { greenProductsFetch } from "../../apis/products/product";

const PreaddProduct = ({
  onChange = () => {},
  value = [],
  allGroupIds = [],
  initialIds=[]
}) => {
  const [productList, setProductList] = useState([]);
  const products = productList;

  const [searchItem, setSearchItem] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [addedProd, setAddedProd] = useState([]);
  const [title, setTitle] = useState(true);

  const handleSearchItem = (e) => {
    const value = e.target.value;
    setSearchItem(value);

    if (title) {
      setTitle(false);
    }

    if (value) {
      const filteredProducts = products.filter((curElem, id) => {
        return curElem.name.toLowerCase().includes(value.toLowerCase());
      });

      setSuggestion(filteredProducts);
    } else {
      setSuggestion([]);
    }
  };

  const addProductsFunc = (product) => {
    if (!addedProd.find((p) => p.id === product.id)) {
      const newProducts = [...addedProd, product];
      setAddedProd(newProducts);
      onChange(newProducts);
    }

    setSearchItem("");
    setSuggestion([]);
  };

  const removeProduct = (id) => {
    const removeProd = addedProd.filter((curProd, index) => curProd.id !== id);
    setAddedProd(removeProd);
    onChange(removeProd);
  };
  const { data: allProducts, refetch } = useQuery({
    queryKey: ["greenProductsFetchertyeteye25737"],
    queryFn: () => greenProductsFetch({}),
  });
  useEffect(() => {
    if (!allProducts?.error) {
      const allreadyExistIds = addedProd?.map(({ id }) => id);
      const otherUsedValues = allGroupIds?.filter((id) => !initialIds.includes(id));
      const filterProduct = allProducts?.filter(
        ({ id }) =>
          !allreadyExistIds?.includes(id) && !otherUsedValues?.includes(id)
      );
      setProductList(filterProduct);
    }
  }, [allProducts, addedProd]);
  useEffect(() => {
    if (!allProducts?.error) {
      const products = (value || [])?.map((prodId) => {
        return allProducts?.find((p) => p?.id == prodId) || {};
      });
      setAddedProd(products);
    }
  }, [allProducts]);
  return (
    <>
      <div className="right-products-main" style={{ position: "relative" }}>
        <div className="add-products-input-main">
          {title ? <h6>Type and Search Pre-added Products</h6> : null}

          <div className="Add-products-lists">
            {addedProd?.map((curElem, id) => (
              <button key={curElem?.id}>
                {" "}
                {curElem?.name?.substring(0, 40)}{" "}
                <span onClick={() => removeProduct(curElem?.id)}>
                  <i class="fa-solid fa-xmark"></i>
                </span>{" "}
              </button>
            ))}
          </div>

          {addedProd?.length < 6 ? (
            <div className="add-products-inpt-bx">
              <input
                type="text"
                name="addProducts"
                id="addProducts"
                placeholder="Enter add products"
                value={searchItem}
                onChange={handleSearchItem}
                autoComplete="off"
              />
            </div>
          ) : null}
        </div>

        {suggestion?.length > 0 && (
          <div className="suggestions-products">
            {suggestion?.map((curProd, id) => {
              return (
                <>
                  <li
                    key={curProd?.id}
                    onClick={() => addProductsFunc(curProd)}
                  >
                    {curProd?.name}
                  </li>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default PreaddProduct;
