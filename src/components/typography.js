import React from 'react';
import styled, { css } from 'styled-components';

const Title = css`
    font-family: var(--fontSansSerif);
    color: var(--textPrimary);
    font-size: 36px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;

    &::before {
        content: '';
        display: inline-block;
        height: 6px;
        width: 26px;
        background: var(--primary);
    }
`;

const Subtitle1 = css`
    font-family: var(--fontSerif);
    color: var(--primary);
    font-size: 30px;
    font-weight: 500;
`;

const Subtitle2 = css`
    font-family: var(--fontSansSerif);
    color: var(--textSecondary);
    font-size: 26px;
`;

const Body = css`
    font-family: var(--fontSansSerif);
    color: var(--textSecondary);
    font-size: 20px;
    line-height: 1.4;
`;

const Text = styled.div`
    text-align: ${({ align }) => (align ? align : 'left')};
    ${({ variant }) => {
        switch (variant) {
            case 'title':
                return Title;
            case 'subtitle1':
                return Subtitle1;
            case 'subtitle2':
                return Subtitle2;
            default:
                return Body;
        }
    }}

    strong {
        color: var(--textPrimary);
    }
`;

const Typography = ({ tag = 'div', variant = 'body', align, children }) => (
    <Text as={tag} variant={variant} align={align}>
        {children}
    </Text>
);

export default Typography;
