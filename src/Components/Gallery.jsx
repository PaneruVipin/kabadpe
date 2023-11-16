import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/SideProduct.css'
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {

    const gallery = [

        {
            id : 1,
            gall : './images/customImg/gall-img-1.jpg',
        },
        {
            id : 2,
            gall : './images/customImg/gall-img-2.jpg',
        },
        {
            id : 3,
            gall : './images/customImg/gall-img-3.jpg',
        },
        {
            id : 4,
            gall : './images/customImg/gall-img-4.jpg',
        },
        {
            id : 5,
            gall : './images/customImg/gall-img-5.jpg',
        },
        {
            id : 6,
            gall : './images/customImg/gall-img-6.jpg',
        },
        {
            id : 7,
            gall : './images/customImg/gall-img-7.jpg',
        },
        {
            id : 8,
            gall : './images/customImg/gall-img-8.jpg',
        },
        {
            id : 9,
            gall : './images/customImg/gall-img-9.jpg',
        },
        {
            id : 10,
            gall : './images/customImg/gall-img-10.jpg',
        },
        
    ]
    
  return (
    <>
      <section className="comn-soc-feed-comp blog-post-comp gallery-comp">

        <h6>Gallery</h6>

        <div className="gall-grid">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            {gallery.map((elem,indx) => {
                return(
                    <>

             <a className='img-link' href={elem.gall}  to="#">
            <div className="gall-box" key={elem.indx} id={elem.indx}>
                    <img src={elem.gall} alt="" />
                </div>
            </a>
                    
                    </>
                )
            })}
  </LightGallery>

            
            
        </div>
        
      </section>
    </>
  )
}

export default Gallery
