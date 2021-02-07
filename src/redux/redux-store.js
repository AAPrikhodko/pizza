import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import homeReducer from "./homeReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import {firebaseReducer, getFirebase} from "react-redux-firebase";



let reducers = combineReducers({
    auth: authReducer,
    home: homeReducer,
    cart: cartReducer,
    firebase: firebaseReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware.withExtraArgument({ getFirebase }))
    )
);
window.store = store;


export default store;