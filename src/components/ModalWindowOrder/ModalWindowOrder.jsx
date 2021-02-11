import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import "./ModalWindowOrder.css"
import {orderToFalse} from "../../redux/cartReducer";
import {connect} from "react-redux";

const ModalWindowOrder = ({show, handleClose, orderToFalse}) => {

    const handleOk = () => {
        orderToFalse()
        handleClose()
    }
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
                    <div className="col text-center">Thank you for your order!</div>
                </div>
                <div className="row text-center">
                    <div className="col-12">We will deliver your order in 1 hour.</div>
                    <div className="col-12">BON APPETITE!</div>
                </div>
                <div className="row row-footer-modal my-4">
                    <div className="col my-1">
                        <button className="btn btn-cart btn-back" onClick={handleOk}>
                            <i className="fas fa-check"/> OK
                        </button>
                    </div>
                </div>
            </div>

        </Modal>
    )
}


export default connect(null, {orderToFalse})(ModalWindowOrder)