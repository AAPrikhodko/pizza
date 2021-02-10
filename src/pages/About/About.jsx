import React from "react";
import "./About.css"
import reactPhoto from "../../images/react-logo.png"
import reduxPhoto from "../../images/redux-logo.png"
import bootstrapPhoto from "../../images/bootstrap-logo.png"
import firebasePhoto from "../../images/firebase-logo.png"

const About = () => {

    return (

        <div className="container container-about">
            <div className="row row-about-header">
                <div className="col text-center">About</div>
            </div>
            <h3 className="col-12 text-about mb-3"> Pizza Shop Online </h3>
            <div className="row row-about ">


                <div className="col-md-4 col-xs-12"><a href="https://reactjs.org/" target="_blank"><img src={reactPhoto}
                                                                                           width="35%"/> </a></div>
                <div className="col-md-8 col-xs-12 text-about-item my-auto"> This Single Page Application (SPA) is based on ReactJS
                    library using React Hooks. It provides high speed, simplicity and scalability
                </div>

                <div className="col-md-8 col-xs-12 text-about-item my-auto"> Used Redux as a state managment. It gives convenient and
                    quick access to data from any place in application
                </div>
                <div className="col-md-4 col-xs-12"><a href="https://redux.js.org/" target="_blank"><img src={reduxPhoto} width="40%"
                                                                                            alt=""/> </a></div>
                <div className="col-md-4 col-xs-12"><a href="https://getbootstrap.com/" target="_blank"><img src={bootstrapPhoto}
                                                                                                width="80%" alt=""/>
                </a></div>
                <div className="col-md-8 col-xs-12 text-about-item my-auto"> Bootstrap framework is included to the application. It
                    makes the disign responsitive and morden
                </div>
                <div className="col-md-8 col-xs-12 text-about-item my-auto"> All the information is saved in Google Realtime
                    database. The application uses Firebase Authentication by Firebase in order to provide access to
                    your personal account
                </div>
                <div className="col-md-4 col-xs-12"><a href="https://firebase.google.com/" target="_blank"><img src={firebasePhoto}
                                                                                                   width="80%" alt=""/></a>
                </div>

                <h3 className="col-12 text-about mb-3 "> App's features </h3>
                <div className="col-12">
                    <ul className="my_ul">
                        <li>
                            <div>In this App you may create your own account. If you signed in, thy system will
                                automatically fill the necessary information wlile ordering.
                            </div>
                        </li>
                        <li>
                            <div>You may increase or decrease the quantity of pizza at the cart</div>
                        </li>
                        <li>
                            <div>The cart doesn't lose the information in case of refreshing the page</div>
                        </li>
                        <li>
                            <div>If you signed in you may find your order's history by clicking on the button with your
                                name
                            </div>
                        </li>
                    </ul>
                </div>
                <h3 className="col-12 text-about my-4 "> Thank you for using our app ! </h3>
            </div>
        </div>
    )
}


export default About