import styled from "styled-components";


export const CheckoutContainer = styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 2rem;

    & > div > strong {
        font-family: 'Baloo 2' , sans-serif;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }
`