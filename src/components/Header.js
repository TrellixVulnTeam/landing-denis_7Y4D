import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a className="nav-item" href="#">Home</a>
                    <a className="nav-item" href="#">About me</a>
                    <a className="nav-item" href="#">Skills</a>
                    <a className="nav-item" href="#">Portfolio</a>
                    <a className="nav-item" href="#">Contacts</a>
                </nav>
            </div>
        </header>
    )
}