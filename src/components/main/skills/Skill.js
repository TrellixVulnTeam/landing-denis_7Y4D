import React from "react";

export default function Skill(props) {
    return (
        <div className="skill">
            <div className="skill-info">
                <img className="skill-img" src={props.img} alt="skill image"/>
                <span className="skill-name">{props.name}</span>
            </div>
            <div className="rating">
                <img src={require('../../../assets/img/skills/star.png')}/>
                <img src={require('../../../assets/img/skills/star.png')}/>
                <img src={require('../../../assets/img/skills/star.png')}/>
                <img src={require('../../../assets/img/skills/star.png')}/>
                <img src={require('../../../assets/img/skills/star.png')}/>
            </div>
        </div>
    )
}