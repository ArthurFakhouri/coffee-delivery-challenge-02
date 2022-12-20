import styled from "styled-components";


export const CounterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    width: 72px;
    height: 38px;
    background-color: ${props => props.theme["base-button"]};
    border-radius: 6px;

    input {
        width: 20px;
        height: 21px;
        text-align: center;
        background: transparent;
        border: none;
        color: ${props => props.theme["base-title"]};
    }

    svg:hover {
        cursor: pointer;
        color: ${props => props.theme["purple-dark"]};
    }

    svg {
        color: ${props => props.theme.purple};
    }
`