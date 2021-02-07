import {Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Formik} from "formik"
import * as yup from 'yup'
import {connect} from "react-redux";
import "./ModalWindowSignIn.css"
import ModalWindowSignUp from "../ModalWindowSignUp/ModalWindowSignUp";
import {handleSignIn, setAuthErrToFalse} from "../../redux/authReducer";


const ModalWindowSignIn = ({show, handleClose, handleSignIn, auth, authErr, setAuthErrToFalse}) => {

    const [showSignUpModal, setShowSignUpModal] = useState(false)

    const handleBack = () => {
        setAuthErrToFalse()
        handleClose()
    }

    const handleCloseSignUpModal = () => {
        setShowSignUpModal(false)
        handleClose()
    }
    const handleShowSignUpModal = () => setShowSignUpModal(true)

    const validationSchema = yup.object().shape({
        email: yup.string()
            .email("Not valid E-mail")
            .max(30, "E-mail must be less than 30 symbols")
            .required("Required"),
        password: yup.string()
            .required("Required")
    });


    return (
        <Modal
            show={show}
            size="lg"
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Formik initialValues={{
                email: "",
                password: "",
            }}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>{
                        handleSignIn(values.email, values.password);
                    }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit
                  }) => (


                      <div className="container wrapper-modal">
                            <div className="row row-header-modal my-4">
                                <div className="col text-center">Sign in</div>
                            </div>

                            <div className="row row-body-modal-sign-in text-center">
                                <div className="col-6 my-auto">
                                    <label htmlFor="email" className="form-label label-sign-text">E-mail</label>
                                    <input id="email" type="email" className="form-control"
                                           onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                                </div>
                                <div className="col-6 my-auto">
                                    <label htmlFor="password" className="form-label label-sign-text">Password</label>
                                    <input id="password" type="password" className="form-control input-form"
                                           onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                                </div>
                                <div className="col-6 ">
                                    {touched.email && errors.email && <div className='checkout_errMessage'> {errors.email}</div>}
                                </div>
                                <div className="col-6 ">
                                    {touched.password && errors.password && <div className='checkout_errMessage'> {errors.password}</div>}
                                </div>
                                {authErr && <div className="col-12 mx-auto">
                                    <div className='checkout_errMessage'> {authErr}</div>
                                </div>}

                            </div>

                            <div className="row row-footer-modal my-4">
                                <div className="col my-1">
                                    <button className="btn btn-cart " onClick={handleBack}>
                                        <i className="fas fa-long-arrow-alt-left"/> BACK
                                    </button>
                                </div>
                                <div className="col my-1">
                                    <button className="btn btn-cart" onClick={handleShowSignUpModal}>
                                        <i className="fas fa-user-plus"/> SIGN UP
                                    </button>
                                </div>
                                <div className="col my-1">
                                    <button className="btn btn-cart" type="submit" onClick={handleSubmit}>
                                        SIGN IN <i className="fas fa-long-arrow-alt-right"/></button>
                                </div>
                            </div>
                        </div>

                    )}

                    </Formik>
            <ModalWindowSignUp show={showSignUpModal} handleClose={handleCloseSignUpModal}/>
            {(auth.uid && !authErr) && handleClose()}
        </Modal>

    )
}

const MapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authErr: state.auth.authErr
    }
}


export default connect(MapStateToProps,{handleSignIn, setAuthErrToFalse})(ModalWindowSignIn)