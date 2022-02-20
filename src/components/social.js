import React from 'react';
import styled from 'styled-components';
import { LinkedIn, Github } from './icons';

const socials = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/arkadiusz-liszka-51789814b/',
        icon: <LinkedIn size={24} />,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/shocquu',
        icon: <Github size={24} />,
    },
];

const Icons = styled.div`
    left: ${({ theme }) => theme.spacing(5)};
    gap: ${({ theme }) => theme.spacing(2)};
    transition: var(--transition);
    color: var(--primary);
    z-index: 5;
    position: fixed;
    bottom: 20px;
    display: flex;

    a:hover {
        color: var(--textPrimary);
    }

    @media screen and (${({ theme }) => theme.breakpoints.xl}) {
        left: ${({ theme }) => theme.spacing(4)};
        transform-origin: bottom left;
        transform: rotate(-90deg) translateY(100%);
    }

    @media screen and (${({ theme }) => theme.breakpoints.md}) {
        gap: ${({ theme }) => theme.spacing(3)};
        position: relative;
        transform: none;
        left: unset;
        bottom: unset;

        svg {
            height: 36px;
            width: 36px;
        }
    }
`;

const Social = () => (
    <Icons>
        {socials.map(({ name, url, icon }) => (
            <a
                key={name}
                aria-label={name}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
            >
                {icon}
            </a>
        ))}
    </Icons>
);

export default Social;
