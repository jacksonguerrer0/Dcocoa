import React from 'react'
import { ContainerPay } from './pay-style/PayStyled'

const Pay = () => {
    return (
        <ContainerPay>
            <form>
                <h3>Informacion de pago</h3>
                <input type="text" placeholder='Nombre completo'/>
                <input type="text" placeholder='Correo electrónico'/>
                <input type="text" placeholder='N° de tarjeta' />
                <div className='contentDate'>
                    <input type="date" placeholder='F. Vencimiento MM/AA' className='dateCard'/>
                    <input type="text" placeholder='CVV' className='cvvCard'/>
                </div>
                <button type='submit'>Comprar</button>
            </form>
        </ContainerPay>
    )
}

export default Pay
