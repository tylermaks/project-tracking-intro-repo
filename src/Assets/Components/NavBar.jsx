import React from "react"
import logo from "../Images/logo.svg"
import hamburger from "../Images/icon-hamburger.svg"
import close from "../Images/icon-close.svg"

import "../Styles/NavBar.scss"


function NavBar({mobileMenu, toggleMenu}){

    const mobileIcon = mobileMenu ? close : hamburger

    return(
        <nav className="main-nav container">
            <img src={logo} alt="Company Logo" />
            <div className="menu">
                <img 
                    className="mobile" 
                    onClick={toggleMenu} 
                    src={mobileIcon} 
                    alt="Mobile Menu Icon"
                />
                <div className="menu--inner desktop">
                    <a className="menu-link" href=".App">Product</a>
                    <a className="menu-link" href=".App">Features</a>
                    <a className="menu-link" href=".App">Pricing</a>
                    <a className="menu-link menu-link--gray" href=".App">Login</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;