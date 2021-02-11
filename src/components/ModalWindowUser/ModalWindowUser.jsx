import {Modal} from "react-bootstrap";
import React from "react";
import {connect} from "react-redux";
import "./ModalWindowUser.css"
import {handleSignOut} from "../../redux/authReducer";
import OrderItemCard from "../OrderItemCard/OrderItemCard";

const ModalWindowUser = ({show, handleClose, handleSignOut, profile, orders}) => {


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


                {(orders !== undefined)
                    ?
                    <>
                        <div className="row text-center">
                            <div className="col-12"> ORDERS HISTORY</div>
                        </div>

                        <div className="row text-center">
                            <div className="col-11 mx-auto"> {Object.keys(orders).map((uid) =>
                                <OrderItemCard date={orders[uid].date} sumTotal={orders[uid].sumTotal} orderdetailes = {orders[uid].orderdetailes}/>)}
                            </div>

                        </div>
                    </>
                    :
                    <div className="row text-center">
                        <div className="col-12"> YOU HAVE NO ORDERS</div>
                    </div>
                }

                {console.log(orders)}

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
        profile: state.firebase.profile,
        orders: state.firebase.profile.orders
    }
}


export default connect(MapStateToProps, {handleSignOut})(ModalWindowUser)