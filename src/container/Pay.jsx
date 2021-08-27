import React from 'react'
// import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { ContainerPay } from './pay-style/PayStyled'
import {  db } from '../firebase-config/firebaseConfig'

const Pay = () => {
    const [values, handleInputChange, reset ] = useForm({
        name: '',
        email: '',
        cardNo: '',
        date: '',
        cvv: ''
    }) 
    // const {name, email, cardNo, date, cvv} = values;
    // const dispatch = useDispatch()
    const handleSubmitPay = async (e) => {
        e.preventDefault()
        let res = await db.collection('/Comprador').add({...values, totalPay: 232434})
        console.log(res)
        reset()
    }
    return (
        <ContainerPay>
            <form onSubmit={handleSubmitPay}>
                <h3>Informacion de pago</h3>
                <input 
                name='name' 
                onChange={handleInputChange} 
                type="text" 
                placeholder='Nombre completo'/>
                <input 
                name='email' 
                onChange={handleInputChange} 
                type="text" 
                placeholder='Correo electrónico'/>
                <input 
                name='cardNo' 
                onChange={handleInputChange} 
                type="text" 
                placeholder='N° de tarjeta' />
                <div className='contentDate'>
                    <input 
                    name='date' 
                    onChange={handleInputChange} 
                    type="date" 
                    placeholder='F. Vencimiento MM/AA' className='dateCard'/>
                    <input 
                    name='cvv' 
                    onChange={handleInputChange} 
                    type="text" 
                    placeholder='CVV' className='cvvCard'/>
                </div>
                <button type='submit'>Comprar</button>
            </form>
        </ContainerPay>
    )
}

export default Pay
