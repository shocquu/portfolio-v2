import React from 'react';
import styled, { css } from 'styled-components';

const Title = css`
    font-family: var(--fontSansSerif);
    color: var(--textPrimary);
    font-size: 36px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;

    &::before {
        content: '';
        display: inline-block;
        height: 6px;
        width: 26px;
        background: var(--primary);
    }
`;

const Subtitle = css`
    font-family: var(--fontSansSerif);
    color: var(--textPrimary);
    font-size: 24px;
`;

const Caption = css`
    font-family: var(--fontSerif);
    color: var(--primary);
    font-size: 14px;
    font-weight: 500;
`;

const Body1 = css`
    font-family: var(--fontSansSerif);
    color: var(--textSecondary);
    font-size: 20px;
    line-height: 1.4;
`;

const Body2 = css`
    ${Body1}
    font-size: 18px;
`;

const Text = styled.div`
    text-align: ${({ align }) => (align ? align : 'inherit')};
    ${({ variant }) => {
        switch (variant) {
            case 'title':
                return Title;
            case 'subtitle':
                return Subtitle;
            case 'caption':
                return Caption;
            case 'body2':
                return Body2;
            default:
                return Body1;
        }
    }}

    a {
        ${({ theme }) => theme.mixins.underline};
        color: var(--primary);
    }
`;

const Typography = ({
    tag = 'div',
    variant = 'body',
    align,
    children,
    ...props
}) => (
    <Text as={tag} variant={variant} align={align} {...props}>
        {children}
    </Text>
);

export default Typography;
