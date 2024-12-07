import React, { useRef, useState } from "react";

const PreaddProduct = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 9, name: "Product 9" },
    { id: 10, name: "Product 10" },

    { id: 11, name: "Product 11" },
    { id: 12, name: "Product 12" },
    { id: 13, name: "Product 13" },
    { id: 14, name: "Product 14" },
    { id: 15, name: "Product 15" },
    { id: 16, name: "Product 16" },
  ];

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
    if(!addedProd.find((p) => p.id === product.id)){
        setAddedProd([...addedProd , product])
    }

    setSearchItem("")
    setSuggestion([])
  };

  const removeProduct = (id) => {
    const removeProd = addedProd.filter((curProd,index) => curProd.id !== id )
    setAddedProd(removeProd)
  }

  return (
    <>
    <div className="right-products-main" style={{position : 'relative' }}>
    
      <div className="add-products-input-main">
        {title ? <h6>Type and Search Pre-added Products</h6> : null}

        
        <div className="Add-products-lists">
                {addedProd.map((curElem,id) => (
                    <button key={curElem.id}> {curElem.name}  <span  onClick={() => removeProduct(curElem.id)}>
                       <i class="fa-solid fa-xmark"></i></span> </button>
                ))}
                
            </div>
            

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
        
      </div>
      
      {suggestion.length > 0 && (
            <div className="suggestions-products">
                {suggestion.map((curProd, id) => {
                  return (
                    <>
                      <li key={curProd.id} onClick={() => addProductsFunc(curProd)}>
                        {curProd.name}
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
