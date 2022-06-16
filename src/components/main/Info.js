import React from "react";

export default function Info(props) {
    return (
        <div className="info">
            <div className="container">
                <div className="info-desc">
                    <div className="info-name">
                        <h1>Denis</h1>
                        <h1>Novik</h1>
                    </div>
                    <div className="info-job">
                        <span>UX | UI designer</span>
                        <div className="info-from">
                            <span>24 years old, Minsk</span>
                        </div>
                    </div>
                    <div className="info-lang">
                        <span><a className="lang-ru" href="#">RU</a> <span id="vertical-stick">|</span> <a className="lang-en" href="#">ENG</a></span>
                    </div>
                </div>
                <div className="info-img">
                    <img src={props.img} alt=""></img>
                </div>
            </div>
        </div>
    )
}