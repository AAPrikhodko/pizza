import React from "react";
import "./OrderItemCard.css"
import {connect} from "react-redux";
import showPriceInCurrency from "../../utils/showPriceInCurrency"


const OrderItemCard = ({date, sumTotal, orderdetailes, currency}) => {
    return (
        <div className="card wrapper-card-item-cart my-3">
            <div className="row row-cardhystory-item">
                <div className="col-5 my-auto cardhystory-date align-self-center">
                    <p className="cardhystory-text">{date}</p>
                </div>

                <div className="col-4 text-left cardhystory-pizza">
                    {Object.keys(orderdetailes).map((item, n) =>
                        <p>{orderdetailes[item].orderedQty} * {orderdetailes[item].name}</p>
                    )}
                </div>

                <div className="col-3 cardhystory-price-with-sign">
                    {(currency === 'USD')
                        ? <i className="fas fa-dollar-sign fa-dollar-sign-historycard"/>
                        : <i className="fas fa-euro-sign fa-dollar-sign-historycard"/>}
                    <p className="price-historycard"> {showPriceInCurrency(sumTotal)} </p>
                </div>
            </div>
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        currency: state.home.currency
    }
}


export default connect(MapStateToProps)(OrderItemCard)