import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ContainerHome } from './home-style/HomeStyled'

const Home = () => {
    return (
        <ContainerHome>
          <div className='contentInfoHome'>
            <h1>DCocoa</h1>
            <h4>¿No sabes que regalar en el mes del Amor?</h4>
            <p>Pues preparate porque Dcocoa afrece lo mas ricos productos derivados del chocolate a un precio especial.</p>
            <Link to='/productos'>
              Ver productos
            </Link>
          </div>
          <div className='contentCategoriesHome'>
            <img src="https://i.imgur.com/DuzLCuE.jpg" alt="Producto Dcocoa" />
            <div className='contentDivCategories'>
              <NavLink className='cartCategories' to={`/productos/tortas`}>
                <h3>Tortas</h3>
                <p>Deleitate</p>
              </NavLink>
              <NavLink className='cartCategories' to={`/productos/dulces`}>
                <h3>Dulces</h3>
                <p>Deleitate</p>
              </NavLink>
            </div>
          </div>
        </ContainerHome>
    )
}

export default Home
