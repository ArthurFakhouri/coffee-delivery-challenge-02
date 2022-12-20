import styled from "styled-components";


export const CartContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 44px;
    width: 28rem;
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    
    background: ${props => props.theme["base-card"]};

    & > button {
        text-transform: uppercase;
        line-height: 160%;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 700;
        font-size: .875rem;
        margin-top: 1.5rem;
        color: ${props => props.theme.white};
        background: ${props => props.theme.yellow};
        
        padding: .75rem .5rem;

        border: none;
        border-radius: 6px;

        transition: .5s background;

        &:not(:disabled):hover {
            cursor: pointer;
            background: ${props => props.theme["yellow-dark"]};
        }
        &:disabled{
            cursor: not-allowed;
            opacity: .7;
        }
    }
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;

    overflow: overlay;

    max-height: 15rem;

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-track {
        background: ${props => props.theme["base-hover"]};
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme["base-text"]};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme["base-title"]}; 
    }
    
    & > div:nth-child(even):not(:last-child) {
        margin-bottom: 1.5rem;
    }
`

export const Divider = styled.div`
    border-top: solid 1px ${props => props.theme["base-button"]};
    margin-top: 1.493rem;
`