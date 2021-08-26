import React from 'react'
import { NavLink } from 'react-router-dom'
import { ContainerCard } from './card-style/CardStyled'

const Card = () => {
    return (
        <ContainerCard>
            <div className='table'>
            <div className='thead'>
                <h4 className='itemTable'> </h4>
                <h4 className='itemTable'>Cantidad</h4>
                <h4 className='itemTable'>Precio</h4>
                <h4 className='itemTable'>Sub Total</h4>
            </div>
            <div className='tbody'>
                <div className='contentTBody'>
                    <img src="https://jacksonguerrer0.github.io/Sprint3/img/dulces.jpg" alt="" 
                    />
                    <p className='itemTable'>cantiadad</p>
                    <p className='itemTable'>$$$</p>
                    <p className='itemTable'>$$$</p>
                </div>
            </div>
            </div>
            <div className='contentActionPay'>
                <p>Total a pagar: $$$$</p>
                <NavLink to='/pagar/:id'>Pagar</NavLink>
            </div>
        </ContainerCard>
    )
}

export default Card
