const ADD_TO_CART = 'ADD_TO_CART'
const INCR_QTY = 'INCR_QTY'
const DECR_QTY = 'DECR_QTY'
const ORDER = 'ORDER'
const ORDERTOFALSE = 'ORDERTOFALSE'


let initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    subTotal: localStorage.getItem('subTotal') ? parseFloat(localStorage.getItem('subTotal')) : 0,
    deliveryCost: 11.99,
    isOrdered: false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let stateCopy = {...state}
            let tempItem = {...action.pizzaItem}
            stateCopy.cart = [...state.cart]

            if (state.cart.length === 0) {
                tempItem.orderedQty = +1
                stateCopy.cart.push(tempItem)
            } else {
                let findDouble = state.cart.findIndex(i => i.id === action.pizzaItem.id)
                if (findDouble !== -1) {
                    stateCopy.cart[findDouble].orderedQty++
                } else {
                    tempItem.orderedQty = +1
                    stateCopy.cart.push(tempItem)
                }
            }
            stateCopy.subTotal += tempItem.cost
            stateCopy.proceedBtnPressed = false
            stateCopy.isOrdered = false
            localStorage.setItem('cart', JSON.stringify(stateCopy.cart))
            localStorage.setItem('subTotal', stateCopy.subTotal)
            return stateCopy
        }
        case INCR_QTY: {
            let stateCopy = {...state}
            stateCopy.cart = [...state.cart]
            stateCopy.cart[action.ind].orderedQty++
            stateCopy.subTotal += stateCopy.cart[action.ind].cost
            localStorage.setItem('cart', JSON.stringify(stateCopy.cart))
            localStorage.setItem('subTotal', stateCopy.subTotal)
            return stateCopy

        }

        case DECR_QTY: {
            let stateCopy = {...state}
            stateCopy.cart = [...state.cart]
            stateCopy.subTotal -= stateCopy.cart[action.ind].cost
            if (state.cart[action.ind].orderedQty === 1) {
                stateCopy.cart.splice(action.ind, 1)
            } else stateCopy.cart[action.ind].orderedQty--
            localStorage.setItem('cart', JSON.stringify(stateCopy.cart))
            localStorage.setItem('subTotal', stateCopy.subTotal)
            return stateCopy
        }

        case ORDER: {
            let stateCopy = {...state}
            stateCopy.cart = []
            stateCopy.subTotal = 0
            stateCopy.isOrdered = true
            localStorage.setItem('cart', JSON.stringify(stateCopy.cart))
            localStorage.setItem('subTotal', stateCopy.subTotal)
            return stateCopy
        }

        case ORDERTOFALSE: {
            let stateCopy = {...state}
            stateCopy.isOrdered = false
            return stateCopy
        }

        default:
            return state
    }
}

// ActionCreators
export const addToCart = (pizzaItem) => ({type: ADD_TO_CART, pizzaItem})
export const increaseQty = (ind) => ({type: INCR_QTY, ind})
export const decreaseQty = (ind) => ({type: DECR_QTY, ind})
export const order = () => ({type: ORDER})
export const orderToFalse = () => ({type: ORDERTOFALSE})


// ThunkCreators


export default cartReducer