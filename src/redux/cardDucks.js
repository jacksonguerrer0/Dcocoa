import { types } from "./types/types";

const initialState = {
    quantityProductCard: 0, 
    products: [],
    quantity: 0,
}

const cardDucks = (state=initialState, action) => {
    switch (action.type) {
        case types.quantityProductCard:
            return {
                ...state,
                quantityProductCard: action.payload
            };
        case types.productsCard: 
            return{
                ...state,
                products: [...state.products, 
                    ...action.payload]
            }
        case types.quantityForProduct:
            return{
                ...state,
                quantity: action.payload
            }
        default:
            return state;
    }
}

export default cardDucks

export const quantityOne = (quantity) => (dispatch) => {
    dispatch({
        type: types.quantityForProduct,
        payload: quantity
    })
    dispatch(quantityTotal(quantity))
}

export const quantityTotal = (quantity) => (dispatch, state) => {
    let { quantityProductCard } = state().card;
    let newQuantity = parseInt(quantity) + parseInt(quantityProductCard);
    dispatch({
        type: types.quantityProductCard,
        payload: newQuantity
    })
}

export const addProductCard = (quantity, product ) => async(dispatch, selector) => {
    let newProduct = [];
    newProduct.push({
        ...product
    })
    dispatch(quantityOne(quantity))
    dispatch({
        type: types.productsCard,
        payload: newProduct
    })
}