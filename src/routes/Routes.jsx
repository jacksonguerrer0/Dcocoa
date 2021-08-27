import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { variables } from '../variables/variables'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PrivateRoutes from './PrivateRoutes'
import AppPrivate from './AppPrivate'
import PublicRoutes from './PublicRoutes'
import AppPublic from './AppPublic'
import {firebase} from '../firebase-config/firebaseConfig'
import { authChanged } from '../helpers/functions';
const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${variables.colorFont};
        font-family: ${variables.fontFamily};
        font-size: ${variables.fontSize};
    }
    body{
        background-color: ${variables.backgroundColor};
    }
    h1{
        font-size: 4rem;
    }
    h2{
        font-size: 4rem;
    }
    h3{
        font-size: 2rem;
    }
    h4{
        font-size: 1rem;
    }
    h5{
        font-size: 0.8rem;
    }
    h6{
        font-size: 0.5rem;
    }
`


const Routes = () => {
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        authChanged(setAuth)
    }, [])
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <PrivateRoutes component={AppPrivate} auth={auth} exact path='/' />
                <PublicRoutes component={AppPublic} auth={auth} exact />                
            </Switch>
        </Router>
    )
}

export default Routes
