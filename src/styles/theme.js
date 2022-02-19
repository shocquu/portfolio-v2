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
    hex2rgb: (hex) => {
        let r, g, b;
        hex = hex.substring(1);
        const len = hex.length;

        if (len !== 3 && len !== 6) return;
        if (len === 3) {
            r = hex.substring(0, 1);
            g = hex.substring(1, 2);
            b = hex.substring(2, 3);
            r += r;
            g += g;
            b += b;
        } else {
            r = hex.substring(0, 2);
            g = hex.substring(2, 4);
            b = hex.substring(4, 6);
        }

        r = parseInt(r, 16);
        g = parseInt(g, 16);
        b = parseInt(b, 16);

        return `${r},${g},${b}`;
    },
};
