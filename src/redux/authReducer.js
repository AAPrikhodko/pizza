const SIGNIN = 'SIGNIN'
const SIGNOUT = 'SIGNOUT'

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

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN: {
            let stateCopy = {...state}
            stateCopy.signInUserIndex = action.index
            return stateCopy
        }
        case SIGNOUT: {
            let stateCopy = {...state}
            stateCopy.signInUserIndex = null
            return stateCopy
        }
        default:
            return state
    }
}

// ActionCreators
export const signIn = (index) => ({type: SIGNIN, index})
export const handleSignOut = () => ({type: SIGNOUT})


// ThunkCreators
export const handleSignIn = (email, password) => (dispatch) => {
    let ind = window.store.getState().auth.users.findIndex(user => (user.email === email && user.password === password))
    if (ind !== undefined) dispatch(signIn(ind))

}


export default authReducer