import { useDebugValue } from 'react';
import mixins from './mixins';

export default {
    breakpoints: {
        mobileS: `max-width: 330px`,
        mobileM: `max-width: 400px`,
        mobileL: `max-width: 480px`,
        tabletS: `max-width: 600px`,
        tabletL: `max-width: 768px`,
        desktopXS: `max-width: 900px`,
        desktopS: `max-width: 1080px`,
        desktopM: `max-width: 1200px`,
        desktopL: `max-width: 1400px`,
    },
    mixins,
    spacing: (index) => {
        const values = [0, 4, 8, 16, 32, 64, 128];
        return `${values[index]}px`;
    },
};
