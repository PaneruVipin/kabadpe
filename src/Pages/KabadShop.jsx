import React, { useState } from "react";
import KabadShopComp from "../Components/KabadShopComp";
import BidProductDetail from "../FrenchiesComp/BidProductDetail";
import CreateBidPost from "../FrenchiesComp/CreateBidPost";
import { useSelector } from "react-redux";
import Login from "../../src/AdminPages/FrenchiesLogin";
import MainFooter from "../HomeComponent/MainFooter";
import Howitwork from "../FrenchiesComp/Howitwork";
const KabadShop = () => {
  const [component, setComponent] = useState("bid");
  const [data, setData] = useState({});
  const [login, setLogin] = useState(false);
  const handleViewComp = (compName) => {
    setComponent(compName);
  };
  const user = useSelector((s) => s?.user?.userInfo);
  return (
    <>
      {" "}
      <div style={{ minHeight: "280px" }}>
        {!login ? (
          <>
            {component === "bid" ? (
              <KabadShopComp
                onClickCreatePost={() => {
                  if (user?.role == "franchiseAdmin") {
                    setComponent("createbidpost");
                  } else {
                    setLogin(true);
                  }
                }}
                onClickDetPage={(data) => {
                  if (user?.role == "franchiseAdmin") {
                    setData(data);
                    setComponent("bidproddet");
                  } else {
                    setLogin(true);
                  }
                }}
              />
            ) : null}

            {component === "bidproddet" ? (
              <BidProductDetail
                data={data}
                onClickDetPage={() => setComponent("bidproddet")}
              />
            ) : null}
            {component === "createbidpost" ? <CreateBidPost /> : null}
          </>
        ) : (
          <Login />
        )}
      </div>
      <MainFooter />


    </>
  );
};

export default KabadShop;
