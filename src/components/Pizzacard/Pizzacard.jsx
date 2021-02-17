import React from "react"
import "./Pizzacard.css"
import {connect} from "react-redux";
import {addToCart} from "../../redux/cartReducer";
import showPriceInCurrency from "../../utils/showPriceInCurrency"

const Pizzacard = ({pizza, addToCart, currency}) => {

    return (
        <div className="card pizza-card">
            <img src={pizza.image} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title text-center pizza-name">{pizza.name}</h5>
                <p className="card-text text-justify pizza-description">{pizza.desc}</p>
                <div className="btn-prc-area">
                    <button className="btn btn-add-to-cart" onClick={() => {
                        addToCart(pizza)
                    }}>ADD TO CART
                    </button>
                    <div className="price-area">
                        {(currency === 'USD')
                            ? <i className="fas fa-dollar-sign fa-dollar-sign-pizzacard"/>
                            : <i className="fas fa-euro-sign fa-dollar-sign-pizzacard"/>}
                        <p className="price">{showPriceInCurrency(pizza.cost)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currency: state.home.currency
    }
}

export default connect(mapStateToProps, {addToCart})(Pizzacard)