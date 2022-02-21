import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import 'normalize.css';

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
        font-family: var(--fontSansSerif);
        line-height: 1.4;

        @media screen and (${({ theme }) => theme.breakpoints.md}) {
            &[data-blurred] {
                overflow: hidden;
            }
        }
    }

    /* Scrollbar */
    html {
        scroll-behavior: smooth;
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

    ::selection {
        background-color: var(--paper);
        color: #fff;
    }

    section {
        width: 100%;
        margin: 0 auto;
        padding-bottom: 100px;

        @media screen and (${({ theme }) => theme.breakpoints.xl}) {
            grid-column: 2 / 12 !important;
        }
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    a {
        cursor: pointer;
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

    /* Animations */    
    @keyframes hand-wave-animation {
        0%, 30%, 100% { transform: rotate( 0deg) }
        5% { transform: rotate(15.0deg) }
        10% { transform: rotate(-7deg) }
        15% { transform: rotate(17deg) }
        20% { transform: rotate(-3deg) }
        25% { transform: rotate(12deg) }
    }

    /* Transitions */
    .slide {
        opacity: 0;
        visibility: hidden;
        transform: translateY(12px);
        transition: opacity 150ms var(--easing), transform 150ms var(--easing);
    }
    .slide.enter-done {
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
        transition: opacity 150ms var(--easing), transform 150ms var(--easing);
    }
    .slide.exit-done {
        opacity: 0;
        visibility: hidden;
        transform: translateY(12px);
        transition: opacity 150ms var(--easing), transform 150ms var(--easing);
    }

    .fade-in-enter {
        opacity: 0;
        transition: opacity 1000ms var(--easing);
    }
    .fade-in-enter-active {
        opacity: 1;
        transition: opacity 1000ms var(--easing);
    }

    .fade-up-enter {
        opacity: 0;
        transform: translateY(16px);
        transition: opacity var(--time) var(--easing), transform var(--time) var(--easing);
    }
    .fade-up-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity var(--time) var(--easing), transform var(--time) var(--easing);
    }

    .fade-down-enter {
        opacity: 0;
        transform: translateY(-16px);
        transition: opacity var(--time) var(--easing), transform var(--time) var(--easing);
    }
    .fade-down-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity var(--time) var(--easing), transform var(--time) var(--easing);
    }

    .fade-left-enter {
        opacity: 0;
        transform: translateX(-16px);
        transition: opacity var(--time) var(--easing), transform var(--time) var(--easing);
    }
    .fade-left-enter-active {
        opacity: 1;
        transform: translateX(0px);
        transition: opacity var(--time) var(--easing), transform var(--time) var(--easing);
    }

    .fade-right-enter {
        opacity: 0;
        transform: translateX(16px);
        transition: opacity var(--time) var(--easing), transform var(--time) var(--easing);
    }
    .fade-right-enter-active {
        opacity: 1;
        transform: translateX(0px);
        transition: opacity var(--time) var(--easing), transform var(--time) var(--easing);
    }
`;

export default GlobalStyle;
