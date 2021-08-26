import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoutes = ({component: Component, auth, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            return(
            auth ? <Component {...props} />: <Redirect  to='/login'/>
        )}} 
        />
    )
}

export default PrivateRoutes
