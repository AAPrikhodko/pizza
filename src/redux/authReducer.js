const SIGNIN = 'SIGNIN'
const SIGNINERR = 'SIGNINERR'
const SIGNOUT = 'SIGNOUT'
const SIGNUP = 'SIGNUP'
const SIGNUPERR = 'SIGNUPERR'
const SETAUTHERRTOFALSE = 'SETAUTHERRTOFALSE'

let initialState = {
    authErr: null,
    isSignUpModalOpen: false

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN: {
            let stateCopy = {...state}
            stateCopy.authErr = null

            return stateCopy
        }
        case SIGNINERR: {
            let stateCopy = {...state}
            stateCopy.authErr = "Incorrect login or password"
            return stateCopy
        }
        case SIGNOUT: {
            let stateCopy = {...state}

            stateCopy.authErr = null
            return stateCopy
        }
        case SIGNUP: {
            let stateCopy = {...state}
            stateCopy.authErr = null
            return stateCopy
        }
        case SIGNUPERR: {
            let stateCopy = {...state}
            stateCopy.authErr = action.err.message
            return stateCopy
        }
        case SETAUTHERRTOFALSE: {
            let stateCopy = {...state}
            stateCopy.authErr = null
            return stateCopy
        }
        default:
            return state
    }
}

// ActionCreators
export const signIn = () => ({type: SIGNIN})
export const signUp = () => ({type: SIGNUP})
export const signInErr = (err) => ({type: SIGNINERR, err})
export const signUpErr = (err) => ({type: SIGNUPERR, err})
export const signOut = () => ({type: SIGNOUT})
export const setAuthErrToFalse = () => ({type: SETAUTHERRTOFALSE})


// ThunkCreators
export const handleSignIn = (email, password) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => dispatch(signIn()))
        .catch((err) => dispatch(signInErr(err)))
}

export const handleSignOut = () => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
    firebase.auth().signOut()
        .then(() => dispatch(signOut()))
}

export const handleSignUp = (newUser) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((r) => {
            return firebase.database().ref('users' + "/" + r.user.uid).set({
                name: newUser.name,
                street: newUser.street,
                phone: newUser.phone
            })
        }).then(() => dispatch(signUp()))
        .catch((err) => dispatch(signUpErr(err)))
}

export const saveOrderToUser = (values) => {
    return (dispatch, getState, {getFirebase}) => {
        let firebase = getFirebase()
        let currentDate = new Date().toLocaleDateString()
        let currentSumTotal = (getState().cart.subTotal+getState().cart.deliveryCost).toFixed(2)
        let currentCart = getState().cart.cart
        let path = firebase.database().ref('users' + "/" + getState().firebase.auth.uid + "/orders")
        path.push({
                date: currentDate,
                sumTotal: currentSumTotal,
                street: values.street,
                orderdetailes: currentCart
            }
        )
    }
}


export default authReducer