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
}) => {
  const [addrsForm, setAddrsForm] = useState(false);
  const [mark, setMark] = useState(false);
  const [states, setStates] = useState([]);
  const [isEditForm, setIsEditForm] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState({});
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
  const { data: addresses, refetch } = useQuery({
    queryKey: ["userAddress:appoinment"],
    queryFn: () => userAddressesFetch(),
  });

  const { data: servicableAddresses } = useQuery({
    queryKey: ["servicableAddresses:appoinment"],
    queryFn: () => userServicableAriasFetch(),
  });

  const getStates = (res) =>
    [...new Set(res.map((e, i) => e?.state))].map((name, i) => ({
      id: i,
      name,
    }));

  const getCities = (state, res) => {
    return [
      ...new Set(res.filter((e) => e.state == state).map((e, i) => e?.city)),
    ].map((name, i) => ({ id: i, name }));
  };

  const getPincodes = (state, city, res) => {
    return [
      ...new Set(
        res
          .filter((e) => e.state == state && e.city == city)
          .map((e, i) => e?.pincode)
      ),
    ].map((name, i) => ({ id: i, name }));
  };
  const getArias = (state, city, pincode, res) => {
    return [
      ...new Set(
        res
          .filter(
            (e) => e.state == state && e.city == city && e?.pincode == pincode
          )
          .map((e, i) => e?.ariaName)
      ),
    ].map((name, i) => ({ id: i, name }));
  };

  const getSubArias = (state, city, pincode, aria, res) => {
    return res.filter(
      (e) =>
        e.state == state &&
        e.city == city &&
        e?.pincode == pincode &&
        e?.ariaName == aria
    );
  };

  const handleAddressSubmit = async (data) => {
    if (isEditForm) {
      await userAddressesUpdate(data);
    } else {
      await userAddressesAdd(data);
    }
    setAddrsForm(false);
    refetch();
  };
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
                          <td>
                            {/* {selectedAddress?.id == id ? (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                &#9989;
                              </div>
                            ) : null} */}
                          </td>

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
                                <i class="fa-regular fa-pen-to-square"></i>
                              </button>

                              <button>
                                <i class="fa-regular fa-trash-can"></i>
                              </button>

                              {selectedAddress?.id != id ? (
                                <div
                                  onClick={() =>
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
                                    })
                                  }
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
            <i class="fa-solid fa-xmark"></i>
          </div>

          {addrsForm ? (
            <div
              className={
                addrsForm
                  ? "add-addres-form-bx addresactive"
                  : "add-addres-form-bx"
              }
            >
              <Formik
                initialValues={initialFormValues}
                onSubmit={handleAddressSubmit}
                validationSchema={validationAddressForm}
              >
                {({
                  handleBlur,
                  handleChange,
                  values,
                  errors,
                  touched,
                  ...rest
                }) => {
                  return (
                    <Form>
                      <div className="address-add-type-grid-bx">
                        <div className="apnt-inpt-bx apnt-inpt-bx-address apnt-inpt-bx-s ">
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
                          {touched?.locationType && errors?.locationType ? (
                            <div style={{ color: "red" }}>
                              {errors?.locationType}
                            </div>
                          ) : null}
                        </div>

                        <div className="apnt-inpt-bx apnt-inpt-bx-address apnt-inpt-bx-a ">
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
                            <div style={{ color: "red" }}>{errors?.street}</div>
                          ) : null}
                        </div>

                        <div className="apnt-inpt-bx apnt-inpt-bx-address apnt-inpt-bx-s ">
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
                                {name?.slice(0, 1)?.toUpperCase() +
                                  name?.slice(1)}
                              </option>
                            ))}
                          </select>
                          {touched?.state && errors?.state ? (
                            <div style={{ color: "red" }}>{errors?.state}</div>
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
                            onBlur={(e) => (
                              (e.target.name = "city"), handleBlur(e)
                            )}
                            defaultValue={values?.city}
                          />
                          {touched?.city && errors?.city ? (
                            <div style={{ color: "red" }}>{errors?.city}</div>
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
                            onBlur={(e) => (
                              (e.target.name = "zipCode"), handleBlur(e)
                            )}
                            defaultValue={values?.zipCode}
                          />
                          {touched?.zipCode && errors?.zipCode ? (
                            <div style={{ color: "red" }}>
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
                            onBlur={(e) => (
                              (e.target.name = "aria"), handleBlur(e)
                            )}
                            defaultValue={values?.aria}
                          />
                          {touched?.aria && errors?.aria ? (
                            <div style={{ color: "red" }}>{errors?.aria}</div>
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
                            onBlur={(e) => (
                              (e.target.name = "subAria"), handleBlur(e)
                            )}
                            defaultValue={values?.subAria}
                          />
                          {touched?.subAria && errors?.subAria ? (
                            <div style={{ color: "red" }}>
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
                            onBlur={(e) => (
                              (e.target.name = "landmark"), handleBlur(e)
                            )}
                            defaultValue={values?.landmark}
                          />
                          {touched?.landmark && errors?.landmark ? (
                            <div style={{ color: "red" }}>
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
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default AddAddressList;
