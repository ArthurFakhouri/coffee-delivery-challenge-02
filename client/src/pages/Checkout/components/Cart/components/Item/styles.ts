import styled from "styled-components"

interface ButtonDelete {
    activeDelete: boolean;
}

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem .25rem;

    & > span {
        color: ${props => props.theme["base-text"]};
        font-weight: 700;
        line-height: 130%;
    }
`

export const Coffee = styled.div`
    display: flex;
    gap: 1.25rem;

    & > img {
        width: 4rem;
        height: 4rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        & > span {
            color: ${props => props.theme["base-subtitle"]};
            line-height: 130%;
        }
    }

    & > div > div {
        display: flex;
        gap: .5rem;
    }
`

export const Delete = styled.button<ButtonDelete>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;

    background: ${props => props.theme["base-button"]};
    transition: .5s background;

    border: none;
    border-radius: 6px;
    padding: 0 .5rem;
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