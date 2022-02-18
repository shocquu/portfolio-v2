import { useDebugValue } from 'react';
import mixins from './mixins';

export default {
    mixins,
    breakpoints: {
        xs: `0px`,
        sm: `600px`,
        md: `900px`,
        lg: `1200px`,
        xl: `1536px`,
    },
    spacing: (index) => {
        const values = [0, 4, 8, 16, 32, 64, 128];
        return `${values[index]}px`;
    },
};
