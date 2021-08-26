import styled from 'styled-components'
import { variables } from '../../variables/variables'

export const ContainerMenu = styled.div`
    background-color: ${variables.backgroundColorBrown};
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    img{
        width: 4rem;
        height: 4rem;
        margin-left: 2rem;
    }
    div{
        margin: 0 3rem;
        a{
           color: ${variables.colorFontBrownYellow};
           text-decoration: none;
           margin: 1rem;
           :hover{
               border-bottom: 2px solid ${variables.colorFontBrownYellow};
           }
        }
        i{
            color: ${variables.colorFontBrownYellow};
            position: relative;
            font-size: 1.5rem;
            span{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.8rem;
                width: 1.5rem;
                height: 1.5rem;
                text-align: center;
                position: absolute;
                top: -1rem;
                right: -1.3rem;
                background-color: ${variables.colorFontBrownYellow};
                border-radius: 100%;
                padding: 0.2rem;
            }
        }
    }
`