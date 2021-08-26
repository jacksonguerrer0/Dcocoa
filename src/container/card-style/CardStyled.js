import styled from 'styled-components'
import { variables } from '../../variables/variables'

export const ContainerCard = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 4rem;
    justify-content: center;
    .table{
        display: flex;
        flex-flow: column wrap;
        width: 80%;
        margin: auto;
        border-bottom: 2px solid ${variables.backgroundColorBrown};
        .thead{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            justify-content: center;
            align-items: center;
            border-bottom: 2px solid ${variables.backgroundColorBrown};
        }
        .contentTBody{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            border-bottom: 1px solid ${variables.gray};
        }
        .itemTable{
            width: 10rem;
            text-align: center;
        }
        img{
        width: 100px;
        margin: auto;
    }
    }
    .contentActionPay{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 2rem;
        p{
            margin-right: 2rem;
        }
        a{
            background-color: ${variables.backgroundColorBrown};
            color: ${variables.colorFontBrownYellow};
            padding: 0.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            :hover{
                background-color: ${variables.colorFontBrownYellow};
                color: ${variables.backgroundColorBrown};   
            }
        }
    }
`