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
        "choose-your-plan-main-bx choseplanactive tw-flex tw-flex-col   tw-justify-center tw-w-full tw-h-full tw-text-[#000248] tw-space-y-3 "
      }
    >
      <div className="admin-login-img">
        <img src="./images/customImg/nav-logo.png" alt="" />
      </div>
      <h6>Choose Your Plan</h6>
      <div className="tw-space-y-8">
      <div className="tw-flex tw-w-full tw-justify-center tw-items-start tw-gap-x-6 ">
        <div
          className={
            "numbr-wast-colect-bx numbwasteactive  tw-border-solid tw-w-[20%] tw-border-[0.5px] tw-h-40 tw-rounded-md tw-overflow-scroll"
          }
        >
          <p className="wastecolect-text">Plan Duration</p>
          <div className="chose-plan-flex-bx tw-flex-wrap">
            <button>Monthly</button>
            <button>Quaterly</button>
          </div>
        </div>
        <div
          className={
            "numbr-wast-colect-bx numbwasteactive  tw-border-solid tw-w-[20%] tw-border-[0.5px] tw-h-40 tw-rounded-md tw-overflow-scroll"
          }
        >
          <p className="wastecolect-text">Number of Waste Collector</p>

          <div className="tw-flex tw-w-full tw-gap-x-2 tw-justify-center tw-flex-wrap">
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4  tw-cursor-pointer">
              <p className="tw-text-2xl"> 5 </p>
              <span>₹215</span>
            </div>
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4 tw-cursor-pointer">
              <p className="tw-text-2xl"> 10 </p>
              <span>₹300</span>
            </div>
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4 tw-cursor-pointer">
              <p className="tw-text-2xl"> 15 </p>
              <span>₹370</span>
            </div>
          </div>
        </div>
        <div className=" tw-border-solid tw-w-[30%] tw-border-[0.5px] tw-h-40 tw-rounded-md tw-overflow-scroll">
          <p>Selected Areas</p>
          <div className="tw-flex tw-flex-wrap tw-p-2  tw-gap-x-1 tw-gap-y-1">
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
              Laxmi Nagar
            </div>
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
              Laxmi Nagar
            </div>{" "}
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
              Laxmi Nagar
            </div>{" "}
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
              Laxmi Nagar
            </div>{" "}
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
              Laxmi Nagar
            </div>{" "}
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
              Laxmi Nagar
            </div>{" "}
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
              Laxmi Nagar
            </div>{" "}
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
              Laxmi Nagar
            </div>{" "}
            <div className="tw-border-[0.5px] tw-border-solid tw-rounded-md tw-px-4">
              Laxmi Nagar
            </div>
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
      <div className="tw-flex tw-mt-6  tw-justify-start tw-pl-[5%] tw-w-full tw-font-[inherient] tw-gap-x-4 ">
        <div className="tw-w-[15%]">
          <p>Satet</p>
          {satates.map(({ id, name }) => (
            <div
              onClick={handleStateClick}
              className="tw-text-center tw-cursor-pointer hover:tw-bg-[#000] hover:tw-text-white tw-w-full tw-border tw-border-solid tw-border-black tw-px-6 tw-py-2"
              key={id}
            >
              {uppercase(name)}
            </div>
          ))}
        </div>
        <div className="tw-w-[15%]">
          <p>City</p>
          {cities.map(({ id, name }) => (
            <div
              onClick={handleCityClick}
              className="tw-text-center tw-cursor-pointer hover:tw-bg-[#000] hover:tw-text-white tw-w-full tw-border tw-border-solid tw-border-black tw-px-6 tw-py-2"
              key={id}
            >
              {uppercase(name)}
            </div>
          ))}
        </div>
        <div className="tw-w-[15%]">
          <p>Area</p>
          {arias.map(({ id, name }) => (
            <div
              onClick={handleAriaClick}
              className="tw-text-center tw-cursor-pointer hover:tw-bg-[#000] hover:tw-text-white tw-w-full tw-border tw-border-solid tw-border-black tw-px-6 tw-py-2"
              key={id}
            >
              {uppercase(name)}
            </div>
          ))}
        </div>
        <div>
          {" "}
          <p>Choose Areas</p>
          <div className="tw-flex tw-flex-wrap tw-gap-x-4 tw-gap-y-2 tw-w-max tw-items-start tw-justify-center ">
            {subArias.map(({ id, name }) => (
              <div
                onClick={handleSubAriaClick}
                key={id}
                className="tw-text-center tw-cursor-pointer hover:tw-bg-[#000] hover:tw-text-white  tw-border tw-border-solid tw-border-black tw-px-6 tw-py-2"
              >
                <p>{uppercase(name)}</p>
                <p>
                  Price : <span>₹215</span>{" "}
                </p>
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
