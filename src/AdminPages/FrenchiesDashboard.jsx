import React, { useEffect, useState } from "react";

const FrenchiesDashboard = () => {
  const [selectedArias, setSelectedArias] = useState();
  const [cities, setCities] = useState([]);
  const [arias, setArias] = useState([]);
  const [subArias, setSubArias] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState({});
  const res = [
    {
      id: 1,
      state: "delhi",
      city: "laxmi nagar",
      area: "kundan nagar",
      subArea: "kundan nagar",
    },
    {
      id: 2,
      state: "delhi",
      city: "laxmi nagar",
      area: "kundan nagar",
      subArea: "other nagar",
    },
    {
      id: 2,
      state: "state 2",
      city: "laxmi nagar",
      area: "kundan nagar",
      subArea: "kundan nagar",
    },
    {
      id: 2,
      state: "state 3",
      city: "laxmi nagar",
      area: "kundan nagar",
      subArea: "kundan nagar",
    },
  ];

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

  const getArias = (state, city, res) => {
    return [
      ...new Set(
        res
          .filter((e) => e.state == state && e.city == city)
          .map((e, i) => e?.area)
      ),
    ].map((name, i) => ({ id: i, name }));
  };

  const getSubArias = (state, city, aria, res) => {
    return [
      ...new Set(
        res
          .filter((e) => e.state == state && e.city == city && e.area == aria)
          .map((e, i) => e?.subArea)
      ),
    ].map((name, i) => ({ id: i, name }));
  };
  const uppercase = (inputString) =>
    inputString
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");

  const satates = getStates(res);
  useEffect(() => {
    const cities = getCities(res[0].state, res);
    const arias = getArias(res[0].state, res[0].city, res);
    const subArias = getSubArias(res[0].state, res[0].city, res[0].area, res);
    setSelectedEntity({
      state: res[0].state,
      city: res[0].city,
      aria: res[0].area,
    });
    setArias(arias);
    setCities(cities);
    setSubArias(subArias);
  }, []);
  const handleStateClick = (name) => {
    if (selectedEntity?.state != name) {
      setSelectedEntity({ state: name });
    }
  };
  const handleCityClick = () => {};
  const handleAriaClick = () => {};
  const handleSubAriaClick = () => {};
  return (
    <div
      className={
        " tw-flex tw-flex-col  tw-justify-center tw-w-full tw-text-[#000248] tw-space-y-3 tw-bg-[#f8fafc] tw-p-6 "
      }
    >
      {/* <h6>Choose Your Plan</h6> */}
      <div className="tw-space-y-8">
        <div className="tw-flex tw-w-full tw-justify-center  tw-gap-x-6  ">
          <div className="">
            <p className="wastecolect-text ">Plan Duration</p>
            <select className=" tw-px-4 tw-py-1 tw-rounded-md tw-text-[.9rem]">
              <option>Monthly</option>
              <option>Quaterly</option>
            </select>
          </div>
          <div className="tw-w-[30%] tw-text-center tw-h-full">
            <p className="wastecolect-text">Choose Plan</p>
            <div className="  tw-gap-x-2 tw-justify-center tw-flex-wrap  tw-h-44 tw-overflow-scroll  tw-text-[.9rem]">
              {Array(10)
                .fill(0)
                .map(() => (
                  <div className="hover:tw-bg-[#000] hover:tw-text-white tw-flex tw-justify-between tw-gap-x-4 tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4 tw-cursor-pointer">
                    <p className="tw-mb-0">Plane Name</p>
                    <p className="tw-mb-0"> 5 waste collectors</p>
                    <p className="tw-mb-0">₹215</p>
                  </div>
                ))}
            </div>
          </div>
          <div className=" tw-w-[44%] tw-text-center">
            <p>Selected Areas</p>
            <div className=" tw-px-2  tw-gap-x-1 tw-gap-y-1 tw-text-[.9rem] tw-h-44 tw-overflow-scroll">
              {Array(5)
                .fill(0)
                .map(() => (
                  <div className="tw-flex tw-justify-between tw-gap-x-4 tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
                    <p className="tw-mb-0">State</p>
                    <p className="tw-mb-0"> City</p>
                    <p className="tw-mb-0">Area</p>
                    <p className="tw-mb-0">SubArea</p>
                    <p className="tw-mb-0">₹215</p>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <div className="price-show-bx">
              <p>
                Total Price : <span>₹512</span>{" "}
              </p>
            </div>
            <button className="pay-nw-btn submit-btn">Pay Now</button>
          </div>
        </div>
        <div className="tw-pt-3 tw-rounded-md tw-bg-white tw-text-center tw-flex  tw-justify-start  tw-w-full tw-font-[inherient] ">
          <div className="tw-w-[15%]">
            <p className="tw-bg-[#0ea5e9]  mb-0">Satet</p>
            {satates.map(({ id, name }) => (
              <div
                onClick={handleStateClick}
                className="tw-w-full hover:tw-bg-[#000] hover:tw-text-white tw-cursor-pointer"
                key={id}
              >
                {uppercase(name)}
              </div>
            ))}
          </div>
          <div className="tw-w-[15%] ">
            <p className="tw-bg-[#0ea5e9] mb-0">City</p>
            {cities.map(({ id, name }) => (
              <div
                onClick={handleCityClick}
                className="tw-w-full hover:tw-bg-[#000] hover:tw-text-white tw-cursor-pointer"
                key={id}
              >
                {uppercase(name)}
              </div>
            ))}
          </div>
          <div className="tw-w-[15%] ">
            <p className="tw-bg-[#0ea5e9] mb-0">Area</p>
            {arias.map(({ id, name }) => (
              <div
                onClick={handleAriaClick}
                className="tw-w-full hover:tw-bg-[#000] hover:tw-text-white tw-cursor-pointer"
                key={id}
              >
                {uppercase(name)}
              </div>
            ))}
          </div>
          <div>
            {" "}
            <p>Choose Areas</p>
            <div className=" tw-gap-x-4 tw-gap-y-2 tw-w-max tw-items-start tw-justify-center ">
              {subArias.map(({ id, name }) => (
                <div
                  onClick={handleSubAriaClick}
                  key={id}
                  className="tw-flex tw-justify-between tw-gap-x-6 tw-text-center tw-cursor-pointer tw-border tw-border-solid tw-border-black tw-px-6 tw-py-2 tw-rounded-md"
                >
                  <p>{uppercase(name)}</p>
                  <p>
                    Price : <span>₹215</span>{" "}
                  </p>
                  <button className="pay-nw-btn submit-btn">Add Now</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenchiesDashboard;
