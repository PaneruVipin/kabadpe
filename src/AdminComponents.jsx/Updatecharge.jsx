import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  bidsCommissionFetch,
  bidsCommissionUpdate,
} from "../apis/franchise/bid";
import { toast } from "react-toastify";

const Updatecharge = ({ onClickClose }) => {
  const [charges, setCharges] = useState({});
  const { data: commission, refetch } = useQuery({
    queryKey: ["bidsCommissionFetch"],
    queryFn: () => bidsCommissionFetch(),
  });
  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setCharges((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaveClick = async () => {
    const res = await bidsCommissionUpdate(charges);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    refetch();
    toast.success(res);
    onClickClose();
  };
  useEffect(() => {
    if (!commission || commission?.error) {
      return;
    }
    const charges = {
      1: commission?.find(({ level }) => level == 1)?.commission,
      2: commission?.find(({ level }) => level == 2)?.commission,
      3: commission?.find(({ level }) => level == 3)?.commission,
    };
    setCharges(charges);
  }, [commission]);
  return (
    <>
      <div onClick={onClickClose} className="bid-popup-sec">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bid-popup-bx bid-popup-bx2"
        >
          <h6>Update Charges</h6>

          <div className="all-user-table stock-tble mnge-waste-table bid-popup-table mt-3 bid-table">
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Weight (kg)</th>
                  <th>Quantity</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>Level 1</span>
                  </td>
                  <td>
                    <span>0 - 500</span>
                  </td>
                  <td>
                    <span>0 - 500</span>
                  </td>

                  <td>
                    {" "}
                    <div className="b-inpt">
                      <input
                        type="number"
                        name="1"
                        id="charge"
                        value={charges?.[1]}
                        onChange={handleInputChange}
                      />
                    </div>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Level 2</span>
                  </td>
                  <td>
                    <span>500 - 1000</span>
                  </td>
                  <td>
                    <span>500 - 1000</span>
                  </td>

                  <td>
                    {" "}
                    <div className="b-inpt">
                      <input
                        type="number"
                        name="2"
                        id="charge"
                        value={charges?.[2]}
                        onChange={handleInputChange}
                      />
                    </div>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Level 3</span>
                  </td>
                  <td>
                    <span> More than 1000 </span>
                  </td>
                  <td>
                    <span> More than 1000 </span>
                  </td>

                  <td>
                    {" "}
                    <div className="b-inpt">
                      <input
                        type="number"
                        name="3"
                        id="charge"
                        value={charges?.[3]}
                        onChange={handleInputChange}
                      />
                    </div>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button onClick={handleSaveClick} className="b-comn-btn">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Updatecharge;
