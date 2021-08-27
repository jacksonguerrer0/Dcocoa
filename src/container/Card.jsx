import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ContainerCard } from './card-style/CardStyled'

const Card = () => {
    const {products} = useSelector(state => state.card)
    // const [total, setTotal] = useState(0)
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
            {
                products.map((ele => (
                    <div className='contentTBody' key={ele.id}>
                    <img src={ele.img} alt="" 
                    />
                    <p className='itemTable'>{ele.quantity}</p>
                    <p className='itemTable'>{ele.price}</p>
                    <p className='itemTable'>{ele.price * ele.quantity}</p>
                </div>
                )))
            }
            </div>
            </div>
            <div className='contentActionPay'>
                <p>Total a pagar: {0}</p>
                <NavLink to='/pagar/:id'>Pagar</NavLink>
            </div>
        </ContainerCard>
    )
}

export default Card
