import React from "react";
import "../Styles/MobileMenu.scss"

function MobileMenu({mobileMenu}){

    const mobileClass = mobileMenu ? "mobile-menu--open" : ""

    return(
        <div className={"mobile-menu " + mobileClass} >
            <a href=".App">Product</a>
            <a href=".App">Features</a>
            <a href=".App">Pricing</a>
            <a className="menu-link--gray" href=".App">Login</a>
        </div>
    )
}

export default MobileMenu;