import React, { useEffect, useRef, useState } from "react";
import {
  franchiseAriasFetch,
  franchiseSubscriptionsFetch,
} from "../apis/franchise/plans";
import { useQuery } from "@tanstack/react-query";

const SelectArea = ({ selectedArias, setSelectedArias, onclickClose }) => {
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
  const { data: ariasSubs, refetch } = useQuery({
    queryKey: ["subscripionArias"],
    queryFn: () => franchiseAriasFetch(),
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
            arias?.[0].name,
            ariasSubs
          );
          setSubArias(subArias);
          setSelection((prev) => ({
            ...prev,
            city: name,
            pincode: pincodes?.[0]?.name,
            aria: arias?.[0].name,
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
            arias?.[0].name,
            ariasSubs
          );
          setSubArias(subArias);
          setSelection((prev) => ({
            ...prev,
            pincode: name,
            aria: arias?.[0].name,
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
    if (!ariasSubs || ariasSubs?.error) {
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
  return (
    <>
      <section className="selct-area-comp" onClick={onclickClose}>
        <div className="sel-area-main-bx" onClick={(e) => e.stopPropagation()}>
          <h5>Select Area</h5>

          <div className="seach-loct-bx">
            <input
              type="text"
              name="searchloct"
              id="searchloct"
              placeholder="Search area  "
            />
          </div>

          <div className="select-area-grid-bx">
            <div className="select-area-bx">
              <h6>State</h6>

              <div className="area-list">
                {states.map(({ name, id }) => (
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
                {cities?.map(({ name, id }) => (
                  <li
                    onClick={handeleSelection("city", name)}
                    className={`${name == selection.city ? "areaactive" : ""}`}
                  >
                    {" "}
                    <span> {name} </span>
                  </li>
                ))}
              </div>
            </div>

            <div className="select-area-bx">
              <h6>Area PIN</h6>

              <div className="area-list">
                {pincodes?.map(({ name, id }) => (
                  <li
                    onClick={handeleSelection("pincode", name)}
                    className={`${
                      name == selection.pincode ? "areaactive" : ""
                    }`}
                  >
                    {" "}
                    <span> {name} </span>
                  </li>
                ))}
              </div>
            </div>

            <div className="select-area-bx">
              <h6>Area</h6>

              <div className="area-list">
                {arias.map(({ name, id }) => (
                  <li
                    onClick={handeleSelection("aria", name)}
                    className={`${name == selection.aria ? "areaactive" : ""}`}
                  >
                    {" "}
                    <span> {name} </span>{" "}
                  </li>
                ))}
              </div>
            </div>

            <div className="select-area-bx">
              <h6>Sub Area</h6>

              <div className="area-list area-list2">
                {subArias?.map(
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
                          <p>
                            {" "}
                            Monthly Price : <span>₹{monthlyPrice}</span>{" "}
                          </p>
                          <p>
                            {" "}
                            Quaterly Price : <span>₹{quaterlyPrice}</span>{" "}
                          </p>
                        </div>
                        {!selectedArias.some((s) => s?.id == id) ? (
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
                            Add this area
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
                      class="fa-solid fa-circle-xmark"
                    ></i>
                  </span>
                </div>
              )
            )}
          </div>

          <div onClick={onclickClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectArea;
