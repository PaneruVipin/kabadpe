import React, { useState } from "react";
import addSubsPlan from "../AddSubsData";
import AddSubsEdit from "./AddSubsEdit";
import { useQuery } from "@tanstack/react-query";

import { adminSubsDelete, adminSubsFetch } from "../apis/admins/subscription";
import ForIndividuals from "../AdminComponents.jsx/ForIndividuals";
import Addsubscription from "./Addsubscription";
import VendorPlans from "../AdminComponents.jsx/VendorPlans";

const Plan = ({}) => {
  const [currentComp, setCurrentComp] = useState("framchise");
  const [subsPlanBx, setSubsPlanBx] = useState(false);
  const [btnActive, setBtnActive] = useState("");
  const [initialUpdateValues, setInitialUpdateValues] = useState({});
  const { data: subscription, refetch } = useQuery({
    queryKey: ["kabadpeSubscription"],
    queryFn: () => adminSubsFetch(),
  });
  const onSwitch = (e) => {
    const { name } = e.target;
    setCurrentComp(name);
  };
  const comps = {
    indivisual: ForIndividuals,
    framchise: Addsubscription,
    vendor: VendorPlans,
  };
  const Comp = comps?.[currentComp];
  const buttons = [
    { name: "framchise", label: "For Frenchies" },
    { name: "indivisual", label: "For Individuals" },
    { name: "vendor", label: "For Vendors" },
  ];
  return (
    <>
      <section className="add-work-comn-comp">
        <div className="add-work-btn-flex-bx">
          <h6 className="banktext mb-0">Subscriptions Plans</h6>

          <div
            style={{ marginLeft: "-180px" }}
            className="for-french-indi-flex-btn"
          >
            {buttons?.map(({ name, label }) => {
              return (
                <button
                  className={
                    currentComp == name
                      ? "switch-btn switch-btn3 switchactive"
                      : "switch-btn switch-btn3 "
                  }
                  name={name}
                  onClick={onSwitch}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <p></p>
        </div>
        <Comp />
      </section>
    </>
  );
};

export default Plan;
