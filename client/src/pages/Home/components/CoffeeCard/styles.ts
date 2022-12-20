import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;

    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 1.25rem;

    img {
        margin-top: calc(0px - 1.25rem);
        width: 7.5rem;
        height: 7.5rem;
    }

    strong {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme["base-subtitle"]};
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
    }

    p {
        color: ${props => props.theme["base-label"]};
        font-size: .875rem;
        line-height: 130%;
        margin-top: .5rem;
        margin-bottom: 2rem;
    }
`

export const Categories = styled.ul`    
    list-style: none;
    display: flex;
    gap: .25rem;
    margin-top: .75rem;
    margin-bottom: 1rem;

    li {
        background: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        border-radius: 100px;
        padding: .25rem .5rem;
        font-weight: 700;
        font-size: .625rem;
        line-height: 130%;
        text-transform: uppercase;
    }
`

export const Buy = styled.div`
    display: flex;
    gap: 1.5rem;

    & > span {
        font-size: .875rem;
        line-height: 130%;
        color: ${props => props.theme["base-text"]};
    }

    & > span > span {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 130%;
    }
`

export const Actions = styled.div`
    display: flex;
    gap: .5rem;

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        
        border-radius: 6px;
        background-color: ${props=> props.theme["purple-dark"]};
        color: ${props => props.theme["base-card"]};
        border: none;
        padding: .5rem;

        transition: .5s background;
    }

    & > button:hover{
        cursor: pointer;
        background-color: ${props => props.theme.purple};
    }
`