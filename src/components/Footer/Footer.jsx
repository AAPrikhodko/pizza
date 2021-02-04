import React from "react"
import "./Footer.css"
import logoappstore from "../../images/appstore.png"
import logogoogleplay from "../../images/google-play-badge.png"

const URL_USERS = "https://users-control-app.netlify.app/"
const URL_NETWORK = "https://dev-social-network.netlify.app/"

const Footer = () => {
    return (
        <div className="container footer-container">
            <div className="row footer-row-1">
                <div className="col col-footer-3">
                    <h6>PRODUCTS</h6>
                    <ul className="list-unstyled">
                        <li><a className="linked" href={URL_USERS} target="_blank">User's Manager</a></li>
                        <li><a className="linked" href={URL_NETWORK} target="_blank">Developer Network</a></li>
                    </ul>
                </div>

                <div className="col col-footer-2">
                    <h6>SUPPORT</h6>
                    <ul className="list-unstyled">
                        <li><i className="far fa-envelope"/><a  className="linked" href="mailto:prand85@yandex.ru"> prand85@ya.ru</a></li>
                        <li><i className="fas fa-phone"/> 8-950-8699555</li>
                    </ul>
                </div>
                <div className="col col-footer-1">
                    <h6>DOWNLOAD APP</h6>
                    <img className="img-apple" src={logoappstore} width="140" height="50"alt=""/>
                    <img className="img-google" src={logogoogleplay} width="160" height="60"alt=""/>
                </div>

            </div>
                <hr/>
            <div className="row footer-row-2">
                <p className="col ">
                    &copy;{new Date().getFullYear()} All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer