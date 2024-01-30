import React from 'react'
import Addsubscription from '../FrenchiesComp/Addsubscription'

const Createplan = ({onSwitchPrev , onactive , onSwitch }) => {

  return (
    <>
      <Addsubscription onSwitchPrev={onSwitchPrev} onactive={onactive} onSwitch={onSwitch} />
    </>
  )
}

export default Createplan
