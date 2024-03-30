import React, { useState } from "react";
import { FaPlaceOfWorship } from "react-icons/fa";
import { TbPlaceholder } from "react-icons/tb";

const BuyWasteComp = () => {
  const [pay, setPay] = useState(false);
  const [waltTranfer, setWaltTranfer] = useState(false);

  const initialData = [
    {
      id: 1,
      selectedOption: "",
      imageUrl: "/images/customImg/book.png",
      email: "",
      price: "",
      weight: "",
      totalCost: "",
    },
  ];

  const [tableData, setTableData] = useState(initialData);

  const handleInputChange = (id, field, value) => {
    const updatedData = tableData.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );

    if (field === "price" || field === "weight") {
      const updatedRow = updatedData.find((row) => row.id === id);
      if (updatedRow.price !== "" && updatedRow.weight !== "") {
        const total =
          parseFloat(updatedRow.price) * parseFloat(updatedRow.weight);
        updatedRow.totalCost = isNaN(total) ? "" : total.toFixed(2);
      }
    }

    setTableData(updatedData);
  };

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1,
      selectedOption: "",
      imageUrl: "/images/customImg/book.png",
      email: "",
      price: "",
      weight: "",
      totalCost: "",
    };
    setTableData([...tableData, newRow]);
  };

  const handleDeleteRow = (id) => {
    const updatedData = tableData.filter((row) => row.id !== id);
    setTableData(updatedData);
  };

  const handleSelectChange = (id, value) => {
    const updatedData = tableData.map((row) =>
      row.id === id
        ? { ...row, selectedOption: value, imageUrl: getImageUrl(value) }
        : row
    );

    setTableData(updatedData);
  };

  const getImageUrl = (selectedOption) => {
    // Logic to get the image URL based on the selected option
    // Replace this with your logic to set the image URL for each option
    // Example logic:
    switch (selectedOption) {
      case "book":
        return "/images/customImg/book.png";
      case "paper":
        return "/images/customImg/cash.png";
      case "iron":
        return "/images/customImg/beam.png";
      case "plastic":
        return "/images/customImg/plastic.png";
      case "cardboard":
        return "/images/customImg/cardboard.png";
      case "wheel":
        return "/images/customImg/wheel.png";
      case "aluminium":
        return "/images/customImg/aluminium-paper.png";
      case "wood":
        return "/images/customImg/furniture.png";
      case "magazine":
        return "/images/customImg/magazine.png";
      case "ewaste":
        return "/images/customImg/broken.png";
      case "copper":
        return "/images/customImg/coil.png";
      case "steel":
        return "/images/customImg/iron-bar.png";
      // Add more cases as needed
      default:
        return "";
    }
  };

  return (
    <>
      <section className="buy-waste-table-comp">
        <div
          className="user-info"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            paddingInlineEnd: "1.5rem",
          }}
        >
          <div className="u-i-lft">
            <p>
              Name : <span>Faiz Alam</span>
            </p>
            <p>
              Phone : <span> +91 9971464659 </span>
            </p>
          </div>

          <div className="u-i-rgt u-i-lft">
            <p>
              Address :{" "}
              <span>4929 c/10 kanti nagar old seelumpur delhi-110031</span>
            </p>
            <p>
              Area : <span>Azad Nagar</span>
            </p>
          </div>
        </div>

        <div className="buy-waste-table">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Price/Kg</th>
                <th>Weight/Kg</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="selt-prod-bx">
                      <select
                        value={row.selectedOption}
                        onChange={(e) =>
                          handleSelectChange(row.id, e.target.value)
                        }
                      >
                        {/* <option value="">choose</option> */}
                        <option value="book">book</option>
                        <option value="paper">paper</option>
                        <option value="iron">iron</option>
                        <option value="plastic">plastic</option>
                        <option value="cardboard">cardboard</option>
                        <option value="wheel">wheel</option>
                        <option value="aluminium">aluminium</option>
                        <option value="wood">wood</option>
                        <option value="magazine">magazine</option>
                        <option value="ewaste">Ewaste</option>
                        <option value="copper">copper</option>
                        <option value="steel">steel</option>

                        {/* Add your options here */}
                      </select>
                    </div>
                  </td>
                  <td>
                    <div className="prod-img">
                      <img src={row.imageUrl} alt="Select Img" />
                    </div>
                  </td>

                  <td>
                    <input
                      type="number"
                      value={row.price}
                      placeholder="Enter price here..."
                      onChange={(e) =>
                        handleInputChange(row.id, "price", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.weight}
                      placeholder="Enter weight here..."
                      onChange={(e) =>
                        handleInputChange(row.id, "weight", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <div className="amount-total">{row.totalCost}</div>{" "}
                  </td>
                  <td>
                    <div className="action-flex-btns d-flex align-items-center">
                      <button className="add-data-btn" onClick={handleAddRow}>
                        <i class="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="add-data-btn delt-data-btn"
                        onClick={() => handleDeleteRow(row.id)}
                      >
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sub-total-bx">
          <h6> Total</h6>

          <p>
            2000 : <span>Total Amount </span>
          </p>

          <button onClick={() => setPay(true)} className="paynow-btn">
            Pay Now
          </button>
        </div>
      </section>

      <div className={pay ? "pay-now-btn-sec payactive" : "pay-now-btn-sec"}>
        <div className="paynow-btn-flex">
          <button className="pay-btn">Cash Paid </button>
            
          <button
            onClick={() => {
              setWaltTranfer(true), setPay(false);
            }}
            className="pay-btn"
          >
            Wallet Tranfer
          </button>

          <div onClick={() => setPay(false)} className="close-btn ">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

      <div
        className={
          waltTranfer
            ? "wallet-payment-sec walletpaymtactive"
            : "wallet-payment-sec"
        }
      >
        <div className="wallet-pay-bx">
          <h6>Wallet Tranfer</h6>

          <p>
            {" "}
            Wallet Balance : <span>₹5000.00</span>{" "}
          </p>
          <p>
            {" "}
            Payment Value : <span>₹2000.00</span>{" "}
          </p>
          <p>
            {" "}
            Balance Pay : <span>₹3000.00</span>{" "}
          </p>

          <button className="confirm-btn">Confirm</button>

          <div onClick={() => setWaltTranfer(false)} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyWasteComp;
