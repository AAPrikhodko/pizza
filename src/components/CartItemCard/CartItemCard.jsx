import React from "react";
import "./CartItemCard.css"
import {connect} from "react-redux";
import {decreaseQty, increaseQty} from "../../redux/cartReducer";

const CartItemCard = ({pizza,increaseQty, decreaseQty, ind}) => {
    return (
        <div className="card wrapper-card-item-cart mb-3">
            <div className="row row-card-item">
                <div className="col-4 col-card-item-img"> <img src={pizza.image}/> </div>
                <div className="col-5 card-body">
                    <h5 className="card-title text-left">{pizza.name}</h5>
                    <p className="card-text text-left text-muted">{pizza.desc}</p>
                </div>
                <div className="col-3 col-qty">
                        <div className="row row-qty">
                            <i className="btn col-4 fas fa-minus" onClick={() => decreaseQty(ind)}/>
                                <p className="qty col-4">{pizza.orderedQty}</p>
                                <i className="btn col-4 fas fa-plus" onClick={() => increaseQty(ind)}/>
                        </div>
                </div>
            </div>
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    }
}


export default connect(MapStateToProps, {increaseQty, decreaseQty})(CartItemCard)