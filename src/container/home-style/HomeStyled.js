import styled from 'styled-components'
import { variables } from '../../variables/variables'

export const ContainerHome = styled.div`
    display: flex;
    flex-flow: wrap row;
    margin:  3rem 2rem;
    .contentInfoHome{
        width: 50%;
        padding: 0 2rem 0 3rem;
        margin: auto;
        a{
            display: flex;
            width: 10rem;
            height: 2rem;
            justify-content: center;
            align-items: center;
            background-color: ${variables.backgroundColorBrown};
            color: ${variables.colorFontBrownYellow};
            border-radius: 1rem;
            padding:  0.5rem 1rem;
            text-decoration: none;
            margin: 2rem 0 0 auto !important;
            :hover{
                background-color: ${variables.colorFontBrownYellow};
                color: ${variables.backgroundColorBrown};
            }
        }
    }
    .contentCategoriesHome{
        display: flex;
        width: 50%;
        padding-left: 4rem;
        img{
            width: 15rem;
            height: 25rem;
            object-fit: cover;
        }
        .contentDivCategories{
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: flex-end;
            width: 100%;
            .cartCategories{
                display: flex;
                flex-flow: column wrap;
                justify-content: flex-end;
                align-items: flex-start;
                background-color: ${variables.backgroundColorBrown};
                width: 10rem;
                height: 7rem;
                border-radius: 3rem 0.5rem 0.5rem 0.5rem;
                margin-top: 1rem;
                margin-right: 2rem;
                padding: 0.5rem;
                cursor: pointer;
                text-decoration: none;
                :hover{
                    background-color: ${variables.colorFontBrownYellow};
                    h3,p{
                        color: ${variables.backgroundColorBrown};
                    }
                }
                h3,p{
                    color: ${variables.colorFontBrownYellow};
                }
            }
        }
    }
`