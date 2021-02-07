import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import {connect} from "react-redux";
import "./ModalWindowUser.css"
import {handleSignOut} from "../../redux/authReducer";

const ModalWindowUser = ({show, handleClose, handleSignOut, signInUserIndex, users, profile}) => {

    return (
        <Modal
            show={show}
            size="lg"
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <div className="container wrapper-modal">

                <div className="row row-header-modal my-4">
                    <div className="col text-center">Welcome {profile.name}</div>
                </div>

                <div className="row text-center">
                    <div className="col-12"> There will be your orders history soon</div>
                </div>


                <div className="row row-footer-modal my-4">
                    <div className="col my-1">
                        <button className="btn btn-cart btn-back" onClick={handleClose}>
                            <i className="fas fa-long-arrow-alt-left"/> BACK
                        </button>
                    </div>
                    <div className="col my-1">
                        <button className="btn btn-cart" type="submit" onClick={() => {
                            handleClose()
                            handleSignOut()
                        }
                        }>
                            SIGN OUT <i className="fas fa-sign-out-alt"/></button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

const MapStateToProps = (state) => {
    return {
        signInUserIndex: state.auth.signInUserIndex,
        users: state.auth.users,
        profile: state.firebase.profile
    }
}


export default connect(MapStateToProps, {handleSignOut})(ModalWindowUser)