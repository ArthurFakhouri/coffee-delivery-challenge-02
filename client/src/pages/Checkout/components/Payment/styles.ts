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

export const PaymentContainer = styled(CompleteOrder)`
    margin-top: .75rem;

    & > section > h5 > svg{
        color: ${props => props.theme.purple};
    }
`

export const PaymentMethods = styled.div`
    display: flex;
    gap: .75rem;

    label {
        display: flex;
        width: 100%;
        gap: .75rem;
        white-space: nowrap;
        user-select: none;
        
        padding: 1rem;
        background: ${props => props.theme["base-button"]};
        border-radius: 6px;
        
        font-size: .75rem;
        line-height: 160%;
        text-transform: uppercase;
        color: ${props => props.theme["base-text"]};

        & > svg {
            color: ${props => props.theme.purple}
        }

        & > input {
            display: none;
        }
    }

    label:hover {
        background: ${props => props.theme["base-hover"]};
        color: ${props => props.theme["base-subtitle"]};
        cursor: pointer;
    }

    label:has(input:checked){
        background: ${props => props.theme["purple-light"]};
        border: solid 1px ${props=> props.theme.purple};
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`