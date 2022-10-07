import React, {useState} from "react"
import NavBar from "./Assets/Components/NavBar"
import MobileMenu from "./Assets/Components/MobileMenu"
import HeroContent from "./Assets/Components/HeroContent"

import './Assets/Styles/Hero.scss'

function Hero(){

    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return(
        <section>
            <NavBar 
                toggleMenu={toggleMenu}
                mobileMenu={mobileMenu}
            />
            <MobileMenu 
                mobileMenu={mobileMenu}
            />
            <HeroContent />
        </section>
    )
}

export default Hero;