import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import NavMenu from '../components/NavMenu'
import Home from '../container/Home'
import { variables } from '../variables/variables'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer'
import Products from '../container/Products'
import DetailProduct from '../container/DetailProduct'
import Card from '../container/Card'
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
    return (
        <Router>
            <GlobalStyle />
            <NavMenu />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/productos' exact component={Products} />
                <Route path='/productos/:categorie' exact component={Products} />
                <Route path='/detalle/:id' exact component={DetailProduct} />
                <Route path='/carrito' exact component={Card}  />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes
