import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../container/Login'


const AppPublic = () => {
    return (
        <Router>
            <Switch>
                <Route path='/login' exact component={Login} />
            </Switch>
        </Router>
    )
}

export default AppPublic
