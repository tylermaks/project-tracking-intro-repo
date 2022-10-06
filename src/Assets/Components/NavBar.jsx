import React from "react"
import logo from "../Images/logo.svg"
import hamburger from "../Images/icon-hamburger.svg"


function NavBar(){
    return(
        <nav className="main-nav container">
            <img src={logo} alt="Company Logo" />
            <div className="menu">
                <img className="mobile" src={hamburger} alt="Mobile Menu Icon" />
            </div>
        </nav>
    )
}

export default NavBar;