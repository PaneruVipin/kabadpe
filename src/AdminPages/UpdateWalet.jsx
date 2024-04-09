import React, { useEffect, useState } from "react";
import WalletCreditPopup from "../Components/WalletCreditPopup";
import {
  adminWalletLimitFetch,
  adminWalletLimitUpdate,
} from "../apis/wallet/wallet";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const UpdateWalet = ({ onClickClose }) => {
  const [values, setValues] = useState({});
  const { data: walletLimit, refetch } = useQuery({
    queryKey: ["adminWalletLimitFetch"],
    queryFn: () => adminWalletLimitFetch(),
  });
  useEffect(() => {
    setValues(() => ({
      franchise: walletLimit?.franchise || 0,
      worker: walletLimit?.worker || 0,
    }));
  }, [walletLimit]);

  const handleConfirmClick = async () => {
    const res = await adminWalletLimitUpdate(values);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    onClickClose();
    toast.success(res);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <section className="update-walet-credit-comp" onClick={onClickClose}>
        <div
          className="updte-walet-credit-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6 className="text-center">Wallet Limit</h6>
          {/* <div className="amnt-fild-bx">
                <label htmlFor="#">User</label>
                <input type="text" name='useramount' id='useramount' placeholder='User Amount...'  />
            </div> */}

          <div className="amnt-fild-bx">
            <label htmlFor="#">Worker</label>
            <input
              type="number"
              name="worker"
              id="workeramount"
              onChange={handleChange}
              value={values?.worker}
              placeholder="Worker Amount..."
            />
          </div>

          <div className="amnt-fild-bx">
            <label htmlFor="#">Frenchies</label>
            <input
              type="number"
              name="franchise"
              onChange={handleChange}
              value={values?.franchise}
              id="frenchiesamount"
              placeholder="Frenchies Amount..."
            />
          </div>

          <p>
            Note :{" "}
            <span>
              This will set a limit for your users to use the wallet in minus up
              to this Eco Points.
            </span>
          </p>

          <button
            onClick={handleConfirmClick}
            className="tranfer-btn tranfer-btn5 mt-3 mx-auto d-flex justify-content-center align-items-center"
          >
            Confirm
          </button>
        </div>
      </section>
    </>
  );
};

export default UpdateWalet;
