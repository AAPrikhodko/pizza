import React, {useState} from "react"
import "./Header.css"
import logo from "../../images/pizza-logo2.png"
import ModalWindowCart from "../ModalWindowCart/ModalWindowCart";
import ModalWindowSignIn from "../ModalWindowSignIn/ModalWindowSignIn";
import {connect} from "react-redux";
import ModalWindowUser from "../ModalWindowUser/ModalWindowUser";
import {orderToFalse} from "../../redux/cartReducer";

const Header = ({cartQty, signInUserIndex, users, orderToFalse}) => {

    const [showCartModal, setShowCartModal] = useState(false)
    const [showSignInModal, setShowSignInModal] = useState(false)
    const [showUserModal, setShowUserModal] = useState(false)

    const handleCloseCartModal = () => setShowCartModal(false)
    const handleShowCartModal = () => {
        orderToFalse()
        setShowCartModal(true)
    }
    const handleCloseSignInModal = () => setShowSignInModal(false)
    const handleShowSignInModal = () => setShowSignInModal(true)
    const handleCloseUserModal = () => setShowUserModal(false)
    const handleShowUserModal = () => setShowUserModal(true)

    return (
        <>
            <div className="navbar">
                <div className="logo"><img src={logo} width="50" height="50" alt=""/></div>
                <div className="btn btn-icon dropdown" type="button" id="dropdownMenuButton"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bars"/>
                    <div className="dropdown-menu burger-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item linked" href="#">Restaurants</a>
                        <a className="dropdown-item linked" href="#">Contacts</a>
                        <a className="dropdown-item linked" href="#">About</a>
                    </div>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><a className="linked" href="#">Restaurants</a></li>
                        <li><a className="linked" href="#">Contacts</a></li>
                        <li><a className="linked" href="#">About</a></li>
                    </ul>
                </div>
                <div className="button-group">
                    <button className="btn btn-cart" onClick={handleShowCartModal}>Cart <span
                        className="badge badge-light">{cartQty === 0 ? '' : cartQty}</span></button>

                    {signInUserIndex === null
                        ? <button className="btn btn-sign-in"
                                  onClick={handleShowSignInModal}>Sign in</button>
                        : <button className="btn btn-sign-in"
                                  onClick={handleShowUserModal}>{users[signInUserIndex].name}</button>
                    }


                </div>
                <div className="icon-group">
                    <div className="icon-cart-with-counter" onClick={handleShowCartModal}>
                        <i className="fas fa-shopping-cart"/>
                        <span>{cartQty === 0 ? '' : cartQty}</span>
                    </div>
                    {signInUserIndex === null
                        ? <i className="fas fa-user" onClick={handleShowSignInModal}/>
                        : <i className="fas fa-smile-wink" onClick={handleShowUserModal}/>
                    }
                </div>
            </div>
            <ModalWindowCart show={showCartModal} handleClose={handleCloseCartModal}/>
            <ModalWindowSignIn show={showSignInModal} handleClose={handleCloseSignInModal}/>
            <ModalWindowUser show={showUserModal} handleClose={handleCloseUserModal}/>

        </>
    )
}

let mapStateToProps = (state) => {
    return {
        cartQty: state.cart.cart.reduce((acc, i) => {
            acc += i.orderedQty
            return acc
        }, 0),
        signInUserIndex: state.auth.signInUserIndex,
        users: state.auth.users
    }
}

export default connect(mapStateToProps, {orderToFalse})(Header)