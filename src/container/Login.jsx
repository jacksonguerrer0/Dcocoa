import React from 'react'
import { useDispatch } from 'react-redux'
import { loginGoogle } from '../redux/loginDucks'
import { ContainerLogin } from './login-style/LoginStyled'

const Login = () => {
    const dispatch = useDispatch()
    const handleAuthGoogle = () => {
        dispatch(loginGoogle())
    }
    return (
        <ContainerLogin>
            <form>
                <h3>Resgístrate</h3>
                <input type='email' placeholder='Correo Electrónico'/>
                <input type="password" placeholder= 'Contraseña' />
                <input type="password" placeholder='Repite la contraseña' />
                <button type='submit'>Iniciar</button>
                <div className='iconsSession'>
                <i className="fab fa-google" onClick={handleAuthGoogle}></i>
                </div>
            </form>
        </ContainerLogin>
    )
}

export default Login
