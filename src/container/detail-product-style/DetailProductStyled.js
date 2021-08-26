import styled from 'styled-components'
import { variables } from '../../variables/variables'

export const ContainerDetailProduct = styled.div`
    display: flex;
    padding: 4rem 4rem;
    width: 80%;
    margin: auto;
    img{
        width: 20rem;
        height: 25rem;
        object-fit: cover;
    }
    .contentInfoDetail{
        display: flex;
        flex-flow: wrap column;
        justify-content: center;
        margin-left: 4rem;
        h4, p{
        margin-bottom: 2rem;
        }
        .contentActionCard{
            display: flex;
            justify-content: flex-end;
            input{
                width: 4rem;
                /* background-color: ${variables.backgroundColorBrown};
                color: ${variables.colorFontBrownYellow}; */
                border: none;
                padding: 0.5rem;
                border-radius: 0.5rem;
                border: 2px solid ${variables.backgroundColorBrown};
            }
            button{
                background-color: ${variables.backgroundColorBrown};
                color: ${variables.colorFontBrownYellow};
                border: none;
                padding: 0.5rem;
                border-radius: 0.5rem;
                cursor: pointer;
                margin-left: 1rem;
                :hover{
                    background-color: ${variables.colorFontBrownYellow};
                    color: ${variables.backgroundColorBrown};
                }
            }
        }
    }

`