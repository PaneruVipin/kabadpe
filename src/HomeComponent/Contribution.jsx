import React, { useEffect } from 'react'

const Contribution = () => {
    useEffect(() => {
        const scrollRevealEle = document.querySelectorAll('[data-reveal]');
    
        const scrollReveal = () => {
          for (let i = 0; i < scrollRevealEle.length; i++) {
            const revealElemonscreen =
              scrollRevealEle[i].getBoundingClientRect().top < window.innerHeight;
    
            if (revealElemonscreen) {
              scrollRevealEle[i].classList.add('revealed');
            } else {
              scrollRevealEle[i].classList.remove('revealed');
            }
          }
        };
    
        window.addEventListener('scroll', scrollReveal,true);
    
        // Cleanup: Remove event listener on component unmount
        return () => {
          window.removeEventListener('scroll', scrollReveal,true);
        };
      }, []);
    return (
    <>

    <section className="contribut-comp" >
        <div className="comon-container-2">

            <div data-reveal="showup" className="contrib-main-bx" >

                
            <div className=" rounded-flex-bx2" >

          

            <div className="cont-logo-bx cont-logo-bx6" > 
            <div className="company-name-text">
                <span>Sustainable Cities and Communities</span>
            </div>
          
                <div className="cont-img cont-img2 cont-img6" >
                    <img src="./images/contribution/contri-img-06.png"   />
                </div>
                {/* <div className="cont-info cont-infospan2">
                    <span>Sustainable Cities and Communities</span>
                </div> */}
            </div>

            <div className="cont-logo-bx cont-logo-bx7">
            <div className="company-name-text">
                <span>Responsible Consumption and Production</span>
            </div>
                <div className="cont-img cont-img2 cont-img7">
                    <img src="./images/contribution/contri-img-07.png" alt="" />
                </div>
                {/* <div className="cont-info cont-infospan2">
                    <span>Responsible Consumption and Production</span>
                </div> */}
            </div>

            <div className="cont-logo-bx cont-logo-bx8">
            <div className="company-name-text">
                <span>Climate Action</span>
            </div>
                <div className="cont-img cont-img2 cont-img8">
                    <img src="./images/contribution/contri-img-08.png" alt="" />
                </div>
                {/* <div className="cont-info cont-infospan2">
                    <span>Cimate Action</span>
                </div> */}
            </div>

            <div className="cont-logo-bx cont-logo-bx9">
            <div className="company-name-text">
                <span>Life Below Water</span>
            </div>
                <div className="cont-img cont-img2 cont-img9">
                    <img src="./images/contribution/contri-img-09.png" alt="" />
                </div>
                {/* <div className="cont-info cont-infospan2">
                    <span>Life Below Water</span>
                </div> */}
            </div>

            <div className="cont-logo-bx cont-logo-bx10">
            <div className="company-name-text">
                <span>Life On Land</span>
            </div>
                <div className="cont-img cont-img2 cont-img10">
                    <img src="./images/contribution/contri-img-10.png" alt="" />
                </div>
                {/* <div className="cont-info cont-infospan2">
                    <span>Life On Land</span>
                </div> */}
            </div>
                
            <div className="rounded-flex-bx" >

            <div className="cont-logo-bx cont-logo-bx1">
            <div className="company-name-text">
                <span>Swachh Bharat</span>
            </div>
                <div className="cont-img">
                    <img src="./images/contribution/contri-img-01.png" alt="" />
                </div>
                {/* <div className="cont-info">
                    <span>Swachh Bharat</span>
                </div> */}
            </div>

            <div className="cont-logo-bx cont-logo-bx2" >
            <div className="company-name-text">
                <span>Meri Life</span>
            </div>
                <div className="cont-img cont-img2">
                    <img src="./images/contribution/contri-img-02.png" alt="" />
                </div>
                {/* <div className="cont-info cont-info2">
                    <span>Meri Life</span>
                </div> */}
            </div>

            

            <div className="cont-logo-bx cont-logo-bx3">
            <div className="company-name-text">
                <span>Gender Equality</span>
            </div>
                <div className="cont-img cont-img2  cont-img3">
                    <img src="./images/contribution/contri-img-03.png" alt="" />
                </div>
                {/* <div className="cont-info cont-info2">
                    <span>Gender Equality</span>
                </div> */}
            </div>

            <div className="cont-logo-bx cont-logo-bx4">
            <div className="company-name-text">
                <span>Clean Water And Sanitation</span>
            </div>
                <div className="cont-img cont-img2  cont-img4">
                    <img src="./images/contribution/contri-img-04.png" alt="" />
                </div>
                {/* <div className="cont-info cont-infospan2">
                    <span>Clean Wate  </span>
                    <span>And Sanitation</span>
                </div> */}
            </div>

            <div className="cont-logo-bx cont-logo-bx5">
            <div className="company-name-text">
                <span>Decent Work And Economic Growth</span>
            </div>
                <div className="cont-img cont-img2 cont-img5">
                    <img src="./images/contribution/contri-img-05.png" alt="" />
                </div>
                {/* <div className="cont-info cont-infospan2">
                    <span>Decent Work</span>
                </div> */}
            </div>
                    
                <div className="center-text-cont-bx apnt-heading" >
                    <p>Sale Your Waste</p>
                    <h3>Contribution</h3>
                </div>
                
                    
                </div>
                </div>
            </div>


            
        </div>
    </section>
      
    </>
  )
}

export default Contribution
