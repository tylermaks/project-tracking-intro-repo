import React from "react"
import NavBar from "./Assets/Components/NavBar"
import devices from "./Assets/Images/illustration-devices.svg"
import './Assets/Styles/Hero.scss'

function Hero(){
    return(
        <section>
            <NavBar />
            <div className="hero-inner container">
                <div>
                    <img src={devices} alt="" aria-hidden="true" />
                </div>
          
                <article>
                    <span className="new">New</span>
                    <h2>Monograph Dashboard</h2>
                    <h1>Powerful Insights Into Your Team</h1>
                    <p>Project planning and time tracking for agile teams</p>
                    <a class="cta" href=".App">Schedule a Demo</a>
                    <h2>To see a preview</h2>
                </article>
            </div>
        </section>
    )
}

export default Hero;