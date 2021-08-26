import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { redirectWindow } from '../helpers/functions'
import { variables } from '../variables/variables'
import { ContainerMenu } from './nav-menu-style/NavMenuStyled'

const NavMenu = () => {
    const history = useHistory();
    return (
        <ContainerMenu>
          <img src={variables.logoDcocoa} alt="Logo Dcoco" 
          onClick={()=> {
            history.push('/')
          }}/>
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
