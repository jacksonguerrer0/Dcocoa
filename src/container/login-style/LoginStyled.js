import styled from 'styled-components'
import { variables } from '../../variables/variables'

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem 0;
    form{
        display: flex;
        align-items: center;
        flex-flow: column wrap;
        width: 25rem;
        padding: 3rem;
        background-color: ${variables.colorFontBrownYellow};
        border-radius: 1rem;
        h3{
            margin-top: 2rem;
        }
        input{
            width: 70%;
            margin-top: 1rem;
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: none;
        }
        .iconsSession{
            width: 70%;
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
            border-top: 2px solid ${variables.backgroundColorBrown};
            i{
            margin-top: 1rem;
            font-size: 1.5rem;
            cursor: pointer;
            color: ${variables.backgroundColorBrown};
            }
        }
        button{
            margin-top: 2rem;
            margin-bottom: 1rem;
            border: none;
            width:30%;
            padding: 0.5rem;
            border-radius: 0.5rem;
            background-color: ${variables.backgroundColorBrown};
            color: ${variables.colorFontBrownYellow};
            cursor: pointer;
            :hover{
                background-color: ${variables.colorFontBrownYellow};
                color: ${variables.backgroundColorBrown};
                border: 1px solid ${variables.backgroundColorBrown};
            }
        }
    }
`