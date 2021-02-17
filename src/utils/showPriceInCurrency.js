import store from "../redux/redux-store"
const USD_TO_EUR = 0.83

const showPriceInCurrency = (price) => {
    if (store.getState().home.currency === "EUR") return (price *= USD_TO_EUR).toFixed(2)
    else return price
}

export default showPriceInCurrency

