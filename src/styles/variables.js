import { css } from 'styled-components';
import colors from './colors';

const variables = css`
    :root {
        /* Color palette */
        --bgColor: ${colors.mirage};
        --paper: ${colors.fiord};
        --textPrimary: ${colors.gallery};
        --textSecondary: ${colors.logan};
        --primary: ${colors.mandy};
        --primaryLight: ${colors.mandyLighter};
        --primaryDark: ${colors.mandyDarker};
        --secondary: ${colors.emerald};
        --secondaryLight: ${colors.emeraldLighter};
        --secondaryDark: ${colors.emeraldDarker};

        /* Dimensions */
        --hamburgerWidth: 40px;
        --navHeight: 70px;

        /* Typography */
        --fontSansSerif: 'Raleway', 'Roboto', 'Open Sans', -apple-system,
            system-ui, sans-serif;
        --fontSerif: 'Bitter', 'Merriweather', 'Roboto Serif', -apple-system,
            system-ui, serif;

        /* Transitions */
        --easing: ease;
        --time: 500ms;
        --transition: all 150ms var(--easing);
    }
`;

export default variables;
