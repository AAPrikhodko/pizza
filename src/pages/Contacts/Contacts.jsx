import React from "react";
import "./Contacts.css"
import ava from "../../images/ava.jpg"


const Contacts = () => {

    return (
        <div className="container container-contacts">
            <div className="row row-contacts-header">
                <div className="col text-center text-header">CONTACTS</div>
            </div>
            <h3 className="col-12 text-contacts my-3 text-center"> WELCOME TO PIZZA SHOP! </h3>
            <div className="row row-contacts ">
                <div className="contacts-info-wrapper">
                    <img src={ava} />
                    <ul className="contact_ul text-right">
                        <li><p className="headerName pt-3 pr-4 text-uppercase text-rirgt">Andrey Prikhodko</p></li>
                        <li><p className="text-right">frontend web developer</p></li>
                        <br/>
                        <br/>
                        <li className="text-primary" ><i className="fab fa-telegram-plane"/> <a href="https://teleg.run/prand85"
                                                               target="_blank"> @prand85</a></li>
                        <li className="text-primary"><i className="fab fa-whatsapp"/><a href="https://wa.me/79508699555"
                                                              target="_blank"> +79508699555</a></li>
                        <li className="text-primary"><i className="fab fa-github"/> <a
                            href="https://github.com/AAPrikhodko/userscontrol" target="_blank"> GitHub</a></li>
                        <li className="text-primary"><i className="fab fa-facebook-f"/> <a
                            href="https://www.facebook.com/profile.php?id=100006505813589"
                            target="_blank"> Facebook</a></li>
                        <li className="text-primary"><i className="fab fa-twitter"/> <a
                            href="https://twitter.com/Andrey60845146" target="_blank"> Twitter</a></li>
                        <li className="text-primary"><i className="far fa-envelope"/><a
                            href="mailto:prand85@yandex.ru"> prand85@yandex.ru</a></li>
                    </ul>
                </div>
                    <br/>


            </div>
        </div>
    )
}


export default Contacts