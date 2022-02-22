import React from 'react';

const FolderClosed = ({ size = 24, color, ...props }) => (
    <svg
        width={`${size}px`}
        height={`${size}px`}
        viewBox={`0 0 507.7 440`}
        role='img'
        fill={color || 'currentColor'}
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path d='M474.3,65.4H277.6L210.9,0H0v406.5C0,425,15,440,33.4,440h440.8c18.4,0,33.4-15,33.4-33.4V98.9  C507.7,80.4,492.7,65.4,474.3,65.4z M66.9,373.1V132.3h373.9v240.8H66.9z' />
    </svg>
);

export default FolderClosed;
