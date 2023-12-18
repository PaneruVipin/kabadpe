import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const TimeVariationRow = ({ onDelete }) => {
  return (
    <>
      <div className="tw-flex tw-gap-x-4">
        <select
          className="tw-rounded-md tw-py-2 tw-px-4 tw-bg-gray-100"
          name="Area"
          id="Area"
        >
          <option value="50">Monthly</option>
          <option value="70">Quaterly</option>
        </select>
        <input
          className="tw-mt-1 tw-p-2 tw-w-36 tw-border tw-rounded-md focus:tw-outline-none  "
          type="text"
          name="planname"
          id="planname"
          placeholder="Plan Name"
          autoComplete="off"
        />
        <input
          className="tw-mt-1 tw-p-2 tw-w-full tw-border tw-rounded-md focus:tw-outline-none "
          type="text"
          name="planname"
          id="planname"
          placeholder="Discount Collector Amount %"
          autoComplete="off"
        />

        <input
          className="tw-mt-1 tw-p-2 tw-w-full tw-border tw-rounded-md focus:tw-outline-none  "
          type="text"
          name="City"
          id="City"
          placeholder="Discount Area Amount %"
          autoComplete="off"
        />
        <button onClick={onDelete} className="add-wrok-actn-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </>
  );
};

const AddSubsEdit = ({ onclickCloseSubsPlanBx }) => {
  const [cityAmount, setCityAmount] = useState(null);
  const [wasteColectAmount, setWasteColectAmount] = useState(null);
  const [variationsCount, setVariationCount] = useState(1);
  const handleCityChangeAmount = (e) => {
    setCityAmount(e.target.value);
  };

  const handlewastecolectChangeAmount = (e) => {
    setWasteColectAmount(e.target.value);
  };

  const calculatePrice = () => {
    const sumPrice = Number(cityAmount) + Number(wasteColectAmount);
    return isNaN(sumPrice) ? 0 : sumPrice;
  };

  return (
    <>
      <section className="add-work-area-edit-comp ">
        <div className="add-work-area-edit-main-bx add-subs-plan h-screen overflow-scroll">
          <h6 className="banktext">Add Subscription Plan (Add or Edit)</h6>

          <div>
            <div className="addwrkarea-form-bx">
              <div className="admin-login-fild">
                <label htmlFor="City">No. of Waste Collector</label>
                <div className="admin-login-input">
                  <input
                    type="text"
                    name="City"
                    id="City"
                    placeholder="No. of waste collector"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="admin-login-fild">
                <label htmlFor="City">Price</label>
                <div className="admin-login-input">
                  <input
                    type="text"
                    name="City"
                    id="City"
                    placeholder="Waste Collectors Price"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div className="tw-mt-3 tw-space-y-3">
              <h6 className=" tw-text-left">
                Discount Acording Subscription Period
              </h6>
              {new Array(variationsCount).fill(0).map((e, i) => (
                <TimeVariationRow
                  onDelete={() => setVariationCount(variationsCount - 1)}
                  key={i}
                />
              ))}
              <button
                onClick={() => setVariationCount(variationsCount + 1)}
                className="tw-bg-green-300  tw-text-black hover:tw-bg-green-600 tw-rounded-2xl tw-px-4 tw-text-center tw-py-1"
              >
                Add New Subscription Period
              </button>
            </div>

            <div className="admin-login-fild mt-3">
              <label htmlFor="City">Price</label>
              <div className="admin-login-input">
                <input
                  type="text"
                  name="City"
                  id="City"
                  placeholder="Total Price"
                  autoComplete="off"
                  readOnly
                  value={calculatePrice()}
                />
              </div>
            </div>
          </div>

          <button className="add-work-area-btn">Add Plan</button>

          <div
            onClick={onclickCloseSubsPlanBx}
            className="close-add-work-bx-btn"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddSubsEdit;
