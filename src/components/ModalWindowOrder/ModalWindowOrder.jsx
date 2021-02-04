import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import "./ModalWindowOrder.css"

const ModalWindowOrder = ({show, handleClose}) => {


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
                <div className="row text-center">
                    <div className="col-12"> Thank you for your order! We wish you BON APPETITE!</div>
                </div>
                <div className="row row-footer-modal my-4">
                    <div className="col my-1">
                        <button className="btn btn-cart btn-back" onClick={handleClose}>
                            <i className="fas fa-long-arrow-alt-left"/> OK
                        </button>
                    </div>
                </div>
            </div>

        </Modal>
    )
}


export default ModalWindowOrder