import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavMenu from '../components/NavMenu'
import Home from '../container/Home'
import Footer from '../components/Footer'
import Products from '../container/Products'
import DetailProduct from '../container/DetailProduct'
import Card from '../container/Card'
import Pay from '../container/Pay'
import Error404 from './Error404'
import { getProduct } from '../redux/listProductsDucks'

const AppPrivate = () => {
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <Router>
            <NavMenu />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/productos' exact component={Products} />
                <Route path='/productos/:categorie' exact component={Products} />
                <Route path='/detalle/:idProduct' exact component={DetailProduct} />
                <Route path='/carrito' exact component={Card}  />
                <Route path='/pagar/:idProductPay' exact component={Pay}  />
                <Route path='*' component={Error404} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppPrivate
