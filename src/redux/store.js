import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import cardDucks from './cardDucks';
import listProductsDucks from './listProductsDucks';
import LoginDucks from './loginDucks';

const rootReducer = combineReducers({
    login: LoginDucks,
    products: listProductsDucks,
    card: cardDucks
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(
    rootReducer,    
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store