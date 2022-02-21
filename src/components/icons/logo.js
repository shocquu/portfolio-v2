import React from 'react';

const External = ({ size = 24 }) => (
    <svg
        width={`${size}px`}
        height={`${size}px`}
        id='logo'
        role='img'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 126.3 86.9'
    >
        <title>Logo</title>
        <polygon
            fill='#EEEEEE'
            points='79.7,0 79.4,0.5 49.9,51.7 29.6,86.9 0,86.9 49.9,0.5 49.9,0 '
        />
        <polygon
            fill='#E7575C'
            points='49.9,86.9 79.4,35.7 79.4,86.9 49.9,86.9 '
        />
        <polyline fill='#EEEEEE' points='96.7,57.3 96.7,86.9 126.3,86.9 ' />
    </svg>
);

export default External;
