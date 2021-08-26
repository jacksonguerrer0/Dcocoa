import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PublicRoutes = ({component : Component, auth, ...rest}) => {
    return (
        <Route {...rest} 
        render = {props => {
            console.log(props)
            return(
            auth ? <Redirect to='/' /> : <Component  {...props} exact/>
        )}} />
    )
}

export default PublicRoutes
