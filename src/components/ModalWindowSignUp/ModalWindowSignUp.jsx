import {Modal} from "react-bootstrap";
import React from "react";
import {Formik} from "formik"
import * as yup from 'yup'
import {connect} from "react-redux";
import "./ModalWindowSignUp.css"


const ModalWindowSignUp = ({show, handleClose}) => {


    const validationSchema = yup.object().shape({
        email: yup.string()
            .email("Not valid")
            .max(30, "E-mail must be less than 30 symbols")
            .required("Required"),
        password: yup.string()
            .required("Required"),
        phone: yup.string()
            .required("Required"),
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
                name: "",
                street: "",
                house:"",
                building:"",
                flat:"",

            }}
                    validationSchema={validationSchema}
             /*       onSubmit={alert('Submitted')}*/
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
                                <div className="col text-center">Sign up</div>
                            </div>
                            <div className="row text-center">
                                <p className="col text-about-input">Create new account</p>
                            </div>
                            <div className="row row-body-modal-sign-up text-center">
                                <div className="col-4 ">
                                    <label htmlFor="email" className="form-label label-sign-text">E-mail</label>
                                    <input id="email" type="email" className="form-control"
                                           onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                                </div>
                                <div className="col-4 ">
                                    <label htmlFor="password" className="form-label label-sign-text">Password</label>
                                    <input id="password" type="password" className="form-control "
                                           onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                                </div>
                                <div className="col-4 ">
                                    <label htmlFor="name" className="form-label label-sign-text">Name</label>
                                    <input id="name" type="text" className="form-control "
                                           onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                                </div>
                                <div className="col-4 ">
                                    {touched.email && errors.email && <div className='checkout_errMessage'> {errors.email}</div>}
                                </div>
                                <div className="col-4 ">
                                    {touched.password && errors.password && <div className='checkout_errMessage'> {errors.password}</div>}
                                </div>
                                <div className="col-4 ">
                                    {touched.phone && errors.phone && <div className='checkout_errMessage'> {errors.phone}</div>}
                                </div>
                            </div>
                            <div className="row text-center">
                                <p className="col text-about-input text-left ml-3">Delivery Address:</p>
                            </div>
                            <div className="row row-body-modal-sign-up text-center">
                                <div className="col-12 ">
                                    <label htmlFor="email" className="form-label label-sign-text">Street</label>
                                    <input id="street" type="text" className="form-control"
                                           onChange={handleChange} onBlur={handleBlur} value={values.street}/>
                                </div>
                                <div className="col-4 ">
                                    <label htmlFor="password" className="form-label label-sign-text mt-1">House</label>
                                    <input id="password" type="password" className="form-control "
                                           onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                                </div>
                                <div className="col-4 ">
                                    <label htmlFor="phone" className="form-label label-sign-text mt-1">Building</label>
                                    <input id="phone" type="text" className="form-control "
                                           onChange={handleChange} onBlur={handleBlur} value={values.phone}/>
                                </div>
                                <div className="col-4 ">
                                    <label htmlFor="phone" className="form-label label-sign-text mt-1">Flat</label>
                                    <input id="phone" type="text" className="form-control "
                                           onChange={handleChange} onBlur={handleBlur} value={values.phone}/>
                                </div>
                            </div>

                            <div className="row row-footer-modal my-4">
                                <div className="col my-1">
                                    <button className="btn btn-cart" onClick={handleClose}>
                                        <i className="fas fa-long-arrow-alt-left"/> SIGN IN
                                    </button>
                                </div>
                                <div className="col my-1">
                                    <button className="btn btn-cart" type="submit">
                                        CREATE <i className="fas fa-long-arrow-alt-right"/></button>
                                </div>
                            </div>
                        </div>

                    )}

                    </Formik>

        </Modal>
    )
}

export default ModalWindowSignUp