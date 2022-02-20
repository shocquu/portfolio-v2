import React from 'react';
import styled from 'styled-components';

const StyledChip = styled.div`
    padding: ${({ theme }) => theme.spacing(2)};
    font-family: var(--fontSerif);
    font-size: 12px;
    background: var(--primary);
    color: var(--textPrimary);
    white-space: nowrap;
    font-weight: 500;
    cursor: default;

    @media screen and (${({ theme }) => theme.breakpoints.sm}) {
        padding: ${({ theme }) => theme.spacing(1)};
    }
`;

const Chip = ({ name }) => <StyledChip>{name}</StyledChip>;

export default Chip;
