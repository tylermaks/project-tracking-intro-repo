import React from "react";
import devices from "../Images/illustration-devices.svg"

function HeroContent(){
    return(
        <div className="hero-inner container">
            <div>
                <img src={devices} alt="" aria-hidden="true" />
            </div>
    
            <article>
                <span className="new">New</span>
                <h2>Monograph Dashboard</h2>
                <h1>Powerful Insights Into Your Team</h1>
                <p>Project planning and time tracking for agile teams</p>
                <a className="cta" href=".App">Schedule a Demo</a>
                <h2>To see a preview</h2>
            </article>
        </div>
    )
}

export default HeroContent;