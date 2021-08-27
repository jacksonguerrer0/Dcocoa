import styled from 'styled-components'
import { variables } from '../../variables/variables'

export const ContainerProducts = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    margin: 4rem auto;
    .categories{
        width: 30%;
        .categoriesClick{
            display: flex;
            flex-flow: column wrap;
            border-right: 1px solid ${variables.gray};
            a{
                text-decoration: none;
                margin-top: 1rem;
                border-bottom: 1px solid ${variables.gray};
            }
            .active{
                border-bottom: 2px solid ${variables.backgroundColorBrown};
                color: ${variables.backgroundColorBrown};
            }
        }
    }

    .products{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 1rem;
        max-width: 70%;
        padding: 1rem 2rem;
        .cartProduct{
            width: 180px;
            height: 240px;
            border-radius: 1rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            cursor: pointer;
            p{
                background-color: ${variables.backgroundColorBrown};
                color: ${variables.colorFontBrownYellow};
                border-radius: 1rem 1rem 0 0 ;
                border-bottom: 3px solid ${variables.colorFontBrownYellow};
                position: absolute;
                bottom: 0;
                max-height: 4rem;
                padding: 0.5rem;
                width: 100%;
                min-height: 3rem ;
                text-align: center;
            }
        }
    }
`