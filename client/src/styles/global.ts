import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: transparent;
    }

    body {
        background: ${props => props.theme.background};
        -webkit-font-smoothing: antialiased;
        overflow-x: visible;
        overflow-y: overlay;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`