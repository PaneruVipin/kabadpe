import React from 'react'
import '../style/Profile.css';
import UserProfCards from './UserProfCards';
import UserProfUpdates from './UserProfUpdates';
import '../style/Support.css';
import WasteColectCounter from './WasteColectCounter';
import WasteAppoint from './WasteAppoint';


const WasteColectSearch = ({onclickShowDetail}) => {
  return (
    <>
    <section className="use-prf-left-main-bx">
    
    <section className="top-user-prof-search-bx top-user-prof-search-bx2">
    <div className="u-p-cont top-user-prof-search-bx-flex">
<div className="left-user-prof-name-bx">
    <h5>Hi, <span>Tom Holland</span></h5>
</div>

<div className="right-user-prof-search-flex-bx">

    <div className="u-prf-srch-bx">
        <input type="text" name='search' id='search' placeholder='Search...' />
        </div>

    <button onClick={onclickShowDetail} className="u-prf-btn-bx">
        Edit Profile
    </button>
    
</div>

</div>
</section>


    
  <WasteColectCounter />


<WasteAppoint />
    </section>

   
    </>
  )
}

export default WasteColectSearch

