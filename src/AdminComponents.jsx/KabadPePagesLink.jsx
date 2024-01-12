import React from 'react'
import { NavLink } from 'react-router-dom'

const KabadPePagesLink = () => {
  return (
    <>

    <section className="kabadpe_pages-comp">

        <h6>Content Pages</h6>

        <div className="content-pages-link-btns-main-bx">

            
            <button className="content-page-link-btn">
                <NavLink to="/"> Home </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="/about"> About Us </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#"> Frenchies </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="/contact"> Contact Us </NavLink>
            </button>

            </div>

            <p>Services Pages</p>
            
            <div className="content-pages-link-btns-main-bx">

            <button className="content-page-link-btn">
                <NavLink to="/contentedit">   Zero Waste Societies </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Waste SIP </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Green Life </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   ClimConnect </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Blog </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Household Scrap Collection </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Vehicle Srapping </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Corporate Waste Management </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   EPR Services </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Dismantling services </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Circular Economy Services </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Zero Waste Services for Businesses </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Paper Shredding Services </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   CSR Services </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   Zero Waste Drives </NavLink>
            </button>

            <button className="content-page-link-btn">
                <NavLink to="#">   IEC Development and Consulting </NavLink>
            </button>
            
        </div>
        
    </section>
      
    </>
  )
}

export default KabadPePagesLink
