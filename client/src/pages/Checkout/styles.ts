import styled from "styled-components";


export const CheckoutContainer = styled.div`
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    
    & > section > h4 {
        font-family: 'Baloo 2' , sans-serif;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }

    @media only screen and (max-width: 1200px) {
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }
`