import React from 'react'
import { ContainerLogin } from './login-style/LoginStyled'

const Login = () => {
    return (
        <ContainerLogin>
            <form>
                <h3>Resgístrate</h3>
                <input type="text" placeholder='Correo Electrónico'/>
                <input type="text" placeholder= 'Contraseña' />
                <input type="text" placeholder='Repite la contraseña' />
                <button type='submit'>Iniciar</button>
                <div className='iconsSession'>
                <i class="fab fa-google"></i>
                </div>
            </form>
        </ContainerLogin>
    )
}

export default Login
