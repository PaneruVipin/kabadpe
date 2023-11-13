import React from 'react'
import UserProfSearch from './UserProfSearch'
import UseProfRightbx from './UseProfRightbx'
import WasteColectSearch from './WasteColectSearch'
const WasteDashboard = ({onclickShowDetailComp}) => {
  return (
    <>
      <section className="user-prof-grid-comp user-prof-grid-comp2">

    
<WasteColectSearch onclickShowDetail={onclickShowDetailComp} />




</section> 
    </>
  )
}

export default WasteDashboard

