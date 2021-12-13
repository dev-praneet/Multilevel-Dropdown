import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Karla', sans-serif;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .svg-icon {
        margin: auto;
        overflow: hidden;
        height: 0.7em;
    }

    .svg-icon-second-component {
        // display: none;
        height: 12px;
        align-self: center;
    }
`;