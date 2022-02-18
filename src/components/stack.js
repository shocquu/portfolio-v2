import React from 'react';
import styled from 'styled-components';

const Flexbox = styled.div`
    display: flex;
    gap: ${({ theme, gap }) => (gap ? theme.spacing(gap) : '0px')};
    flex-direction: ${({ direction }) => (direction ? direction : 'row')};
`;

const Stack = ({ children, ...props }) => {
    return <Flexbox {...props}>{children}</Flexbox>;
};

export default Stack;
