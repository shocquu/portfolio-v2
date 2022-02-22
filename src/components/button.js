import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const ContainedButton = css`
    background-color: ${({ color }) => (color ? color : 'var(--primary)')};
    border: 1px solid var(--primary);
    color: #fff;

    &:hover {
        background-color: var(--primaryDark);
    }
`;

const OutlinedButton = css`
    font-weight: 600;
    color: ${({ color }) => (color ? color : 'var(--primaryLight)')};
    border: ${({ color }) =>
        color ? `1px solid ${color}` : '1px solid var(--primary)'};

    &:hover {
        background-color: var(--paper);
    }
`;

const SharedStyles = css`
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

const StyledButton = styled.button`
    ${SharedStyles}
`;

const StyledLink = styled.a`
    ${SharedStyles}
`;

const StyledGatsbyLink = styled(Link)`
    ${SharedStyles}
`;

const Button = ({ href, variant, color, children, ...props }) =>
    href ? (
        href === '/' ? (
            <StyledGatsbyLink
                to={href}
                role='button'
                variant={variant}
                color={color}
                {...props}
            >
                {children}
            </StyledGatsbyLink>
        ) : (
            <StyledLink
                href={href}
                role='button'
                variant={variant}
                color={color}
                {...props}
            >
                {children}
            </StyledLink>
        )
    ) : (
        <StyledButton role='button' variant={variant} color={color} {...props}>
            {children}
        </StyledButton>
    );

export default Button;
