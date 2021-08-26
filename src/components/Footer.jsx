import React from 'react'
import { variables } from '../variables/variables'
import { ContainerFooter } from './footer-style/FooterStyled'

const Footer = () => {
    return (
        <ContainerFooter>
            <img src={variables.logoDcocoa} alt="Logo Dcocoa" />
            <p>Somos una empresa en el sector alimenticio del chocolate, fabricamos chocolate de buen sabor y lo procesamos para crear dulces y ricas tortas</p>
            <span>© 2021 - Jackson Guerrero</span>
        </ContainerFooter>
    )
}

export default Footer
