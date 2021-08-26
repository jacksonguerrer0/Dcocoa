import React from 'react'
import { ContainerLogin } from './login-style/LoginStyled'

const Login = () => {
    return (
        <ContainerLogin>
            <form>
                <h3>Resgístrate</h3>
                <input type='email' placeholder='Correo Electrónico'/>
                <input type="password" placeholder= 'Contraseña' />
                <input type="password" placeholder='Repite la contraseña' />
                <button type='submit'>Iniciar</button>
                <div className='iconsSession'>
                <i className="fab fa-google"></i>
                </div>
            </form>
        </ContainerLogin>
    )
}

export default Login
