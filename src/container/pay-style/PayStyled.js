import styled from 'styled-components'
import { variables } from '../../variables/variables'

export const ContainerPay =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
    h3{
        text-align: center;
    }
    form{
        width: 25rem;
        height: 25rem;
        display: flex;
        align-items: center;
        flex-flow: column wrap;
        padding: 1rem 0;
        border-radius: 1rem;
        background-color: ${variables.colorFontBrownYellow};
        input{
            border: none;
            padding: 0.5rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            width: 70%;
        }
        .contentDate{
            display: flex;
            width: 70%;
            .cvvCard{
                width: 25%;
            }
            .dateCard{
                width: 75%;
            }
        }
        button{
            margin: 2rem 0;
            background-color: ${variables.backgroundColorBrown};
            color: ${variables.colorFontBrownYellow};
            padding: 0.5rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            :hover{
                background-color: ${variables.colorFontBrownYellow};
                color: ${variables.backgroundColorBrown};  
                border: 1px solid ${variables.backgroundColorBrown} ;
            }
        }
    }
`