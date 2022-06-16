import React from "react";

export default function Contacts() {
    return (
        <div className="contacts">
            <div className="container-contact">
                <div className="contacts-info">
                    <h1 className="contacts-info__name">Contacts</h1>
                    <div className="contacts-info__text">
                        <span>Want to know more or just chat?</span><br></br>
                        <span>You are welcome!</span>
                    </div>
                    <button className="contacts-info__send"><span>Send message</span></button>
                </div>
                <div className="contacts-links">
                    <img className="contacts-links__img" src={require('../../assets/img/contacts/linkedin.png')}/>
                    <img className="contacts-links__img" src={require('../../assets/img/contacts/insta.png')}/>
                    <img className="contacts-links__img" src={require('../../assets/img/contacts/be.png')}/>
                    <img className="contacts-links__img" src={require('../../assets/img/contacts/ball.png')}/>
                </div>
                <div className="contacts-footer">
                    <span>Like me on</span>
                    <p>LinkedIn, Instagram, Behance, Dribble</p>
                </div>
            </div>
        </div>
    )
}