import styled from "styled-components"

const CompleteOrder = styled.div`
    padding: 2.5rem;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    background: ${props => props.theme["base-card"]};

    & > section > h5 {
        display: flex;
        gap: .5rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }

    & > section > p {
        margin-left: calc(22px + .5rem);
        font-size: .875rem;
        line-height: 130%;
        color: ${props => props.theme["base-text"]};
    }
`

export const AddressContainer = styled(CompleteOrder)`
    margin-top: 1rem;

    & > section > h5 > svg{
        color: ${props => props.theme["yellow-dark"]};
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & input {
        padding: .75rem;
        background: ${props => props.theme["base-input"]};
        border: solid 1px ${props => props.theme["base-button"]};
        border-radius: 4px;
    }

    & > input:first-child {
        max-width: 12.5rem;
    }

    & > button {
        color: ${props => props.theme.white};
        background: ${props => props.theme.yellow};
        height: 46px;
        border: none;
        border-radius: 6px;

        font-size: .875rem;
        font-weight: 700;
        line-height: 160%;

        text-transform: uppercase;

        transition: .5s background;

        &:disabled {
            opacity: .7;
            cursor: not-allowed;
        }

        &:not(:disabled):hover{
            background-color: ${props => props.theme["yellow-dark"]};
            cursor: pointer;
        }
    }

    & > div {
        display: flex;
        gap: .75rem;

        & > input:first-child {
            max-width: 12.5rem;
        }

        & input:nth-child(2) {
            width: 100%;
        }

        & > input:nth-child(3) {
            width: 3.75rem;
        }

        & > div {
            display: flex;
            align-items: center;
            position: relative;
            flex: 1;
        }
    }

    @media only screen and (max-width: 600px) {
        & > div {
            flex-direction: column;
        }
    }
`

export const Complement = styled.input`
    width: 100%;

    &:not(:placeholder-shown) ~ label{
        display: none;
    }

    & ~ label {
        position: absolute;
        font-size: .75rem;
        color: ${props => props.theme["base-subtitle"]};
        right: 1rem;
        font-style: italic;
        cursor: text;
    }
`