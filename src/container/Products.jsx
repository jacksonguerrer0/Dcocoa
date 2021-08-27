import React from 'react'
import { useSelector } from 'react-redux';
import {  NavLink,  useParams } from 'react-router-dom'
import { filterCategory } from '../helpers/functions';
import { ContainerProducts } from './products-style/ProductsStyled'

const Products = () => {
    const {categorie} =  useParams();
    const {listProducts} = useSelector(state => state.products)
    console.log(listProducts)
console.log(categorie)
    const controllProducts = () => {
        if(categorie === undefined){
            return(
                listProducts.map((ele, i) => (
                    <NavLink className='cartProduct' 
                    style={{backgroundImage: `url(${ele?.img})`}}
                    to={`/detalle/${ele.id}`}
                    key={i}>
                        <p>{ele.name}</p>
                    </NavLink>
                ))
            )
        }
        if(categorie === 'tortas'){
            let filter = filterCategory('tortas', listProducts )
            return(
                filter.map((ele, i) => {
                    return(
                    <NavLink className='cartProduct' 
                    style={{backgroundImage: `url(${ele?.img})`}}
                    to={`/detalle/${ele.id}`}
                    key={i}>
                        <p>{ele.name}</p>
                    </NavLink>
                )})
            )
        }
        if(categorie === 'dulces'){
            let filter = filterCategory('dulces', listProducts )
            return(
                filter.map((ele, i) => {
                    return(
                    <NavLink className='cartProduct' 
                    style={{backgroundImage: `url(${ele?.img})`}}
                    to={`/detalle/${ele.id}`}
                    key={i}>
                        <p>{ele.name}</p>
                    </NavLink>
                )})
            )
        }
    }
    return (
        <ContainerProducts>
            <div className='categories'>
                <h3>Categorias</h3>
                <div className='categoriesClick'>
                   <NavLink to='/productos/tortas'>Tortas</NavLink>
                   <NavLink to='/productos/dulces'>Dulces</NavLink> 
                </div>
            </div>
            <div className='products'>
                {
                    controllProducts()
                }
            </div>
        </ContainerProducts>
    )
}

export default Products
