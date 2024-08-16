import React, { useEffect, useState } from "react";
import { AutoComplete, Input } from "antd";
import { useQuery } from "@tanstack/react-query";
import {
  userAddressesAdd,
  userAddressesFetch,
  userAddressesUpdate,
} from "../apis/user";
import { userServicableAriasFetch } from "../apis/kbadpeUser/appoinment";
import { Form, Formik } from "formik";
import { validationAddressForm } from "../validators/user/addressFormValidator";

const AddAddressList = ({
  onclickClose,
  setSelectedAddress,
  selectedAddress,
  component = "user",
  userData = {},
}) => {
  const [addrsForm, setAddrsForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState({});
  const { data: addresses, refetch } = useQuery({
    queryKey: ["userAddress:appoinment"],
    queryFn: () => userAddressesFetch({ id: userData?.id }),
  });

  return (
    <>
      <section className="add-address-table-comp" onClick={onclickClose}>
        <div className="addrs-popup-bx" onClick={(e) => e.stopPropagation()}>
          <div className="addp--flex-bx">
            <h6>Address List</h6>
            <button
              onClick={() => {
                setIsEditForm(false);
                setAddrsForm(!addrsForm);
                setInitialFormValues({});
              }}
              className="add-new-addres-btn"
            >
              Add New Address
            </button>
          </div>

          <div className="all-user-table adres-table">
            <table>
              <thead>
                <tr>
                  <th>Def.</th>
                  <th>Add. Type</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Pin</th>
                  <th>Area</th>
                  <th>SubArea</th>
                  <th>Near by</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {!addresses?.error && addresses
                  ? addresses?.map(
                      ({
                        id,
                        street,
                        city,
                        state,
                        zipCode,
                        landmark,
                        locationType,
                        aria,
                        subAria,
                      }) => (
                        <tr key={id}>
                          <td></td>

                          <td>
                            {" "}
                            <span>{locationType}</span>{" "}
                          </td>

                          <td>
                            {" "}
                            <span> {street}</span>{" "}
                          </td>

                          <td>
                            {" "}
                            <span>{city}</span>{" "}
                          </td>

                          <td>
                            <span>{zipCode}</span>
                          </td>
                          <td>
                            <span>{aria}</span>
                          </td>
                          <td>
                            <span>{subAria}</span>
                          </td>
                          <td>
                            <span>{landmark}</span>
                          </td>
                          <td>
                            {" "}
                            <div className="act-btn-flex-bx">
                              <button
                                onClick={() => {
                                  setInitialFormValues({
                                    id,
                                    street,
                                    city,
                                    state,
                                    zipCode,
                                    landmark,
                                    locationType,
                                    aria,
                                    subAria,
                                  });
                                  setAddrsForm(!addrsForm);
                                  setIsEditForm(true);
                                }}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </button>

                              <button>
                                <i className="fa-regular fa-trash-can"></i>
                              </button>

                              {selectedAddress?.id != id ? (
                                <div
                                  onClick={() => {
                                    setSelectedAddress({
                                      id,
                                      street,
                                      city,
                                      state,
                                      zipCode,
                                      landmark,
                                      locationType,
                                      aria,
                                      subAria,
                                    });
                                    onclickClose();
                                  }}
                                  className="chose-ths-btn "
                                >
                                  Choose this
                                </div>
                              ) : (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                  }}
                                >
                                  &#9989;
                                </div>
                              )}
                            </div>{" "}
                          </td>
                        </tr>
                      )
                    )
                  : null}
              </tbody>
            </table>
          </div>

          <div onClick={onclickClose} className="close-btn close-btn-adres">
            <i className="fa-solid fa-xmark"></i>
          </div>

          {addrsForm ? (
            <div
              className={
                addrsForm
                  ? "add-addres-form-bx addresactive"
                  : "add-addres-form-bx"
              }
            >
              <AddressForm
                component={component}
                userData={userData}
                setAddrsForm={setAddrsForm}
                initialFormValues={initialFormValues}
                isEditForm={isEditForm}
                refetch={refetch}
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export const AddressForm = ({
  initialFormValues,
  isEditForm,
  setAddrsForm,
  refetch,
  userData,
  component,
}) => {
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [arias, setArias] = useState([]);
  const [subArias, setSubArias] = useState([]);
  const [selection, setSelection] = useState({
    state: "",
    city: "",
    pincode: "",
    aria: "",
    subAria: "",
  });
  const getCities = (state, res) => {
    return [
      ...new Set(
        res
          .filter(
            (e) =>
              e?.state?.toLowerCase()?.trim() == state?.toLowerCase()?.trim()
          )
          .map((e, i) => e?.city)
      ),
    ].map((name, i) => ({ id: i, name }));
  };

  const getPincodes = (state, city, res) => {
    return [
      ...new Set(
        res
          .filter(
            (e) =>
              e.state?.toLowerCase()?.trim() == state?.toLowerCase()?.trim() &&
              e.city?.toLowerCase()?.trim() == city?.toLowerCase()?.trim()
          )
          .map((e, i) => e?.pincode)
      ),
    ].map((name, i) => ({ id: i, name }));
  };
  const getArias = (state, city, pincode, res) => {
    return [
      ...new Set(
        res
          .filter(
            (e) =>
              e.state?.toLowerCase()?.trim() == state?.toLowerCase()?.trim() &&
              e.city?.toLowerCase()?.trim() == city?.toLowerCase()?.trim() &&
              e?.pincode?.toLowerCase()?.trim() ==
                pincode?.toLowerCase()?.trim()
          )
          .map((e, i) => e?.ariaName)
      ),
    ].map((name, i) => ({ id: i, name }));
  };

  const getSubArias = (state, city, pincode, aria, res) => {
    return res.filter(
      (e) =>
        e.state?.toLowerCase()?.trim() == state?.toLowerCase()?.trim() &&
        e.city?.toLowerCase()?.trim() == city?.toLowerCase()?.trim() &&
        e?.pincode?.toLowerCase()?.trim() == pincode?.toLowerCase()?.trim() &&
        e?.ariaName?.toLowerCase()?.trim() == aria?.toLowerCase()?.trim()
    );
  };

  const handleAddressSubmit = async (data) => {
    if (isEditForm) {
      await userAddressesUpdate({ ...data, userId: userData?.id });
    } else {
      await userAddressesAdd({ ...data, userId: userData?.id });
    }
    setAddrsForm(false);
    refetch();
  };
  const { data: servicableAddresses } = useQuery({
    queryKey: ["servicableAddresses:appoinment"],
    queryFn: () => userServicableAriasFetch(),
  });

  const getStates = (res) =>
    [...new Set(res.map((e, i) => e?.state))].map((name, i) => ({
      id: i,
      name,
    }));

  useEffect(() => {
    if (
      servicableAddresses?.error ||
      !servicableAddresses ||
      !servicableAddresses?.length
    ) {
      return;
    }
    const state = getStates(servicableAddresses);
    setStates(state);
  }, [servicableAddresses]);
  useEffect(() => {
    setSelection({
      state: initialFormValues?.state || "",
      city: initialFormValues?.city || "",
      pincode: initialFormValues?.zipCode || "",
      aria: initialFormValues?.aria || "",
      subAria: initialFormValues?.subAria || "",
    });
    if (
      servicableAddresses?.error ||
      !servicableAddresses ||
      !servicableAddresses?.length
    ) {
      return;
    }
    if (!initialFormValues?.state) return;
    const cities = getCities(initialFormValues?.state, servicableAddresses);
    setCity(
      cities?.map(({ name, id }) => ({
        value: name,
        lable: name,
      }))
    );
    if (!initialFormValues?.city) return;
    const pins = getPincodes(
      initialFormValues?.state,
      initialFormValues?.city,
      servicableAddresses
    );
    setPincodes(
      pins.map(({ name }) => ({
        value: name,
        lable: name,
      }))
    );
    if (!initialFormValues?.zipCode) return;
    const arias = getArias(
      initialFormValues?.state,
      initialFormValues?.city,
      initialFormValues?.zipCode,
      servicableAddresses
    );
    setArias(
      arias?.map(({ name }) => ({
        value: name,
        lable: name,
      }))
    );
    if (!initialFormValues?.aria) return;
    const subArias = getSubArias(
      initialFormValues?.state,
      initialFormValues?.city,
      initialFormValues?.zipCode,
      initialFormValues?.aria,
      servicableAddresses
    );
    setSubArias(
      subArias?.map(({ subAriaName }) => ({
        value: subAriaName,
        lable: subAriaName,
      }))
    );
  }, []);
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleAddressSubmit}
      validationSchema={validationAddressForm}
    >
      {({ handleBlur, handleChange, values, errors, touched, ...rest }) => {
        return (
          <Form>
            <div className="address-add-type-grid-bx">
              <div className="apnt-inpt-bx apnt-inpt-bx-address  spe-apnt-inpt-bx">
                <div
                  className={`${
                    values?.locationType ? "apnt-inpt-bx-w" : "apnt-inpt-bx-s"
                  }`}
                >
                  <select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.locationType}
                    name="locationType"
                    id="addresstype"
                  >
                    <option value="" hidden>
                      {" "}
                      Address Type
                    </option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                    <option value="shop">Shop</option>
                    <option value="mall">Mall/Outlet</option>
                  </select>
                </div>
                {touched?.locationType && errors?.locationType ? (
                  <div className="field-text" style={{ color: "red" }}>
                    {errors?.locationType}
                  </div>
                ) : null}
              </div>

              <div className="apnt-inpt-bx apnt-inpt-bx-address apnt-inpt-bx-a spe-apnt-inpt-bx">
                <input
                  type="text"
                  name="street"
                  id="address"
                  placeholder="Wing/Flat No./Building Name/Street No./House No./Colony Name "
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.street}
                />
                {touched?.street && errors?.street ? (
                  <div className="field-text" style={{ color: "red" }}>
                    {errors?.street}
                  </div>
                ) : null}
              </div>

              <div className="apnt-inpt-bx apnt-inpt-bx-address spe-apnt-inpt-bx">
                <div
                  className={`${
                    values?.state ? "apnt-inpt-bx-w" : "apnt-inpt-bx-s"
                  }`}
                >
                  <select
                    onChange={(e) => {
                      setSelection((prev) => ({
                        ...prev,
                        state: e.target.value,
                      }));
                      const cities = getCities(
                        e.target.value,
                        servicableAddresses
                      );
                      setCity(
                        cities?.map(({ name, id }) => ({
                          value: name,
                          lable: name,
                        }))
                      );
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={values?.state}
                    name="state"
                    id="addresstype"
                  >
                    <option value="" hidden>
                      {" "}
                      State
                    </option>
                    {states?.map(({ name, id }) => (
                      <option key={id} value={name}>
                        {name?.slice(0, 1)?.toUpperCase() + name?.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                {touched?.state && errors?.state ? (
                  <div className="field-text" style={{ color: "red" }}>
                    {errors?.state}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="addrs-form-grid">
              <div>
                <AutoComplete
                  optionSelectedColor={"#050505"}
                  className="apnt-inpt-bx-autotype"
                  options={city}
                  filterOption={true}
                  placeholder="Enter City here"
                  onChange={(v) => {
                    values.city = v;
                    setSelection((prev) => ({ ...prev, city: v }));
                    const pins = getPincodes(
                      selection?.state,
                      v,
                      servicableAddresses
                    );
                    setPincodes(
                      pins.map(({ name }) => ({
                        value: name,
                        lable: name,
                      }))
                    );
                    handleBlur({ target: { name: "city" } });
                  }}
                  onBlur={(e) => ((e.target.name = "city"), handleBlur(e))}
                  defaultValue={values?.city}
                />
                {touched?.city && errors?.city ? (
                  <div className="field-text" style={{ color: "red" }}>
                    {errors?.city}
                  </div>
                ) : null}
              </div>
              <div>
                <AutoComplete
                  optionSelectedColor={"#050505"}
                  className="apnt-inpt-bx-autotype"
                  options={pincodes}
                  filterOption={true}
                  placeholder="Enter Pin here"
                  onChange={(v) => {
                    values.zipCode = v;
                    setSelection((prev) => ({ ...prev, pincode: v }));
                    const arias = getArias(
                      selection?.state,
                      selection?.city,
                      v,
                      servicableAddresses
                    );
                    setArias(
                      arias?.map(({ name }) => ({
                        value: name,
                        lable: name,
                      }))
                    );
                    handleBlur({ target: { name: "zipCode" } });
                  }}
                  onBlur={(e) => ((e.target.name = "zipCode"), handleBlur(e))}
                  defaultValue={values?.zipCode}
                />
                {touched?.zipCode && errors?.zipCode ? (
                  <div className="field-text" style={{ color: "red" }}>
                    {errors?.zipCode}
                  </div>
                ) : null}
              </div>
              <div>
                <AutoComplete
                  optionSelectedColor={"#050505"}
                  className="apnt-inpt-bx-autotype"
                  options={arias}
                  filterOption={true}
                  placeholder="Enter Area"
                  onChange={(v) => {
                    values.aria = v;
                    setSelection((prev) => ({ ...prev, aria: v }));
                    const subArias = getSubArias(
                      selection?.state,
                      selection?.city,
                      selection?.pincode,
                      v,
                      servicableAddresses
                    );
                    setSubArias(
                      subArias?.map(({ subAriaName }) => ({
                        value: subAriaName,
                        lable: subAriaName,
                      }))
                    );
                    handleBlur({ target: { name: "aria" } });
                  }}
                  onBlur={(e) => ((e.target.name = "aria"), handleBlur(e))}
                  defaultValue={values?.aria}
                />
                {touched?.aria && errors?.aria ? (
                  <div className="field-text" style={{ color: "red" }}>
                    {errors?.aria}
                  </div>
                ) : null}
              </div>
              <div>
                <AutoComplete
                  optionSelectedColor={"#050505"}
                  className="apnt-inpt-bx-autotype"
                  options={subArias}
                  filterOption={true}
                  placeholder="Enter Sub Area"
                  onChange={(v) => (
                    (values.subAria = v),
                    handleBlur({ target: { name: "subAria" } })
                  )}
                  onBlur={(e) => ((e.target.name = "subAria"), handleBlur(e))}
                  defaultValue={values?.subAria}
                />
                {touched?.subAria && errors?.subAria ? (
                  <div className="field-text" style={{ color: "red" }}>
                    {errors?.subAria}
                  </div>
                ) : null}
              </div>
              <div>
                <AutoComplete
                  optionSelectedColor={"#050505"}
                  className="apnt-inpt-bx-autotype"
                  filterOption={true}
                  placeholder="Near Landmark"
                  onChange={(v) => (
                    (values.landmark = v),
                    handleBlur({ target: { name: "landmark" } })
                  )}
                  onBlur={(e) => ((e.target.name = "landmark"), handleBlur(e))}
                  defaultValue={values?.landmark}
                />
                {touched?.landmark && errors?.landmark ? (
                  <div className="field-text" style={{ color: "red" }}>
                    {errors?.landmark}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="apnt-form-submit-btn apnt-form-submit-btn-add-new-adres "
              >
                {isEditForm ? "Update Address" : "Add Address"}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default AddAddressList;
