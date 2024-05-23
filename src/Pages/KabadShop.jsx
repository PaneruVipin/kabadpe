import React, { useState } from "react";
import KabadShopComp from "../Components/KabadShopComp";
import BidProductDetail from "../FrenchiesComp/BidProductDetail";
import CreateBidPost from "../FrenchiesComp/CreateBidPost";
import { useSelector } from "react-redux";
import Login from "../../src/AdminPages/FrenchiesLogin";
const KabadShop = () => {
  const [component, setComponent] = useState("bid");
  const [data, setData] = useState({});
  const [login, setLogin] = useState(false);
  const handleViewComp = (compName) => {
    setComponent(compName);
  };
  const user = useSelector((s) => s?.user?.userInfo);
  return !login ? (
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
            setData(data);
            setComponent("bidproddet");
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
  );
};

export default KabadShop;
