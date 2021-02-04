import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import {Formik} from "formik"
import * as yup from 'yup'
import {connect} from "react-redux";
import "./ModalWindowCheckout.css"
import {order} from "../../redux/cartReducer";
import ModalWindowUser from "../ModalWindowUser/ModalWindowUser";
import ModalWindowOrder from "../ModalWindowOrder/ModalWindowOrder";
import ModalWindowSignUp from "../ModalWindowSignUp/ModalWindowSignUp";


const ModalWindowCheckout = ({cartQty, subTotal, deliveryCost, show, handleClose, signInUserIndex, users, order}) => {

    const [showOrderModal, setShowOrderModal] = useState(false)

    const handleCloseOrderModal = () => setShowOrderModal(false)
    const handleShowOrderModal = () => setShowOrderModal(true)

    const validationSchema = yup.object().shape({

        name: yup.string()
            .required("Required"),
        phone: yup.string()
            .required("Required"),
        street: yup.string()
            .required("Required"),
        house: yup.string()
            .required("Required"),
        building: yup.string()
            .required("Required"),
        flat: yup.string()
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
                signInUserIndex !== null
                    ? {
                        email: users[signInUserIndex].email,
                        phone: users[signInUserIndex].phone,
                        name: users[signInUserIndex].name,
                        street: users[signInUserIndex].street,
                        house: users[signInUserIndex].house,
                        building: users[signInUserIndex].building,
                        flat: users[signInUserIndex].flat,
                    }
                    : {
                        email: "",
                        phone: "",
                        name: "",
                        street: "",
                        house: "",
                        building: "",
                        flat: "",

                    }
            }
                    validationSchema={validationSchema}
                       onSubmit={(values) => {
/*                           handleShowOrderModal()*/
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
                        <div className="row text-center">
                            <p className="col text-about-input text-left ml-3">Delivery Address:</p>
                        </div>
                        <div className="row row-body-modal-sign-up text-center">
                            <div className="col-12 ">
                                <label htmlFor="email" className="form-label label-sign-text">Street</label>
                                <input id="street" type="text" className="form-control"
                                       onChange={handleChange} onBlur={handleBlur} value={values.street}/>
                            </div>
                            <div className="col-12 ">
                                {touched.street && errors.street &&
                                <div className='checkout_errMessage'> {errors.street}</div>}
                            </div>
                            <div className="col-4 ">
                                <label htmlFor="house" className="form-label label-sign-text mt-1">House</label>
                                <input id="house" type="text" className="form-control "
                                       onChange={handleChange} onBlur={handleBlur} value={values.house}/>
                            </div>
                            <div className="col-4 ">
                                <label htmlFor="building" className="form-label label-sign-text mt-1">Building</label>
                                <input id="building" type="text" className="form-control "
                                       onChange={handleChange} onBlur={handleBlur} value={values.building}/>
                            </div>
                            <div className="col-4 ">
                                <label htmlFor="flat" className="form-label label-sign-text mt-1">Flat</label>
                                <input id="flat" type="text" className="form-control "
                                       onChange={handleChange} onBlur={handleBlur} value={values.flat}/>
                            </div>
                            <div className="col-4 ">
                                {touched.house && errors.house &&
                                <div className='checkout_errMessage'> {errors.house}</div>}
                            </div>
                            <div className="col-4 ">
                                {touched.building && errors.building &&
                                <div className='checkout_errMessage'> {errors.building}</div>}
                            </div>
                            <div className="col-4 ">
                                {touched.flat && errors.flat &&
                                <div className='checkout_errMessage'> {errors.flat}</div>}
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
            <ModalWindowOrder show={showOrderModal} handleClose={handleCloseOrderModal}/>
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
        signInUserIndex: state.auth.signInUserIndex,
        users: state.auth.users

    }
}

export default connect(mapStateToProps, {order})(ModalWindowCheckout)