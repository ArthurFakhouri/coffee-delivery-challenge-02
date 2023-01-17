import styled from "styled-components"

interface ButtonDelete {
    activeDelete: boolean;
}

export const ItemContainer = styled.div`
    display: flex;
    padding: .5rem;
    padding-right: .5rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const Coffee = styled.div`
    display: flex;
    width: 100%;
    gap: 1.25rem;

    & > img {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
    }
`

export const Data = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: .5rem;

    & > h5 {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
    }

    & > div:first-child {
        display: flex;
        width: 100%;
        justify-content: space-between;

        & > span {
            color: ${props => props.theme["base-text"]};
            font-weight: 700;
            line-height: 130%;
        }
    }
    
    & > div:last-child {
        display: flex;
        gap: .5rem;
    }

    & > div {
        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }
    }
`

export const Delete = styled.button<ButtonDelete>`
    max-width: 8rem;
    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
    padding: 0 .5rem;

    background: ${props => props.theme["base-button"]};
    transition: .5s background;

    border: none;
    border-radius: 6px;
    color: ${props => props.theme["base-text"]};

    & > svg {
        color: ${props => props.theme.purple}
    }

    &:hover {
        cursor: pointer;
        background: ${props => props.theme["base-hover"]};
        color: ${props => props.activeDelete ? props.theme.red : props.theme["base-subtitle"]};
        

        & > svg {
            color: ${props => props.activeDelete ? props.theme.red : props.theme["purple-dark"]};
        }
    }
`