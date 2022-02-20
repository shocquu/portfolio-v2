import React from 'react';
import styled, { css } from 'styled-components';

const ContainedButton = css`
    background-color: ${({ color }) => (color ? color : 'var(--primary)')};
    color: var(--textPrimary);

    &:hover {
        background-color: var(--primaryDark);
    }
`;

const OutlinedButton = css`
    color: ${({ color }) => (color ? color : 'var(--primary)')};
    border: ${({ color }) =>
        color ? `1px solid ${color}` : '1px solid var(--primary)'};

    &:hover {
        background-color: var(--paper);
    }
`;

const StyledButton = styled.button`
    text-transform: uppercase;
    transition: var(--transition);
    letter-spacing: 2px;
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
    ${({ variant }) => {
        switch (variant) {
            case 'outlined':
                return OutlinedButton;

            default:
                return ContainedButton;
        }
    }};

    @media screen and (${({ theme }) => theme.breakpoints.sm}) {
        font-size: 12px;
    }
`;

const Button = ({ href, variant, color, children }) => (
    <StyledButton role='button' variant={variant} color={color}>
        {href ? <a href={href}>{children}</a> : children}
    </StyledButton>
);

export default Button;
