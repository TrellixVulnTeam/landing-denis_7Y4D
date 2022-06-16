import React from "react";
import Skill from "./skills/Skill";

export default function Skills() {
    return (
        <div className="skills">
            <div className="container skills-flex">
                <h1>Skills</h1>
                <span>I work in such programs as</span>
                <div className="skills-programs">
                    <Skill img={require('../../assets/img/skills/ps.png')} name="Adobe Photoshop" rating="4"/>
                    <Skill img={require('../../assets/img/skills/ai.png')} name="Adobe Illustrator" rating="3"/>
                    <Skill img={require('../../assets/img/skills/ae.png')} name="Adobe After Effects" rating="4"/>
                    <Skill img={require('../../assets/img/skills/figma.png')} name="Figma" rating="4"/>
                </div>
            </div>
        </div>
    )
}