import React from "react";
import Info from "./main/Info"
import About from "./main/About";
import Skills from "./main/Skills";
import Portfolio from "./main/Portfolio";
import Contacts from "./main/Contacts";

export default function Main() {
    return (
        <main className="main">
            <Info img={require('../assets/img/info-img.png')}/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
        </main>
    )
}