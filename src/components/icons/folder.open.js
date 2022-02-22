import React from 'react';

const FolderOpen = ({ size = 24, color, ...props }) => (
    <svg
        width={`${size}px`}
        height={`${size}px`}
        viewBox='0 0 662.6 440'
        role='img'
        fill={color || 'currentColor'}
        xmlns='http://www.w3.org/2000/svg'
        style={{ position: 'relative', bottom: '5px', marginLeft: '-10px' }}
        {...props}
    >
        <path
            d='M662.6,98.9c0.1-18.5-14.9-33.5-33.3-33.5H432.6L365.9,0H155v163.1H21.2h-2.3l0.1,0.1C2.2,164-4.8,174.7,3.5,187.7
   L147,413.5c3.5,5.5,9.1,10.5,15.9,14.6c6.1,7.3,15.3,11.9,25.5,11.9h440.8c4.8,0,9.4-1,13.5-2.9c6.6-1.5,10.9-4.9,12.4-9.5
   c4.7-5.7,7.5-13.1,7.5-21V98.9z M595.8,132.3v192.4l-87.1-137.1c-8.6-13.5-30.6-24.5-49-24.5H221.9v-30.8H595.8z'
        />
    </svg>
);

export default FolderOpen;
