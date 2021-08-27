// Variables

import { firebase, google } from "../firebase-config/firebaseConfig";
import { types } from "./types/types";

// reducer
const LoginDucks = (state={}, action) => {
    switch (action.type) {
        case types.loggedIn:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        default:
            return state;
    }
}

export default LoginDucks
// actions

export const login = (name, email) => ({
    type: types.loggedIn ,
    payload: {
        name, email
    }
})
export const loginGoogle = () => async (dispatch) => {
    const {user} = await firebase.auth().signInWithPopup(google);
    await dispatch(login(user.displayName, user.email))
}