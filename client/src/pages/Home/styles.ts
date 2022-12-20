import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > strong {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme["base-subtitle"]};
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
    }
`

export const CoffeeList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
`