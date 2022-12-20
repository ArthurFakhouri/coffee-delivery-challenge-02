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
        overflow-x: hidden;
        overflow-y: overlay;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 1440px){
        html {
            font-size: 87.5%;
        }
    }

    @media (max-width: 1250px) {
        html {
            font-size: 75%;
        }
    }

    @media (max-width: 1100px) {
        html {
            font-size: 62.5%;
        }
    }
`