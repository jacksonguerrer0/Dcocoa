import styled from 'styled-components'
import { variables } from '../../variables/variables'

export const ContainerFooter = styled.div`
    display: flex;
    height: 10rem;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    background-color: ${variables.backgroundColorBrown};
    position: relative;
    bottom: 0;
    img{
        width: 6rem;
        height: 6rem;
        margin-left: 3rem;
        cursor: pointer;
    }
    p{
        color: ${variables.colorFontBrownYellow};
        width: 50%;
        text-align: center;
    }
    span{
        color: ${variables.colorFontBrownYellow};
        width: 20%;
    }
`