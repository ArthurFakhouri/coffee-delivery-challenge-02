import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const OutletFit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;

    @media only screen and (min-width: 1440px) {
        & > div {
            max-width: 90rem;
            width: 90rem;
            padding: 0 10rem;
        }
    }

`
