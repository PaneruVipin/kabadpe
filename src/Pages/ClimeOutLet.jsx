import { useState } from "react";
import { NavLink } from "react-router-dom";

const ClimeOutlet = ({ children, state }) => {
  const [value, setValue] = state || useState("");
  const handleChange = (e) => {
    setValue(e?.target?.value);
  };
  return (
    <>
      <section className="clim-connect-comp">
        <div className="clim-connect-logo-search-flex-bx">
          <NavLink to={"/climconnect"} className="clim-connect-logo">
            <img src="/climconnect-logo.png" alt="" />
          </NavLink>

          <div className="clim-conect-search">
            <input
              value={value}
              onChange={handleChange}
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
            <div className="climconect-search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

export default ClimeOutlet;
