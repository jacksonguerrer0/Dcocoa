import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from '../container/Home'
import { variables } from '../variables/variables'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${variables.colorFont};
    }
    body{
        background-color: ${variables.backgroundColor};
    }
`
const Routes = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes
