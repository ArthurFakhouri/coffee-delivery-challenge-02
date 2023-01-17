import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > h2 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme["base-subtitle"]};
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
    }
`

export const CoffeeList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
    
    @media only screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2rem;
        row-gap: 2.5rem;
    }
`