import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
    ${variables}

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--bgColor);
        color: var(--textSecondary);
        /*font-family: var(--font-sans);
        font-size: var(--fz-xl);*/
        line-height: 1.3;
    }

    ::selection {
        background-color: var(--paper);
        color: #fff;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: var(--transition);
    }

    button {
        border: 0;
        outline: 0;
        padding: 0;
        cursor: pointer;
        background: none;
    }

    /* Transitions */
    .slide {
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 150ms var(--easing), transform 150ms var(--easing);
    }
    .slide.enter-done {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 150ms var(--easing), transform 150ms var(--easing);
    }
    .slide.exit-done {
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 150ms var(--easing), transform 150ms var(--easing);
    }

    /* Scrollbar */
    html {
        scrollbar-width: thin;
        scrollbar-color: var(--bgColor) var(--secondary);
    }
    body::-webkit-scrollbar {
        width: 14px;
    }
    body::-webkit-scrollbar-track {
        background: var(--bgColor);
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--paper);
        border: 3px solid var(--bgColor);
        border-radius: 10px;
    }
`;

export default GlobalStyle;
