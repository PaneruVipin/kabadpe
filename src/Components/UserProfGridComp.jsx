import React from 'react'
import UserProfSearch from './UserProfSearch'
import UseProfRightbx from './UseProfRightbx'

const UserProfGridComp = ({onProfileNav , onClickProfileNavHideShow}) => {
  return (
    <>
    <section className="user-prof-grid-comp">

      <UserProfSearch  onProfileNav={onProfileNav} onClickProfileNavHideShow={onClickProfileNavHideShow}/>

      <UseProfRightbx />

    </section>


    </>
  )
}

export default UserProfGridComp
