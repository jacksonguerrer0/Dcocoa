import {firebase} from '../firebase-config/firebaseConfig'

export const redirectWindow = (url) => {
    console.log(window)
    window.location.href(url)
}


export const authChanged = (setAuth) => {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user?.uid) {
            setAuth(true)
        }else{
            setAuth(false)
        }
    })
}