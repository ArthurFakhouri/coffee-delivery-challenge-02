import styled from "styled-components";

interface HeaderFitProps {
    offsetWidth: number;
}

export const HeaderFit = styled.header<HeaderFitProps>`
    position: sticky;
    top: 0px;
    background-color: ${props => props.theme.background};

    display: flex;
    justify-content: center;
    z-index: 1;
    
    & > div {
        width: ${props => props.offsetWidth ? `${props.offsetWidth}px` : 'auto'};
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    padding-right: 10px;

    @media only screen and (min-width: 1440px) {
        max-width: 90rem;
        width: 90rem;
        padding: 2rem 10rem;
    }
`

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
`

export const Location = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    text-decoration: none;
    border-radius: 8px;
    gap: .25rem;

    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
    cursor: pointer;

    &:hover > span {
        visibility: visible;
    }

    & svg {
        color: ${props => props.theme.purple};
    }

    @media only screen and (max-width: 600px) {
        & > span {
            background-color: ${props => props.theme["base-title"]};
            color: ${props => props.theme.white};
            position: absolute;
            padding: .5rem;
            border-radius: 8px;
            top: 75%;
            right: 16px;
            visibility: hidden;
        }
    }
`

export const Cart = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        text-decoration: none;
        border-radius: 8px;
        position: relative;
        background: ${props => props.theme["yellow-light"]};

        & > svg {
            color: ${props => props.theme["yellow-dark"]};
            transition: .5s color;
        }

        & > span {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;

            width: 1.25rem;
            height: 1.25rem;

            top: -.4375rem;
            right: -.4375rem;
            
            font-size: .75rem;
            font-weight: 700;

            background: ${props => props.theme["yellow-dark"]};
            color: ${props => props.theme.white};
            border-radius: 50%;
            transition: .5s background;
        }
    }

    & > a:hover{
        & > svg{
            color: ${props => props.theme.yellow}
        }
        & > span{
            background: ${props => props.theme.yellow};
        }
    }
`