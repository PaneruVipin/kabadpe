import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { adminSubsAdd } from "../apis/admins/subscription";

const TimeVariationRow = ({
  onDelete,
  showDeleteButton = true,
  onChange,
  data,
}) => {
  return (
    <>
      <div className="tw-flex tw-gap-x-4 tw-items-center">
        <select
          onChange={onChange}
          value={data?.subscriptionType}
          className="tw-rounded-md tw-py-1 tw-px-4 tw-bg-gray-100"
          name="subscriptionType"
        >
          <option value="" disabled hidden>
            choose
          </option>
          <option value="monthly">Monthly</option>
          <option value="quaterly">Quaterly</option>
        </select>
        <input
          onChange={onChange}
          value={data?.planeName}
          className="tw-mt-1 tw-py-1 tw-w-36 tw-px-4 border tw-rounded-xl focus:tw-outline-none  "
          type="text"
          name="planName"
          id="planname"
          placeholder="Plan Name"
          autoComplete="off"
        />
        <input
          onChange={onChange}
          value={data?.collectorsPriceDiscount}
          className="tw-mt-1 tw-py-1  tw-px-4 tw-w-full border  tw-rounded-xl "
          type="text"
          name="collectorsPriceDiscount"
          id="planname"
          placeholder="Discount Collector Amount %"
          autoComplete="off"
        />

        <input
          onChange={onChange}
          value={data?.ariasPriceDiscount}
          className="tw-mt-1 tw-py-1 tw-px-4 tw-w-full border  tw-rounded-xl "
          type="text"
          name="ariasPriceDiscount"
          id="disounctAriaAmount"
          placeholder="Discount Area Amount %"
          autoComplete="off"
        />
        {showDeleteButton ? (
          <button onClick={onDelete} className="add-wrok-actn-btn">
            <i class="fa-solid fa-trash"></i>
          </button>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

const AddSubsEdit = ({ onclickCloseSubsPlanBx }) => {
  const [cityAmount, setCityAmount] = useState(null);
  const [wasteColectAmount, setWasteColectAmount] = useState(null);
  const [variation, setVariation] = useState([{ id: 1 }]);
  // const [highestVariationId,setHighestVariationId]=useState(1)
  const highestVariationId = Math.max(...variation?.map((v) => v?.id));
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

  const handleVariationChange = (id) => (e) => {
    const newVariation = variation.map((v) => {
      if (v.id == id) {
        return { ...v, [e.target.name]: e.target.value };
      } else {
        return v;
      }
    });
    setVariation(newVariation);
  };
  const initialValues = {};
  const handleSubmit = async (data) => {
    const newData = { ...data, variations: variation };
    const res = await adminSubsAdd(newData);
  };
  return (
    <>
      <section className="add-work-area-edit-comp ">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          // validationSchema={validationLoginAdmin}
        >
          {({ handleBlur, handleChange, values, errors, touched, ...rest }) => {
            return (
              <Form className="add-work-area-edit-main-bx add-subs-plan tw-h-screen tw-overflow-scroll">
                <h6 className="banktext">
                  Add Subscription Plan (Add or Edit)
                </h6>

                <div>
                  <div className="addwrkarea-form-bx">
                    <div className="admin-login-fild">
                      <label htmlFor="City">No. of Waste Collector</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="collectrsCount"
                          id="City"
                          placeholder="No. of waste collector"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.collectrsCount}
                        />
                      </div>
                      {touched?.collectrsCount && errors?.collectrsCount ? (
                        <div style={{ color: "red" }}>
                          {errors?.collectrsCount}
                        </div>
                      ) : null}
                    </div>
                    <div className="admin-login-fild">
                      <label htmlFor="City">Price</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="collectorsPrice"
                          id="City"
                          placeholder="Waste Collectors Price"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.collectorsPrice}
                        />
                      </div>
                      {touched?.collectorsPrice && errors?.collectorsPrice ? (
                        <div style={{ color: "red" }}>
                          {errors?.collectorsPrice}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="tw-mt-3 tw-space-y-3">
                    <h6 className=" tw-text-left">
                      Discount Acording Subscription Period
                    </h6>
                    {variation?.map((data, i) => {
                      return (
                        <TimeVariationRow
                          data={data}
                          onChange={handleVariationChange(data.id)}
                          showDeleteButton={variation.length > 1}
                          onDelete={() => {
                            const newVariation = variation.filter(
                              (v) => v.id != data?.id
                            );
                            setVariation(newVariation);
                          }}
                          key={data.id}
                          id={data.id}
                        />
                      );
                    })}
                    <button
                      type="button"
                      onClick={() => {
                        setVariation([
                          ...variation,
                          { id: highestVariationId + 1 },
                        ]);
                      }}
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

                <button type="submit" className="add-work-area-btn">
                  Add Plan
                </button>

                <div
                  onClick={onclickCloseSubsPlanBx}
                  className="close-add-work-bx-btn"
                >
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
    </>
  );
};

export default AddSubsEdit;
