import styled from "styled-components";


export const SuccessContainer = styled.div`

    margin-top: 5rem;
    display: flex;
    flex-direction: column;

    & > strong {
        color: ${props => props.theme["yellow-dark"]};
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
    }

    & > span {
        font-size: 1.25rem;
        line-height: 130%;
    }
`

export const BorderWrap = styled.div`
    margin-top: 2.5rem;
    background: linear-gradient(
        to right, 
        ${props => props.theme.yellow},
        ${props => props.theme.purple}
    );
    border-radius: 6px 36px;
    padding: 1px;

    & > div{
        height: 100%;
        border-radius: 6px 35px;
        padding: 2.5rem;
        background-color: ${props => props.theme.background};

        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @media only screen and (min-width: 1200px) {
        width: 32.875rem;
    }
`

export const Data = styled.div`
    display: flex;
    justify-content: space-between;

    & > img {
        max-width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`