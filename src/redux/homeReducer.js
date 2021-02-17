import firebase from "firebase";

const SET_PIZZAS = "SET_PIZZAS"
const SWITCH_CURR = 'SWITCH_CURR'
const EUR_TO_USD = 1.23


let initialState = {
    pizzas: [],
    currency: localStorage.getItem('currency') ? localStorage.getItem('currency') : 'USD'
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS: {
            return {...state, pizzas: [...action.pizzas]}
        }
        case SWITCH_CURR: {
            let stateCopy = {...state}
            stateCopy.currency = action.currency
            localStorage.setItem('currency', action.currency)
            return stateCopy
        }
        default:
            return state
    }
}

// ActionCreators
export const setPizzas = (pizzas) => ({type: SET_PIZZAS, pizzas})
export const setCurrencyTo = (currency) => ({type: SWITCH_CURR, currency})

// ThunkCreators
export const getPizzas = () => {
    return (dispatch) => {
        const usersRef = firebase.database().ref()
        usersRef.child("pizzas").on('value', el => {
            let pizzas = []
            let i = 0
            if (Object.keys(el.val()).length !== 0) {
                for (let key of Object.keys(el.val())) {
                    pizzas.push(el.val()[key])
                    pizzas[i].key = key
                    i++
                }
                dispatch(setPizzas(pizzas))
            }
        }, function (error) {
            console.log("Error: " + error.code)
        })
    }
}


export default homeReducer