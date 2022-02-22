import React from 'react';
import styled from 'styled-components';
import Typography from './typography';

const Frame = styled.footer`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    grid-column: 1 / 13;
    grid-row: 7;
    margin-bottom: 20px;

    a {
        ${({ theme }) => theme.mixins.link};
        ${({ theme }) => theme.mixins.underline};
        color: var(--primaryLight);
    }

    span {
        color: var(--primaryLight);
    }
`;

const Footer = () => (
    <Frame direction='column' gap={2}>
        <Typography fontSize={12}>
            Designed &amp; Built with ❤️ by <span>me</span>
        </Typography>
        <Typography fontSize={11}>
            Inspired by{' '}
            <a
                href='https://brittanychiang.com/'
                target='_blank'
                rel='noopener noreferrer'
            >
                Brittany Chiang
            </a>
        </Typography>
    </Frame>
);

export default Footer;
