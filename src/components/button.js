import React from 'react';
import styled, { css } from 'styled-components';

const ContainedButton = css`
    background-color: ${({ color }) => (color ? color : 'var(--primary)')};
    color: #fff;

    &:hover {
        background-color: var(--primaryDark);
    }
`;

const OutlinedButton = css`
    font-weight: 600;
    color: ${({ color }) => (color ? color : 'var(--primary)')};
    border: ${({ color }) =>
        color ? `1px solid ${color}` : '1px solid var(--primary)'};

    &:hover {
        background-color: var(--paper);
    }
`;

const StyledButton = styled.button`
    font-family: var(--fontSerif);
    transition: var(--transition);
    text-transform: uppercase;
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
`;

const Button = ({ href, variant, color, children }) => (
    <StyledButton role='button' variant={variant} color={color}>
        {href ? <a href={href}>{children}</a> : children}
    </StyledButton>
);

export default Button;
