import {firebase} from '../firebase-config/firebaseConfig'
import { getProduct } from '../redux/listProductsDucks'
import { login } from '../redux/loginDucks'

export const redirectWindow = (url) => {
    console.log(window)
    window.location.href(url)
}


export const authChanged = (setAuth, dispatch) => {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user?.uid) {
            setAuth(true);
            dispatch(getProduct())
            dispatch(login(user.displayName, user.email))
        }else{
            setAuth(false)
        }
    })
}

export const filterCategory = (str, listProducts) => {
    const filterProduct = listProducts.filter(ele =>(
        ele.category.toLowerCase().includes(str.toLowerCase())
    ))
    return filterProduct
}
