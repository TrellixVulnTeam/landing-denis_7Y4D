import React from "react";
import Project from "./portfolio/Project";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <div className="container portfolio-flex">
                <h1 className="portfolio-name">Portfolio</h1>
                <Project img={require('../../assets/img/projects/clothes.png')} name="Online fashion store - Homepage"/>
                <Project img={require('../../assets/img/projects/reebok.png')} name="Reebok Store - Concept"/>
                <Project img={require('../../assets/img/projects/braun.png')} name="Braun Landing Page - Concept"/>
            </div>
        </div>
    )
}