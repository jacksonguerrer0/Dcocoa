import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { variables } from '../variables/variables'
import { ContainerMenu } from './nav-menu-style/NavMenuStyled'
import {firebase} from '../firebase-config/firebaseConfig'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/loginDucks'
import { types } from '../redux/types/types'
const NavMenu = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const removeAuth = async () => {
        await firebase.auth().signOut();
        dispatch(logout())
    }
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
              <NavLink to='/carrito'>
              <i className="fas fa-shopping-cart"><span>5</span></i>
              </NavLink>
              <i className="fas fa-sign-out-alt" onClick={removeAuth}></i>
          </div>
        </ContainerMenu>
    )
}

export default NavMenu
