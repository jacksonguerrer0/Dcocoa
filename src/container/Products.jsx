import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory, useParams } from 'react-router-dom'
import { ContainerProducts } from './products-style/ProductsStyled'

const Products = () => {
    // const {categorie} =  useParams();
    // const [category, setCategory] = useState('')
    // console.log(category)
    // useEffect(() => {
    //     setCategory(categorie)
    // }, [categorie])
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
                <NavLink className='cartProduct' 
                style={{backgroundImage: "url(https://m.media-amazon.com/images/I/913lCvAq-lL._SY445_.jpg)"}}
                to={`/detalle/${2}`}
                >
                    <p>Nombre del producto</p>
                </NavLink>
            </div>
        </ContainerProducts>
    )
}

export default Products
