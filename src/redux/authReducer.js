const SIGNIN = 'SIGNIN'
const SIGNINERR = 'SIGNINERR'
const SIGNOUT = 'SIGNOUT'
const SIGNUP = 'SIGNUP'
const SIGNUPERR = 'SIGNUPERR'
const SETAUTHERRTOFALSE = 'SETAUTHERRTOFALSE'

let initialState = {
    users: [
        {
            "id": 0,
            "name": "User1",
            "email": "test1@test.com",
            "password": "qwerty",
            "phone": "+8965445566",
            "street": "Lenina",
            "house": "165",
            "building": "5",
            "flat": "11",
            "orders": []
        },
        {
            "id": 1,
            "name": "User2",
            "email": "test2@test.com",
            "password": "qwerty",
            "phone": "+96655441122",
            "street": "Dobrovolskogo",
            "house": "14",
            "building": "2",
            "flat": "115",
            "orders": []
        },
        {
            "id": 2,
            "name": "User3",
            "email": "test3@test.com",
            "password": "qwerty",
            "phone": "+41254444552",
            "street": "3rd Barrikadnaya",
            "house": "12",
            "building": "9",
            "flat": "1",
            "orders": []
        }
    ],
    signInUserIndex: null,
    authErr: null,
    isSignUpModalOpen: false

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN: {
            let stateCopy = {...state}
            stateCopy.authErr = null
            console.log("signed in")
            /*stateCopy.signInUserIndex = action.index*/
            return stateCopy
        }
        case SIGNINERR: {
            let stateCopy = {...state}
            stateCopy.authErr = "Incorrect login or password"
            console.log(action.err.message);
            /*stateCopy.signInUserIndex = action.index*/
            return stateCopy
        }
        case SIGNOUT: {
            let stateCopy = {...state}
            /*            stateCopy.signInUserIndex = null*/
            console.log("signed out")
            stateCopy.authErr = null
            return stateCopy
        }
        case SIGNUP: {
            let stateCopy = {...state}
            /*            stateCopy.signInUserIndex = null*/
            console.log("newUser created")
            stateCopy.authErr = null
            return stateCopy
        }
        case SIGNUPERR: {
            let stateCopy = {...state}
            /*            stateCopy.signInUserIndex = null*/
            console.log(action.err.message)
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

    /*    let ind = window.store.getState().auth.users.findIndex(user => (user.email === email && user.password === password))
    if (ind !== undefined) dispatch(signIn(ind))*/

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
        .catch((err)=>dispatch(signUpErr(err)))
}


export default authReducer