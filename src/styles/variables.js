import { css } from 'styled-components';

const variables = css`
    :root {
        /* Color palette */
        --bgColor: #1b1f3a;
        /*--bgColor: #282d52;*/
        --paper: #3e4264;
        --textPrimary: #eeeeee;
        --textSecondary: #a9adc9;
        --primary: #e7575c;
        /*--primary: #d6555a;*/
        --primaryLight: #da666b;
        --primaryDark: #c04c51;
        --seconday: #56d678;
        --secondayLight: #67da86;
        --secondayDark: #4dc06c;

        /* Typography */
        --fontSansSerif: 'Raleway', 'Roboto', 'Open Sans', -apple-system,
            system-ui, sans-serif;
        --fontSerif: 'Bitter', 'Merriweather', 'Roboto Serif', -apple-system,
            system-ui, serif;

        /* Transitions */
        --easing: ease-in-out;
        --transition: all 150ms var(--easing);

        /* Dimensions */
        --hamburgerWidth: 40px;
        --navHeight: 70px;
    }
`;

export default variables;
