import styled from "styled-components";

export const HeaderFit = styled.div`
    position: sticky;
    top: 0px;
    background-color: ${props => props.theme.background};

    display: flex;
    justify-content: center;
`

export const HeaderContainer = styled.header`
    max-width: 90rem;
    width: 90rem;
    display: flex;
    justify-content: space-between;
    padding: 2rem 10rem;
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

    & svg {
        color: ${props => props.theme.purple};
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