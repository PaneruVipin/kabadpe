import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const ClimeOutlet = ({
  children,
  state,
  onclickMenuClim,
  onClickToggleNav,
}) => {
  const [value, setValue] = state || useState("");
  const handleChange = (e) => {
    setValue(e?.target?.value);
  };

  const location = useLocation();

  const hideClimMenu = location.pathname === "/climconnect/blog/Mw==";
  const showClimMenu = location.pathname === "/climconnect";
  return (
    <>
      <section className="clim-connect-comp">
        <div className="clim-connect-logo-search-flex-bx">
          <NavLink to={"/climconnect"} className="clim-connect-logo">
            <img src="/climconnect-logo.png" alt="" />
          </NavLink>

          <div className="clim-conect-right-bx">
            {/* {!hideClimMenu  &&  <div onClick={onClickToggleNav} className="clim-cnect-menu-btn">
          <div className="lne lne1"></div>
          <div className="lne lne2"></div>
          <div className="lne lne3"></div>

        </div>} */}

            {showClimMenu && (
              <div onClick={onclickMenuClim} className="clim-cnect-menu-btn">
                <div className="lne lne1"></div>
                <div className="lne lne2"></div>
                <div className="lne lne3"></div>
              </div>
            )}

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
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

export default ClimeOutlet;
