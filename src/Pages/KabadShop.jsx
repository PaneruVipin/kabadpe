import React, { useState } from 'react'
import KabadShopComp from '../Components/KabadShopComp'
import BidProductDetail from '../FrenchiesComp/BidProductDetail';
import CreateBidPost from '../FrenchiesComp/CreateBidPost';

const KabadShop = () => {

  const [component, setComponent] = useState("bid");
  
  const handleViewComp = (compName) => {
    setComponent(compName);
  };
  
  return (
    <>
     {component === 'bid' ? <KabadShopComp 
      onClickCreatePost={() => setComponent("createbidpost")}
      onClickDetPage={() => setComponent("bidproddet")}  /> : null}


    {component === "bidproddet" ? (
  <BidProductDetail
    onClickDetPage={() => setComponent("bidproddet")}
  />
) : null}
{component === "createbidpost" ? <CreateBidPost /> : null}
    </>
  )
}

export default KabadShop
