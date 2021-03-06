import React from 'react';
import styled from 'styled-components';

const Flexbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme, gap }) => (gap ? theme.spacing(gap) : '0px')};
    flex-direction: ${({ direction }) => (direction ? direction : 'row')};
    align-items: ${({ align }) => {
        switch (align) {
            case 'left':
                return 'flex-start';
            case 'right':
                return 'flex-end';
            case 'center':
                return 'center';
            default:
                return 'inherit';
        }
    }};
    justify-content: ${({ justify }) => {
        switch (justify) {
            case 'left':
                return 'flex-start';
            case 'right':
                return 'flex-end';
            case 'center':
                return 'center';
            default:
                return 'inherit';
        }
    }};
`;

const Stack = ({ direction, gap, align, justify, children, ...props }) => {
    return (
        <Flexbox
            direction={direction}
            gap={gap}
            align={align}
            justify={justify}
            {...props}
        >
            {children}
        </Flexbox>
    );
};

export default Stack;
