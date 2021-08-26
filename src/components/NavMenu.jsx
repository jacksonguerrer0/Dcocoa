import React from 'react'
import { NavLink } from 'react-router-dom'
import { variables } from '../variables/variables'
import { ContainerMenu } from './nav-menu-style/NavMenuStyled'

const NavMenu = () => {
    return (
        <ContainerMenu>
          <img src={variables.logoDcocoa} alt="Logo Dcoco" />
          <div>
              <NavLink to='/productos'>
                  Productos
              </NavLink>
              <NavLink to='/contacto'>
                  Contacto
              </NavLink>
              <i className="fas fa-shopping-cart"><span>5</span></i>
          </div>
        </ContainerMenu>
    )
}

export default NavMenu
