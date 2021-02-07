import {Modal} from "react-bootstrap";
import React from "react";
import {Formik} from "formik"
import * as yup from 'yup'
import {connect} from "react-redux";
import "./ModalWindowCheckout.css"
import {order} from "../../redux/cartReducer";




const ModalWindowCheckout = ({cartQty, subTotal, deliveryCost, show, handleClose, order, auth, profile}) => {

    const validationSchema = yup.object().shape({

        phone: yup.string()
            .required("Required"),
        street: yup.string()
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
            <Formik initialValues={
                auth.uid
                    ? {
                        email: profile.email,
                        phone: profile.phone,
                        name: profile.name,
                        street: profile.street
                    }
                    : {
                        email: "",
                        phone: "",
                        name: "",
                        street: ""

                    }
            }
                    validationSchema={validationSchema}
                       onSubmit={(values) => {
                           order()
                           handleClose()
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
                            <div className="col text-center">Checkout</div>
                        </div>
                        <hr/>
                        <div className="row mr-5 text-right ">
                            <p className="col text-about-input">YOUR ORDER: </p>
                        </div>
                        <div className="row mr-5 text-right">
                            <p className="col text-about-input text-sum"> Pizzas: {cartQty === 0 ? '' : cartQty}</p>
                        </div>
                        <div className="row mr-5 text-right">
                            <p className="col text-about-input text-sum">TOTAL SUM: <i
                                className="fas fa-dollar-sign fa-dollar-sign-summary-text"/> {(subTotal + deliveryCost).toFixed(2)}
                            </p>
                        </div>
                        <hr/>

                        <div className="row text-center">
                            <p className="col text-about-input">Please fill the form</p>
                        </div>
                        <div className="row row-body-modal-sign-up text-center">
                            <div className="col-4 ">
                                <label htmlFor="name" className="form-label label-sign-text">Name</label>
                                <input id="name" type="text" className="form-control "
                                       onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                            </div>
                            <div className="col-4 ">
                                <label htmlFor="email" className="form-label label-sign-text">E-mail</label>
                                <input id="email" type="email" className="form-control"
                                       onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                            </div>
                            <div className="col-4 ">
                                <label htmlFor="phone" className="form-label label-sign-text">Phone</label>
                                <input id="phone" type="text" className="form-control "
                                       onChange={handleChange} onBlur={handleBlur} value={values.phone}/>
                            </div>
                            <div className="col-4 ">
                                {touched.email && errors.email &&
                                <div className='checkout_errMessage'> {errors.email}</div>}
                            </div>
                            <div className="col-4 ">
                                {touched.password && errors.password &&
                                <div className='checkout_errMessage'> {errors.password}</div>}
                            </div>
                            <div className="col-4 ">
                                {touched.phone && errors.phone &&
                                <div className='checkout_errMessage'> {errors.phone}</div>}
                            </div>
                        </div>
                        <div className="row row-body-modal-sign-up text-center">
                            <div className="col-12 ">
                                <label htmlFor="street" className="form-label label-sign-text">Delivery Address:</label>
                                <input id="street" type="text" className="form-control"
                                       onChange={handleChange} onBlur={handleBlur} value={values.street}/>
                            </div>
                            <div className="col-12 ">
                                {touched.street && errors.street &&
                                <div className='checkout_errMessage'> {errors.street}</div>}
                            </div>

                        </div>

                        <div className="row row-footer-modal my-4">
                            <div className="col my-1">
                                <button className="btn btn-cart" onClick={handleClose}>
                                    <i className="fas fa-long-arrow-alt-left"/> CART
                                </button>
                            </div>
                            <div className="col my-1">
                                <button className="btn btn-cart" type="submit" onClick={handleSubmit}>
                                    ORDER <i className="fas fa-long-arrow-alt-right"/></button>
                            </div>
                        </div>
                    </div>

                )}
            </Formik>
        </Modal>
    )
}

let mapStateToProps = (state) => {
    return {
        cartQty: state.cart.cart.reduce((acc, i) => {
            acc += i.orderedQty
            return acc
        }, 0),
        subTotal: state.cart.subTotal,
        deliveryCost: state.cart.deliveryCost,
        auth: state.firebase.auth,
        profile: state.firebase.profile,

    }
}

export default connect(mapStateToProps, {order})(ModalWindowCheckout)