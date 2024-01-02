import React, { useState } from 'react'
import '../style/SocialFeed.css'
import FeedComp from './FeedComp';
import MyFeedComp from './MyFeedComp';
import TrendComp from './TrendComp';
import BlogPost from './BlogPost';
import SocFeedHeader from './SocFeedHeader';
import SideProduct from './SideProduct';
import Gallery from './Gallery';
import Followers from './Followers';

const SocialFeed = () => {
    const [socFeedBtn , setSocFeedBtn] = useState(1);

    const socFeedBtnFunc = (index) => {

        setSocFeedBtn(index)
        
    }
    
  return (
    <>

           <SocFeedHeader />

        <section className="left-soc-feed-nav-box">

            <div className="specific-user-prof-box">
                <div className="spc-user-logo">
                    <img src="./images/customImg/team-3.jpg" alt="" />
                </div>
                <div className="spec-prof-info">
                <h6>Ahmad Noor Falid</h6>
                <span>@fawait</span>
                </div>
            </div>

            <div className="soc-feed-list">

                    <button onClick={() => socFeedBtnFunc(1)} className={ socFeedBtn === 1 ? "soc-feed-li-bx socfeedactive" : "soc-feed-li-bx"}>
                    <i class="fa-solid fa-comments"></i>

                    Feeds
                    </button>


                
                    <button onClick={() => socFeedBtnFunc(2)} className={ socFeedBtn === 2 ? "soc-feed-li-bx socfeedactive" : "soc-feed-li-bx"}>
                    <i class="fa-solid fa-comment"></i>


                  My Feeds
                    </button>


                
                    <button  onClick={() => socFeedBtnFunc(3)} className={ socFeedBtn === 3 ? "soc-feed-li-bx socfeedactive" : "soc-feed-li-bx"}>
                    <i class="fa-solid fa-arrow-trend-up"></i>

                    Trends
                    </button>

                   
                    
                    <button  onClick={() => socFeedBtnFunc(5)} className={ socFeedBtn === 5 ? "soc-feed-li-bx socfeedactive" : "soc-feed-li-bx"}>
                    <i class="fa-solid fa-code-fork"></i>

                    Followers
                    </button>

                    <button  onClick={() => socFeedBtnFunc(6)} className={ socFeedBtn === 6 ? "soc-feed-li-bx socfeedactive" : "soc-feed-li-bx"}>
                    <i class="fa-regular fa-images"></i>

                    Photos
                    </button>

                    <button  onClick={() => socFeedBtnFunc(4)} className={ socFeedBtn === 4 ? "soc-feed-li-bx socfeedactive" : "soc-feed-li-bx"}>
                    <i class="fa-solid fa-blog"></i>

                    Blog Post
                    </button>
                
            </div>
            
        </section>

        { socFeedBtn === 1 ?  <FeedComp  /> : null}
        { socFeedBtn === 2 ?  <MyFeedComp  /> : null}
        { socFeedBtn === 3 ?  <TrendComp  /> : null}
        { socFeedBtn === 4 ?  <BlogPost  /> : null}
        { socFeedBtn === 6 ?  <Gallery  /> : null}
        { socFeedBtn === 5 ?  <Followers  /> : null}


        <SideProduct />

    
    </>
  )
}

export default SocialFeed
