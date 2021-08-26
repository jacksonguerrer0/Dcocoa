import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    login: 'bien',
    xd: 'xd'
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(
    rootReducer,    
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store