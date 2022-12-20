import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const OutletFit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        max-width: 90rem;
        width: 90rem;
        padding: 0 10rem;
    }
`