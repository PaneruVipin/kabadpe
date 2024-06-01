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
    queryKey: ["bidsCommissionFetch1"],
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
      4: commission?.find(({ level }) => level == 4)?.commission,
    };
    setCharges(charges);
  }, [commission]);
  const chargesLabel = [
    { id: 1, label: 1, priceRange: "1 - 10,000" },
    { id: 2, label: 2, priceRange: "10,001 - 50,000" },
    { id: 3, label: 3, priceRange: "50001 - 2,00,000" },
    { id: 4, label: 4, priceRange: "2,00,000+" },
  ];
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
                  <th>Price Range</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                {chargesLabel?.map(({ id, label, priceRange }) => (
                  <tr key={id}>
                    <td>
                      <span>Level {label}</span>
                    </td>
                    <td>
                      <span>{priceRange}</span>
                    </td>

                    <td>
                      {" "}
                      <div className="b-inpt">
                        <input
                          type="number"
                          name={label}
                          id="charge"
                          value={charges?.[label]}
                          onChange={handleInputChange}
                        />
                      </div>{" "}
                    </td>
                  </tr>
                ))}
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
