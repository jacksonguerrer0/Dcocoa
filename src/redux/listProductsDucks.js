import {  db } from '../firebase-config/firebaseConfig'


// reducer

import { types } from "./types/types";

const listProductsDucks = (state = {listProducts:[]} , action) => {
    switch (action.type) {
        case types.getProduct:
            return {
                ...state,
                listProducts: action.payload
            }
    
        default:
            return state;
    }
}

export default listProductsDucks


export const getProduct = () => async (dispatch) => {
    const res = await db.collection('/Products').get();
    const products = []
    res.forEach(element => {
        products.push(element.data())
    });
    dispatch({
        type: types.getProduct,
        payload: products
    })
}