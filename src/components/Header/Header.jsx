import React, {useEffect, useState} from "react"
import "./Header.css"
import logo from "../../images/pizza-logo2.png"
import ModalWindowCart from "../ModalWindowCart/ModalWindowCart";
import ModalWindowSignIn from "../ModalWindowSignIn/ModalWindowSignIn";
import {connect} from "react-redux";
import ModalWindowUser from "../ModalWindowUser/ModalWindowUser";
import ModalWindowOrder from "../ModalWindowOrder/ModalWindowOrder";
import {setCurrencyTo} from "../../redux/homeReducer"

const Header = ({cartQty, auth, profile, isOrdered, currency, setCurrencyTo}) => {

    const [showCartModal, setShowCartModal] = useState(false)
    const [showSignInModal, setShowSignInModal] = useState(false)
    const [showUserModal, setShowUserModal] = useState(false)
    const [showOrderModal, setShowOrderModal] = useState(false)

    useEffect(() => {
        isOrdered && handleShowOrderModal()
    }, [isOrdered])

    const handleCloseOrderModal = () => setShowOrderModal(false)
    const handleShowOrderModal = () => setShowOrderModal(true)
    const handleCloseCartModal = () => setShowCartModal(false)
    const handleShowCartModal = () => setShowCartModal(true)
    const handleCloseSignInModal = () => setShowSignInModal(false)
    const handleShowSignInModal = () => setShowSignInModal(true)
    const handleCloseUserModal = () => setShowUserModal(false)
    const handleShowUserModal = () => setShowUserModal(true)
    const handleCurrencyChange = (e) => setCurrencyTo(e.target.value)

    return (
        <>
            <div className="navbar">
                <a className="logo" href="/"><img src={logo} width="50" height="50" alt=""/></a>

                <div className="dropdown btn-icon ">
                    <a href="#" data-toggle="dropdown" className="dropdown"> <i className="fas fa-bars"/> </a>
                    <ul className="dropdown-menu burger-menu">
                        <li><a className="dropdown-item linked" href="/restaurants">Restaurants</a></li>
                        <li><a className="dropdown-item linked" href="/contacts">Contacts</a></li>
                        <li><a className="dropdown-item linked" href="/about">About</a></li>
                    </ul>

                </div>

                <div className="nav-menu">
                    <ul>
                        <li><a className="linked" href="/restaurants">Restaurants</a></li>
                        <li><a className="linked" href="/contacts">Contacts</a></li>
                        <li><a className="linked" href="/about">About</a></li>
                    </ul>
                </div>
                <div className="button-group">
                        <select value={currency} onChange={handleCurrencyChange} className="btn menu btn-cart">
                            <option selected={currency==="USD" ? true : false} value='USD'>USD</option>
                            <option selected={currency==="USD" ? true : false} value='EUR'>EUR</option>
                        </select>
                    <button className="btn btn-cart" onClick={handleShowCartModal}>Cart <span
                        className="badge badge-light">{cartQty === 0 ? '' : cartQty}</span></button>

                    {!auth.uid
                        ? <button className="btn btn-sign-in"
                                  onClick={handleShowSignInModal}>Sign in</button>
                        : <button className="btn btn-sign-in"
                                  onClick={handleShowUserModal}>{profile.name}</button>
                    }

                </div>
                <div className="icon-group">
                    <select value = {currency} onChange={handleCurrencyChange} className="select-currancy">
                        <option selected={currency==="USD" ? true : false} value='USD'>$</option>
                        <option selected={currency==="EUR" ? true : false}  value='EUR'>€</option>
                    </select>

                    <div className="icon-cart-with-counter" onClick={handleShowCartModal}>
                        <i className="fas fa-shopping-cart"/>
                        <span>{cartQty === 0 ? '' : cartQty}</span>
                    </div>
                    {!auth.uid
                        ? <i className="fas fa-user" onClick={handleShowSignInModal}/>
                        : <i className="fas fa-smile-wink" onClick={handleShowUserModal}/>
                    }
                </div>
            </div>
            <ModalWindowCart show={showCartModal} handleClose={handleCloseCartModal}/>
            <ModalWindowSignIn show={showSignInModal} handleClose={handleCloseSignInModal}/>
            <ModalWindowUser show={showUserModal} handleClose={handleCloseUserModal}/>
            <ModalWindowOrder show={showOrderModal} handleClose={handleCloseOrderModal}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cartQty: state.cart.cart.reduce((acc, i) => {
            acc += i.orderedQty
            return acc
        }, 0),
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        isOrdered: state.cart.isOrdered,
        currency: state.home.currency
    }
}

export default connect(mapStateToProps, {setCurrencyTo})(Header)