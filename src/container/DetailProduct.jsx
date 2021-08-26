import React from 'react'
import { ContainerDetailProduct } from './detail-product-style/DetailProductStyled'

const DetailProduct = () => {
    return (
        <ContainerDetailProduct>
            <img src="https://jacksonguerrer0.github.io/Sprint3/img/dulces.jpg" alt="" />
            <div className='contentInfoDetail'>
                <h3>Nombre del producto</h3>
                <h4>Precio </h4>
                <p>Descripcion: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ratione aliquid tenetur quam itaque eos mollitia. Adipisci excepturi molestiae dolorem aut quo animi, aliquam beatae numquam, iure laborum odit obcaecati?</p>
                <div className='contentActionCard'>
                    <input type="number" min='1' defaultValue='1'/>
                    <button>Añadir al carrito</button>
                </div>
            </div>
        </ContainerDetailProduct>
    )
}

export default DetailProduct
