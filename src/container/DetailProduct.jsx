import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { filterDetailProduct } from '../helpers/functions'
import { addProductCard } from '../redux/cardDucks'
import { ContainerDetailProduct } from './detail-product-style/DetailProductStyled'

const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch()
    const {idProduct} = useParams();
    const {listProducts} = useSelector(state => state.products);

    const handleQuantityChange = ({target}) => {
        setQuantity(target.value)
    }
    const handleAddProductCard = () => {
        let product = filterDetailProduct(idProduct, listProducts);
        dispatch(addProductCard(quantity, product ))
    }
    const productDetail = () => {
        let detailProduct = filterDetailProduct(idProduct, listProducts);
        return (
            <>
            <img src={detailProduct.img} alt="" />
            <div className='contentInfoDetail'>
                <h3>{detailProduct.name}</h3>
                <h4>${detailProduct.price}</h4>
                <p>{detailProduct.description}</p>
                <div className='contentActionCard'>
                    <input type="number" min='1' defaultValue={1} onChange={handleQuantityChange}/>
                    <button onClick={handleAddProductCard}>Añadir al carrito</button>
                </div>
            </div>
            </>
        )
    }
    return (
        <ContainerDetailProduct>
            {
                productDetail()
            }
        </ContainerDetailProduct>
    )
}

export default DetailProduct
