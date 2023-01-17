import styled from "styled-components";

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 3.5rem;

    padding: 5.75rem 0;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const Aside = styled.aside`
    img {
        max-width: 100%;
        height: auto;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 4.125rem;
`

export const Title = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: ${props => props.theme["base-title"]}
    }

    p {
        font-size: 1.25rem;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const Items = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2.5rem;
    row-gap: 1.25rem;

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }

    span {
        display: flex;
        align-items: center;
        color: ${props => props.theme["base-text"]};
        gap: .75rem;

        div {
            padding: .5rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        svg {
            color: ${props => props.theme.white};
        }

        &:nth-child(1) div {
            background-color: ${props => props.theme["yellow-dark"]};
        }

        &:nth-child(2) div {
            background-color: ${props => props.theme["base-text"]};
        }

        &:nth-child(3) div {
            background-color: ${props => props.theme["yellow"]};
        }

        &:nth-child(4) div {
            background-color: ${props => props.theme.purple};
        }
    }
`

export const Background = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: -1;
`