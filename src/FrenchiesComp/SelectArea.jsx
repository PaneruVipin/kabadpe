import React, { useEffect, useRef } from 'react'

const SelectArea = ({onclickClose,locat}) => {
    const areaRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (areaRef.current && !areaRef.current.contains(event.target)) {
            onclickClose();
          }
        };
    
        if (locat) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [locat]);
    
  return (
    <>

    <section className="selct-area-comp" >

        <div className="sel-area-main-bx" ref={areaRef}>
        <h5>Select Area</h5>

        <div className="seach-loct-bx">
            <input type="text" name='searchloct' id='searchloct' placeholder='Search area  ' />
        </div>
        
        <div className="select-area-grid-bx">



            <div className="select-area-bx">
                <h6>State</h6>

                <div className="area-list">
                    <li> <span> Andhra Pradesh </span></li>
                    <li> <span> Bihar </span></li>
                    <li> <span> Haryana </span></li>
                    <li> <span> Rajasthan </span></li>
                    <li className=''> <span> Punjab </span></li>
                    <li className='areaactive'> <span> Uttar Pradesh </span></li>
                    <li> <span> Madhya Pradesh </span></li>
                    <li> <span> Bangal </span></li>

                </div> 

            </div>

            <div className="select-area-bx">
                <h6>City</h6>

                <div className="area-list">
                    <li> <span> Gaziabad  </span></li>
                    <li> <span> Loni  </span></li>
                    <li> <span> Delhi  </span></li>
                    <li className='areaactive'> <span> Lucknow </span> </li>
                    <li> <span> Bareli  </span></li>
                    <li> <span> Durg  </span></li>
                    <li> <span> Chennai </span> </li>
                    <li> <span> Lucknow </span> </li>
                    <li> <span> Bareli  </span></li>
                    <li> <span> Durg  </span></li>

                </div> 

            </div>

            <div className="select-area-bx">
                <h6>Area PIN</h6>

                <div className="area-list">
                    <li> <span> 220040  </span></li>
                    <li> <span> 221141  </span></li>
                    <li> <span> 221145  </span></li>
                    <li className='areaactive'> <span> 1100008 </span> </li>
                    <li> <span> 110763  </span></li>
                    <li> <span> 221145  </span></li>
                    <li> <span> 110054 </span> </li>
                    <li> <span> 110763  </span></li>
                    <li> <span> 221145  </span></li>
                    <li> <span> 110054 </span> </li>

                </div> 

            </div>

            <div className="select-area-bx">
                <h6>Area</h6>

                <div className="area-list">
                    <li> <span> Nisat Colony </span> </li>
                    <li> <span> Pooja Colony  </span></li>
                    <li> <span> Bagh Pati  </span></li>
                    <li> <span> Nawab Nagri  </span></li>
                    <li> <span> Patel Chowk  </span></li>
                    <li className='areaactive'> <span> Botenikal Garden  </span></li>
                    <li> <span> Shastri Nagar  </span></li>
                    <li > <span> Nawab Nagri  </span></li>
                    <li> <span> Patel Chowk  </span></li>
                    <li> <span> Botenikal Garden  </span></li>
                    <li> <span> Shastri Nagar  </span></li>

                </div> 

            </div>


            <div className="select-area-bx">
                <h6>Sub Area</h6>

                <div className="area-list area-list2">
                    <li> 
                        <div className="sub-area-price-bx">
                     <div className="left-area-price-text">
                    <span> Raj Nagar </span>
                    <p> Price : <span>₹20</span> </p>
                    </div>
                    <button className="add-area-btn">
                        Add this area
                    </button>
                     </div> 
                      </li>
               
                     <li> <div className="sub-area-price-bx"> 
                     <div className="left-area-price-text">
                    <span> Laxmi Nagar </span>
                    <p> Price : <span>₹50</span> </p>
                    </div>

                    <button className="add-area-btn">
                        Add this area
                    </button>
                    
                     </div>  </li>

                     <li> <div className="sub-area-price-bx"> 
                     <div className="left-area-price-text">
                    <span> East Old Seelumpur </span>
                    <p> Price : <span>₹70</span> </p>
                    </div>

                    <button className="add-area-btn">
                        Add this area
                    </button>
                    
                     </div>  </li>

                     <li> <div className="sub-area-price-bx"> 
                     <div className="left-area-price-text">
                    <span>  Gandhi Nagar </span>
                    <p> Price : <span>₹70</span> </p>
                    </div>

                    <button className="add-area-btn">
                        Add this area
                    </button>
                    
                     </div>  </li>

                     <li> <div className="sub-area-price-bx"> 
                     <div className="left-area-price-text">
                    <span>  Krishna Nagar </span>
                    <p> Price : <span>₹30</span> </p>
                    </div>

                    <button className="add-area-btn">
                        Add this area
                    </button>
                    
                     </div>  </li>

                </div> 

            </div>
            
        </div>

        <div className="sub-area-show-list-flex-bx">

            <div className="area-show-bx">
                <span>Raj Nagar <i class="fa-solid fa-circle-xmark"></i></span>
            </div>

            <div className="area-show-bx">
                <span>Laxmi Nagar </span>
            </div>

            <div className="area-show-bx">
                <span>East Old Seelumpur <i class="fa-solid fa-circle-xmark"></i> </span>
            </div>

            <div className="area-show-bx">
                <span>Gandhi Nagar <i class="fa-solid fa-circle-xmark"></i></span>
            </div>

            <div className="area-show-bx">
                <span>Krishna  Nagar <i class="fa-solid fa-circle-xmark"></i></span>
            </div>
            
        </div>

        <div onClick={onclickClose} className="close-btn">
        <i class="fa-solid fa-xmark"></i>
        </div>
        </div>

        
        
    </section>
      
    </>
  )
}

export default SelectArea
