import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import homeReducer from "./homeReducer"
import cartReducer from "./cartReducer"
import authReducer from "./authReducer";

let reducers = combineReducers({
    auth: authReducer,
    home: homeReducer,
    cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;


export default store;