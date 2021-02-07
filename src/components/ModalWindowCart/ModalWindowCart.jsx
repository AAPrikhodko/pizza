import {Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./ModalWindowCart.css"
import CartItemCard from "../CartItemCard/CartItemCard";
import ModalWindowCheckout from "../ModalWindowCheckout/ModalWindowCheckout";

const ModalWindowCart = ({show, handleClose, cart, subTotal, deliveryCost, isOrdered}) => {

    const [showCheckoutModal, setShowCheckoutModal] = useState(false)

    const handleCloseCheckoutModal = () => setShowCheckoutModal(false)
    const handleShowCheckoutModal = () => setShowCheckoutModal(true)

    if (isOrdered) { handleClose() }
     return (
        <Modal
            show={show}
            size="xl"
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >


            <div className="container wrapper-modal">
                <div className="row row-header-modal my-4">
                    <div className="col text-center">Cart</div>
                </div>
                {cart.length !==0 ? <div className="row row-body-modal text-center">
                    <div className="col-11 mx-auto"> {cart.map((pizza, ind) => <CartItemCard pizza={pizza}
                                                                                             ind={ind}/>)} </div>
                </div> :
                    <div className="row text-center">
                        <div className="col-12"> CART IS EMPTY </div>
                    </div>
                }
                {cart.length !==0 && <div className="row row-summary-modal text-center">
                    <div className="col-11 text-right">
                        <p className="summary-text">Subtotal: <i
                            className="fas fa-dollar-sign fa-dollar-sign-summary-text"/>{subTotal.toFixed(2)}</p>
                        <p className="summary-text">Delivery: <i
                            className="fas fa-dollar-sign fa-dollar-sign-summary-text"/>{deliveryCost}</p>
                        <p className="summary-text">Total: <i
                            className="fas fa-dollar-sign fa-dollar-sign-summary-text"/>{(subTotal + deliveryCost).toFixed(2)}
                        </p>
                    </div>
                </div>}


                <div className="row row-footer-modal my-4">
                    <div className="col my-1">
                        <button className="btn btn-cart btn-back" onClick={handleClose}>
                            <i className="fas fa-long-arrow-alt-left"/> BACK
                        </button>
                    </div>
                    <div className="col my-1">
                        <button className="btn btn-cart " type="submit" onClick={handleShowCheckoutModal} disabled={cart.length !==0 ? false : true}>
                            PROCEED <i className="fas fa-long-arrow-alt-right"/></button>
                    </div>
                </div>
            </div>
            <ModalWindowCheckout show={showCheckoutModal} handleClose={handleCloseCheckoutModal}/>
        </Modal>
    )
}

const MapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        subTotal: state.cart.subTotal,
        deliveryCost: state.cart.deliveryCost,
        isOrdered: state.cart.isOrdered
    }
}


export default connect(MapStateToProps)(ModalWindowCart)