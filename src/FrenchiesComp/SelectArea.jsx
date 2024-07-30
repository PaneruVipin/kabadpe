import React, { useEffect, useRef, useState } from "react";
import {
  franchiseAriasFetch,
  franchiseSubscriptionsFetch,
} from "../apis/franchise/plans";
import { useQuery } from "@tanstack/react-query";
import { search, sort } from "../lib/array";

const SelectArea = ({
  selectedArias,
  setSelectedArias,
  onclickClose,
  component = "franchise",
}) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [arias, setArias] = useState([]);
  const [subArias, setSubArias] = useState([]);
  const [selection, setSelection] = useState({
    state: "",
    city: "",
    pincode: "",
    aria: "",
  });
  const [ariasSubs, setariaSubs] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const { data: dataAriasSubs, refetch } = useQuery({
    queryKey: ["subscripionArias"],
    queryFn: () => franchiseAriasFetch(),
  });

  useEffect(() => {
    if (!dataAriasSubs?.error) {
      setariaSubs(search(dataAriasSubs, searchQuery));
    }
  }, [dataAriasSubs, searchQuery]);
  const getStates = (res) =>
    [...new Set(res.map((e, i) => e?.state))].map((name, i) => ({
      id: i,
      name,
    }));

  const getCities = (state, res) => {
    return [
      ...new Set(
        res
          ?.filter(
            (e) =>
              e?.state?.toLowerCase()?.trim() == state?.toLowerCase()?.trim()
          )
          .map((e, i) => e?.city?.toLowerCase()?.trim())
      ),
    ].map((name, i) => ({ id: i, name }));
  };
  const getPincodes = (state, city, res) => {
    return [
      ...new Set(
        res
          ?.filter(
            (e) =>
              e.state?.toLowerCase()?.trim() == state?.toLowerCase()?.trim() &&
              e.city?.toLowerCase()?.trim() == city?.toLowerCase()?.trim()
          )
          ?.map((e, i) => e?.pincode?.toLowerCase()?.trim())
      ),
    ].map((name, i) => ({ id: i, name }));
  };
  const getArias = (state, city, pincode, res) => {
    return [
      ...new Set(
        res
          ?.filter(
            (e) =>
              e.state?.toLowerCase()?.trim() == state?.toLowerCase()?.trim() &&
              e.city?.toLowerCase()?.trim() == city?.toLowerCase()?.trim() &&
              e?.pincode?.toLowerCase()?.trim() ==
                pincode?.toLowerCase()?.trim()
          )
          .map((e, i) => e?.ariaName?.toLowerCase()?.trim())
      ),
    ].map((name, i) => ({ id: i, name }));
  };

  const getSubArias = (state, city, pincode, aria, res) => {
    return res?.filter(
      (e) =>
        e?.state?.toLowerCase()?.trim() == state?.toLowerCase()?.trim() &&
        e?.city?.toLowerCase()?.trim() == city?.toLowerCase()?.trim() &&
        e?.pincode?.toLowerCase()?.trim() == pincode?.toLowerCase()?.trim() &&
        e?.ariaName?.toLowerCase()?.trim() == aria?.toLowerCase()?.trim()
    );
  };
  const handeleSelection = (key, name) => {
    return (e) => {
      switch (key) {
        case "state": {
          const cities = getCities(name, ariasSubs);
          setCities(cities);
          const pincodes = getPincodes(name, cities?.[0]?.name, ariasSubs);
          setPincodes(pincodes);
          const arias = getArias(
            name,
            cities?.[0]?.name,
            pincodes?.[0]?.name,
            ariasSubs
          );
          setArias(arias);
          const subArias = getSubArias(
            name,
            cities?.[0]?.name,
            pincodes?.[0]?.name,
            arias?.[0]?.name,
            ariasSubs
          );
          setSubArias(subArias);
          setSelection({
            state: name,
            city: cities?.[0]?.name,
            pincode: pincodes?.[0]?.name,
            aria: arias?.[0]?.name,
          });
          break;
        }
        case "city": {
          const pincodes = getPincodes(selection.state, name, ariasSubs);
          setPincodes(pincodes);
          const arias = getArias(
            selection.state,
            name,
            pincodes?.[0]?.name,
            ariasSubs
          );
          setArias(arias);
          const subArias = getSubArias(
            selection.state,
            name,
            pincodes?.[0]?.name,
            arias?.[0]?.name,
            ariasSubs
          );
          setSubArias(subArias);
          setSelection((prev) => ({
            ...prev,
            city: name,
            pincode: pincodes?.[0]?.name,
            aria: arias?.[0]?.name,
          }));
          break;
        }
        case "pincode": {
          const arias = getArias(
            selection.state,
            selection.city,
            name,
            ariasSubs
          );
          setArias(arias);
          const subArias = getSubArias(
            selection.state,
            selection.city,
            name,
            arias?.[0]?.name,
            ariasSubs
          );
          setSubArias(subArias);
          setSelection((prev) => ({
            ...prev,
            pincode: name,
            aria: arias?.[0]?.name,
          }));
          break;
        }
        case "aria": {
          const subArias = getSubArias(
            selection.state,
            selection.city,
            selection.pincode,
            name,
            ariasSubs
          );
          setSubArias(subArias);
          setSelection((prev) => ({
            ...prev,
            aria: name,
          }));
          break;
        }
      }
    };
  };

  const handleAddThisAria = (aria) => {
    return () => {
      setSelectedArias([...selectedArias, aria]);
    };
  };

  const handleRemoveAria = (id) => () => {
    const newArias = selectedArias.filter((s) => s?.id !== id);
    setSelectedArias(newArias);
  };

  useEffect(() => {
    if (!ariasSubs || !ariasSubs?.length || ariasSubs?.error) {
      // setStates([]);
      // setCities([]);
      // setPincodes({
      //   state: "",
      //   city: "",
      //   pincode: "",
      //   aria: "",
      // });
      // setSelection([]);
      // setSubArias([]);
      // setArias([]);
      return;
    }
    const states = getStates(ariasSubs);
    setStates(states);
    if (!states?.length) {
      return;
    }
    setSelection((selection) => ({ ...selection, state: states[0]?.name }));
    const cities = getCities(states[0]?.name, ariasSubs);
    setCities(cities);
    if (!cities?.length) {
      return;
    }
    setSelection((selection) => ({ ...selection, city: cities[0]?.name }));
    const pincodes = getPincodes(states[0]?.name, cities[0]?.name, ariasSubs);
    setPincodes(pincodes);
    if (!pincodes?.length) {
      return;
    }
    setSelection((selection) => ({ ...selection, pincode: pincodes[0]?.name }));
    const arias = getArias(
      states[0]?.name,
      cities[0]?.name,
      pincodes[0]?.name,
      ariasSubs
    );
    setArias(arias);
    if (!arias?.length) {
      return;
    }
    setSelection((selection) => ({ ...selection, aria: arias[0]?.name }));
    const subArias = getSubArias(
      states[0]?.name,
      cities[0]?.name,
      pincodes[0]?.name,
      arias[0]?.name,
      ariasSubs
    );
    setSubArias(subArias);
  }, [ariasSubs]);

  const handleAddRemove = (key, name, type = "add") => {
    let fn = type == "add" ? handleAddAll : handleRemoveAll;
    return (e) => {
      switch (key) {
        case "state": {
          const cities = getCities(name, ariasSubs);
          const pincodes = getPincodes(name, cities?.[0]?.name, ariasSubs);
          const arias = getArias(
            name,
            cities?.[0]?.name,
            pincodes?.[0]?.name,
            ariasSubs
          );
          const subArias = getSubArias(
            name,
            cities?.[0]?.name,
            pincodes?.[0]?.name,
            arias?.[0]?.name,
            ariasSubs
          );
          fn(subArias);
          break;
        }
        case "city": {
          const pincodes = getPincodes(selection.state, name, ariasSubs);
          const arias = getArias(
            selection.state,
            name,
            pincodes?.[0]?.name,
            ariasSubs
          );
          const subArias = getSubArias(
            selection.state,
            name,
            pincodes?.[0]?.name,
            arias?.[0]?.name,
            ariasSubs
          );
          fn(subArias);
          break;
        }
        case "pincode": {
          const arias = getArias(
            selection.state,
            selection.city,
            name,
            ariasSubs
          );
          const subArias = getSubArias(
            selection.state,
            selection.city,
            name,
            arias?.[0]?.name,
            ariasSubs
          );
          fn(subArias);
          break;
        }
        case "aria": {
          const subArias = getSubArias(
            selection.state,
            selection.city,
            selection.pincode,
            name,
            ariasSubs
          );
          fn(subArias);
          break;
        }
      }
    };
  };
  const handleAddAll = (dep) => {
    dep?.forEach((a) => {
      const exist = selectedArias?.find((s) => s?.id == a?.id);
      if (!exist) {
        setSelectedArias((prev) => [...prev, a]);
      }
    });
  };
  const handleRemoveAll = (dep) => {
    const newArias = selectedArias?.filter(
      (s) => !dep?.find((a) => a?.id == s?.id)
    );
    setSelectedArias(newArias);
  };
  const handleAddRemoveAllToggle = (dep) => {
    return (e) => {
      if (e.target.checked) {
        handleAddAll(dep);
      } else {
        handleRemoveAll(dep);
      }
    };
  };

  const isAllSelected = (dep) => {
    return !dep
      ?.map(({ id }) => selectedArias?.some((e) => e?.id == id))
      ?.includes(false);
  };
  const isOthersAllSelected = (key, name) => {
    return (e) => {
      switch (key) {
        case "state": {
          const cities = getCities(name, ariasSubs);
          const pincodes = getPincodes(name, cities?.[0]?.name, ariasSubs);
          const arias = getArias(
            name,
            cities?.[0]?.name,
            pincodes?.[0]?.name,
            ariasSubs
          );
          const subArias = getSubArias(
            name,
            cities?.[0]?.name,
            pincodes?.[0]?.name,
            arias?.[0]?.name,
            ariasSubs
          );
          return isAllSelected(subArias);
          break;
        }
        case "city": {
          const pincodes = getPincodes(selection?.state, name, ariasSubs);
          const arias = getArias(
            selection.state,
            name,
            pincodes?.[0]?.name,
            ariasSubs
          );
          const subArias = getSubArias(
            selection.state,
            name,
            pincodes?.[0]?.name,
            arias?.[0]?.name,
            ariasSubs
          );
          return isAllSelected(subArias);
          break;
        }
        case "pincode": {
          const arias = getArias(
            selection.state,
            selection.city,
            name,
            ariasSubs
          );
          const subArias = getSubArias(
            selection.state,
            selection.city,
            name,
            arias?.[0]?.name,
            ariasSubs
          );
          return isAllSelected(subArias);
          break;
        }
        case "aria": {
          const subArias = getSubArias(
            selection.state,
            selection.city,
            selection.pincode,
            name,
            ariasSubs
          );
          return isAllSelected(subArias);
          break;
        }
      }
    };
  };
  return (
    <>
      <section className="selct-area-comp" onClick={onclickClose}>
        <div
          style={{ width: "90%" }}
          className="sel-area-main-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h5>Select Area</h5>

          <div className="seach-loct-bx">
            <input
              type="text"
              name="searchloct"
              id="searchloct"
              placeholder="Search area  "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value?.trimStart())}
            />
          </div>

          <div className="select-area-grid-bx">
            <div className="select-area-bx">
              <h6>State</h6>

              <div className="area-list">
                {sort(states, ["name"])?.map(({ name, id }) => (
                  <li
                    onClick={handeleSelection("state", name)}
                    className={`${name == selection.state ? "areaactive" : ""}`}
                  >
                    <span>{name} </span>
                  </li>
                ))}
              </div>
            </div>

            <div className="select-area-bx">
              <h6>City</h6>

              <div className="area-list">
                <li>
                  <div className="sub-area-price-bx">
                    <div className="left-area-price-text">
                      <span>All</span>
                    </div>
                    <input
                      checked={isOthersAllSelected("state", selection?.state)()}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleAddRemove("state", selection?.state)();
                        } else {
                          handleAddRemove(
                            "state",
                            selection?.state,
                            "remove"
                          )();
                        }
                      }}
                      type="checkbox"
                    ></input>
                  </div>
                </li>
                {sort(cities, ["name"])?.map(({ name, id }) => (
                  <li
                    onClick={handeleSelection("city", name)}
                    className={`${name == selection.city ? "areaactive" : ""}`}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {" "}
                    <span> {name} </span>
                    {!isOthersAllSelected("city", name)() ? (
                      <button
                        onClick={handleAddRemove("city", name)}
                        className="add-area-btn-2 "
                      >
                        Add
                      </button>
                    ) : (
                      <div>Added</div>
                    )}
                  </li>
                ))}
              </div>
            </div>

            <div className="select-area-bx">
              <h6>Area PIN</h6>

              <div className="area-list">
                <li>
                  <div className="sub-area-price-bx">
                    <div className="left-area-price-text">
                      <span>All</span>
                    </div>
                    <input
                      checked={isOthersAllSelected("city", selection?.city)()}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleAddRemove("city", selection?.city)();
                        } else {
                          handleAddRemove("city", selection?.city, "remove")();
                        }
                      }}
                      type="checkbox"
                    ></input>
                  </div>
                </li>
                {sort(pincodes, ["name"])?.map(({ name, id }) => (
                  <li
                    onClick={handeleSelection("pincode", name)}
                    className={`${
                      name == selection.pincode ? "areaactive" : ""
                    }`}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {" "}
                    <span> {name} </span>
                    {!isOthersAllSelected("pincode", name)() ? (
                      <button
                        onClick={handleAddRemove("pincode", name)}
                        className="add-area-btn-2 "
                      >
                        Add
                      </button>
                    ) : (
                      <div>Added</div>
                    )}
                  </li>
                ))}
              </div>
            </div>

            <div className="select-area-bx">
              <h6>Area</h6>

              <div className="area-list">
                <li>
                  <div className="sub-area-price-bx">
                    <div className="left-area-price-text">
                      <span>All</span>
                    </div>
                    <input
                      checked={isOthersAllSelected(
                        "pincode",
                        selection?.pincode
                      )()}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleAddRemove("pincode", selection?.pincode)();
                        } else {
                          handleAddRemove(
                            "pincode",
                            selection?.pincode,
                            "remove"
                          )();
                        }
                      }}
                      type="checkbox"
                    ></input>
                  </div>
                </li>
                {sort(arias, ["name"])?.map(({ name, id }) => (
                  <li
                    onClick={handeleSelection("aria", name)}
                    className={`${name == selection.aria ? "areaactive" : ""}`}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {" "}
                    <span> {name} </span>{" "}
                    {!isOthersAllSelected("aria", name)() ? (
                      <button
                        onClick={handleAddRemove("aria", name)}
                        className="add-area-btn-2 "
                      >
                        Add
                      </button>
                    ) : (
                      <div>Added</div>
                    )}
                  </li>
                ))}
              </div>
            </div>

            <div className="select-area-bx">
              <h6>Sub Area</h6>

              <div className="area-list area-list2">
                <li>
                  <div className="sub-area-price-bx">
                    <div className="left-area-price-text">
                      <span>All</span>
                      {/* {component != "worker" ? (
                        <>
                          <p>
                            {" "}
                            Monthly Price : <span>
                              ₹{monthlyPrice}
                            </span>{" "}
                          </p>
                          <p>
                            {" "}
                            Quaterly Price :{" "}
                            <span>₹{quaterlyPrice}</span>{" "}
                          </p>
                        </>
                      ) : null} */}
                    </div>
                    <input
                      checked={isAllSelected(subArias)}
                      onChange={handleAddRemoveAllToggle(subArias)}
                      type="checkbox"
                    ></input>
                  </div>
                </li>
                {sort(subArias, ["subAriaName"])?.map(
                  ({
                    ariaName,
                    ariaStatus,
                    city,
                    id,
                    monthlyPrice,
                    pincode,
                    quaterlyPrice,
                    state,
                    subAriaName,
                  }) => (
                    <li>
                      <div className="sub-area-price-bx">
                        <div className="left-area-price-text">
                          <span> {subAriaName}</span>
                          {component != "worker" ? (
                            <>
                              <p>
                                {" "}
                                Monthly Price : <span>
                                  ₹{monthlyPrice}
                                </span>{" "}
                              </p>
                              <p>
                                {" "}
                                Quaterly Price : <span>
                                  ₹{quaterlyPrice}
                                </span>{" "}
                              </p>
                            </>
                          ) : null}
                        </div>
                        {!selectedArias?.some((s) => s?.id == id) ? (
                          <button
                            onClick={handleAddThisAria({
                              ariaName,
                              ariaStatus,
                              city,
                              id,
                              monthlyPrice,
                              pincode,
                              quaterlyPrice,
                              state,
                              subAriaName,
                            })}
                            className="add-area-btn "
                          >
                            Add
                          </button>
                        ) : (
                          <p>Added</p>
                        )}
                      </div>
                    </li>
                  )
                )}
              </div>
            </div>
          </div>
          {selectedArias?.length ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="sub-area-show-list-flex-bx">
                {selectedArias?.map(
                  ({
                    ariaName,
                    ariaStatus,
                    city,
                    id,
                    monthlyPrice,
                    pincode,
                    quaterlyPrice,
                    state,
                    subAriaName,
                  }) => (
                    <div className="area-show-bx">
                      <span>
                        {subAriaName}{" "}
                        <i
                          onClick={handleRemoveAria(id)}
                          className="fa-solid fa-circle-xmark"
                        ></i>
                      </span>
                    </div>
                  )
                )}
              </div>
              <button
                onClick={onclickClose}
                style={{ width: "100px", height: "40px" }}
                className="next-button "
              >
                Next
              </button>
            </div>
          ) : null}
          <div onClick={onclickClose} className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectArea;
