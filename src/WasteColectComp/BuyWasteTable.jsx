import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaPlaceOfWorship } from "react-icons/fa";
import { TbPlaceholder } from "react-icons/tb";
import {
  workerBuyWasteCallbackCash,
  workerRateListFetch,
} from "../apis/worker/buyWaste";
import SucesfulyTran from "./SucesfulyTran";
import {
  FuntionToUpdateWalletDetailsByRole,
  GetWalletDetails,
} from "../apis/wallet/wallet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const BuyWasteTable = ({
  buyWasteUserInfo,
  setBuyWasteUserInfo,
  closeBuyWaste,
}) => {
  const { userInfo, loading } = useSelector((state) => state.user);
  const [walletDetails, setWalletDetails] = useState(null);
  const [pay, setPay] = useState(false);
  const [waltTranfer, setWaltTranfer] = useState(false);
  const [waletSuc, setWaletSuc] = useState(false);
  const [tableData, setTableData] = useState([
    {
      id: 1,
    },
  ]);
  const [rateListData, setRateListData] = useState([]);
  const handleWeightChange = (id, value) => {
    const newTableData = tableData.map((row) => {
      let ammount;
      if (row?.id == id) {
        if (+value <= 200) {
          ammount = +value && +row?.price ? +row?.price * +value : null;
        } else {
          ammount = +value && +row?.bulkPrice ? +row?.bulkPrice * +value : null;
        }
        return {
          ...row,
          weight: value,
          ammount,
        };
      } else {
        return row;
      }
    });
    setTableData(newTableData);
  };

  const handleAddRow = () => {
    const id =
      tableData.reduce(
        (max, obj) => (obj.id > max ? obj.id : max),
        Number.MIN_SAFE_INTEGER
      ) + 1;
    const newRow = { id };
    setTableData([...tableData, newRow]);
  };

  const handleDeleteRow = (idForDelete) => {
    const updatedData = tableData.filter(({ id }) => id !== idForDelete);
    setTableData(updatedData);
  };

  const { data: rateList, refetch } = useQuery({
    queryKey: ["workerGetRateList"],
    queryFn: () => workerRateListFetch({ ariaId: buyWasteUserInfo?.ariaId }),
  });
  useEffect(() => {
    if (!rateList?.error) {
      setRateListData(rateList);
    }
  }, [rateList]);
  const totalAmmount = tableData
    .reduce((a, b) => {
      if (b?.ammount) {
        return a + b?.ammount;
      } else {
        return a;
      }
    }, 0)
    .toFixed(2);
  const handleCashPaidClick = async () => {
    const data = {
      orderDetail: { waste: tableData, totalAmmount },
      user: buyWasteUserInfo,
      appoinmentId: buyWasteUserInfo?.appoinmentId,
    };
    const res = await workerBuyWasteCallbackCash(data);
    if (!res?.error) {
      closeBuyWaste();
    }
  };

  const SucefData = {
    paraone: "Total Wallet Tranfer: 200",
    paratwo: "KPB Txn ID - 9822307632",
  };
  //calulate wallet data
  const handleWalletTransferClick = async () => {
    try {
      if (userInfo) {
        const data = await GetWalletDetails(userInfo.id, userInfo.role);
        setWalletDetails(data);
      }
      setWaltTranfer(true);
      setPay(false);
    } catch (error) {
      setError(error);
    }
  };
  //send wallet data
  const handleConfirmButtonClick = async () => {
    try {
      debugger;
      // Assuming walletCoin is obtained from the input field
      const AdminId = userInfo.id; // Assuming userData contains user ID
      const userId = buyWasteUserInfo?.id; // Assuming userData contains user ID
      const role = "user"; //userInfo.role ||  // Assuming role is fixed as 'user' for this example
      const walletmoney = totalAmmount || 0;

      // Call function to update wallet details
      var response = await FuntionToUpdateWalletDetailsByRole({
        AdminId,
        userId,
        role,
        walletmoney,
      });
      if (response.ResultStatus === 1) {
        toast.success(response.ResultMessage, { autoClose: 2000 }); // Display toast for 2 seconds
        setTimeout(() => onclickClosePopup(), 2000); // Close popup after 5 seconds
        setWaletSuc(true);
        setWaltTranfer(false);
        setPay(false);
      } else {
        toast.error(response.ResultMessage, { autoClose: 2000 }); // Display toast for 2 seconds
        setTimeout(() => onclickClosePopup(), 2000); // Close popup after 5 seconds
      }
    } catch (error) {
      console.error("Error updating wallet details:", error);
    }
  };
  const handleConfirmButtonClickr = async () => {
    // Call ApplyClickToSendMoneytouser function
    // await ApplyClickToSendMoneytouser();
    // Update states
    // setWaletSuc(true);
    // setWaltTranfer(false);
    // setPay(false);
  };
  return (
    <>
      <section className="buy-waste-table-comp buy-waste-table-comp3">
        <h6 className="banktext bywste2">Buy Waste</h6>

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
              Name : <span>{buyWasteUserInfo?.name}</span>
            </p>
            <p>
              Phone : <span> +91 {buyWasteUserInfo?.phoneNumber} </span>
            </p>
          </div>

          {/* <div className="u-i-rgt u-i-lft">
            <p>
              Address :{" "}
              <span>4929 c/10 kanti nagar old seelumpur delhi-110031</span>
            </p>
            <p>
              Area : <span>Azad Nagar</span>
            </p>
          </div> */}
        </div>

        <div className="buy-waste-table">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Retail Price/Kg</th>
                <th>Bulk Price/Kg</th>
                <th>Weight in Kg</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map(
                (
                  { id, name, price, weight, ammount, image, bulkPrice },
                  index
                ) => (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="selt-prod-bx">
                        <select
                          defaultValue=""
                          onChange={(e) => {
                            const values = JSON.parse(e.target.value);
                            const newTableData = tableData.map((row) => {
                              if (row?.id == id) {
                                const ammount = +row?.weight
                                  ? +values?.retailPrice * +row?.weight
                                  : null;
                                return {
                                  ...row,
                                  name: values?.productName,
                                  image: values?.productImage,
                                  price: values?.retailPrice,
                                  bulkPrice: values?.bulkPrice,
                                  ammount,
                                  productId: values?.id,
                                };
                              } else {
                                return row;
                              }
                            });
                            setTableData(newTableData);
                            // handleSelectChange(row.id, e.target.value);
                          }}
                        >
                          <option value="" hidden>
                            choose
                          </option>
                          {rateListData?.map(
                            ({
                              retailPrice,
                              productName,
                              productImage,
                              bulkPrice,
                              id,
                            }) => (
                              <option
                                key={id}
                                value={JSON.stringify({
                                  retailPrice,
                                  productName,
                                  productImage,
                                  bulkPrice,
                                  id,
                                })}
                                hidden={tableData?.some(
                                  ({ name }) => name == productName
                                )}
                              >
                                {productName}
                              </option>
                            )
                          )}

                          {/* Add your options here */}
                        </select>
                      </div>
                    </td>
                    <td>
                      {image ? (
                        <div className="prod-img">
                          <img src={image} alt="Select Img" />
                        </div>
                      ) : null}
                    </td>

                    <td>
                      {name ? (
                        <div className="amount-total">{price}</div>
                      ) : null}
                    </td>
                    <td>
                      {name ? (
                        <div className="amount-total">{bulkPrice}</div>
                      ) : null}
                    </td>
                    <td>
                      {name ? (
                        <input
                          type="number"
                          onWheel={(e) => e.currentTarget.blur()}
                          value={weight}
                          placeholder="Enter weight here..."
                          onChange={(e) =>
                            handleWeightChange(id, e.target.value)
                          }
                        />
                      ) : null}
                    </td>
                    <td>
                      {" "}
                      {name ? (
                        <div className="amount-total">{ammount}</div>
                      ) : null}{" "}
                    </td>
                    <td>
                      <div className="action-flex-btns d-flex align-items-center">
                        {tableData?.length < rateListData?.length ? (
                          <button
                            className="add-data-btn"
                            onClick={handleAddRow}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        ) : null}
                        {tableData?.length > 1 ? (
                          <button
                            className="add-data-btn delt-data-btn"
                            onClick={() => handleDeleteRow(id)}
                          >
                            <i className="fa-regular fa-trash-can"></i>
                          </button>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <div className="sub-total-bx">
          <h6> Total</h6>

          <p>
            {totalAmmount} : <span>Total Amount </span>
          </p>

          {/* {+totalAmmount ? ( */}
          <button onClick={() => setPay(true)} className="paynow-btn">
            Pay Now
          </button>
          {/* ) : null} */}
        </div>
      </section>

      <div
        onClick={() => setPay(false)}
        className={pay ? "pay-now-btn-sec payactive" : "pay-now-btn-sec"}
      >
        <div onClick={(e) => e.stopPropagation()} className="paynow-btn-flex">
          <button onClick={handleCashPaidClick} className="pay-btn">
            Cash Paid
          </button>
          {/* <button onClick={() => setWaletSuc(true)}  className="pay-btn">
            Wallet Transfer
          </button> */}

          <button
            // onClick={() => {
            //   setWaltTranfer(true), setPay(false);
            // }}
            onClick={handleWalletTransferClick}
            className="pay-btn"
          >
            Wallet Tranfer
          </button>

          <div onClick={() => setPay(false)} className="close-btn ">
            <i className="fa-solid fa-xmark"></i>
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
            Wallet Balance :{" "}
            <span>{walletDetails ? walletDetails.walletmoney : 0}</span>{" "}
          </p>
          <p>
            {" "}
            Payment Value : <span> {totalAmmount}</span>{" "}
          </p>
          <p>
            {" "}
            Balance Pay :{" "}
            <span>
              {walletDetails ? walletDetails.walletmoney - totalAmmount : "-"}
            </span>{" "}
          </p>

          <button
            // onClick={() => {
            //   setWaletSuc(true), setWaltTranfer(false), setPay(false);
            // }}
            onClick={handleConfirmButtonClick}
            className="confirm-btn"
          >
            Confirm
          </button>

          <div onClick={() => setWaltTranfer(false)} className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

      {waletSuc ? (
        <SucesfulyTran
          SucefData={SucefData}
          onClickCloseSucsMesge={() => setWaletSuc(false)}
        />
      ) : null}
    </>
  );
};

export default BuyWasteTable;
