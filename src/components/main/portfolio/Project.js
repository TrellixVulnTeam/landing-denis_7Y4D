import React from "react";

export default function Project(props) {
    return (
        <div className="project">
            <img className="project-img" src={props.img}/>
            <a className="project-link" href="#">{props.name}</a>
        </div>
    )
}