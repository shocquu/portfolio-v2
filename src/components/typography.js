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

    @media (${({ theme }) => theme.breakpoints.sm}) {
        font-size: 26px;

        &::before {
            width: 12px;
        }
    }

    @media (${({ theme }) => theme.breakpoints.xs}) {
        font-size: 20px;
    }
`;

const Subtitle = css`
    font-family: var(--fontSansSerif);
    color: var(--textPrimary);
    font-size: 24px;

    @media (${({ theme }) => theme.breakpoints.sm}) {
        font-size: 18px;
    }
`;

const Caption = css`
    font-family: var(--fontSerif);
    color: var(--primary);
    font-size: 14px;
    font-weight: 500;

    @media (${({ theme }) => theme.breakpoints.sm}) {
        font-size: 12px;
    }
`;

const Body1 = css`
    font-family: var(--fontSansSerif);
    color: var(--textSecondary);
    font-size: 20px;
    line-height: 1.4;

    @media screen and (${({ theme }) => theme.breakpoints.sm}) {
        font-size: 18px;
    }
`;

const Body2 = css`
    ${Body1}
    font-size: 18px;

    @media (${({ theme }) => theme.breakpoints.sm}) {
        font-size: 14px;
    }
`;

const Text = styled.div`
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
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}px`};
    ${({ gutterBottom }) => gutterBottom && 'margin-bottom: 16px'};
    text-align: ${({ align }) => (align ? align : 'inherit')};

    a {
        ${({ theme }) => theme.mixins.underline};
        color: var(--primary);
    }
`;

const Typography = ({
    tag = 'div',
    variant = 'body',
    align,
    fontSize,
    gutterBottom,
    children,
    innerRef,
    ...props
}) => (
    <Text
        as={tag}
        variant={variant}
        align={align}
        fontSize={fontSize}
        gutterBottom={gutterBottom ? true : false}
        ref={innerRef}
        {...props}
    >
        {children}
    </Text>
);

export default Typography;
