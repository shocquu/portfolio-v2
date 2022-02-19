import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Nav from './nav';
import { LinkedIn, Github } from './icons';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const links = [
    {
        name: 'About Me',
        href: '#about',
    },
    // {
    //     name: 'Work',
    //     href: '#work',
    // },
    {
        name: 'Projects',
        href: '#projects',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
];

const Main = styled.div`
    display: grid;
    margin: 0 auto;
    max-width: 1600px;
    grid-template-columns: repeat(12, 1fr);
`;

const Social = styled.div`
    color: var(--primary);
    transition: var(--transition);
    position: fixed;
    bottom: 20px;
    left: 60px;
    display: flex;
    gap: 8px;

    a:hover {
        color: var(--textPrimary);
    }
`;

const Email = styled.a`
    ${({ theme }) => theme.mixins.underline};
    color: var(--primary);
    font-size: 14px;
    position: fixed;
    bottom: 20px;
    right: 60px;
`;

const Layout = ({ children }) => {
    // handle dangerouslySetInnerHTML links
    useEffect(() => {
        const links = Array.from(
            document.querySelectorAll('#featured a, #projects a')
        );
        links.forEach((link) => {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav links={links} />
            <Social>
                <a
                    href='https://www.linkedin.com/in/arkadiusz-liszka-51789814b/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'
                >
                    <LinkedIn size={24} />
                </a>
                <a
                    href='https://github.com/shocquu'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub'
                >
                    <Github size={24} />
                </a>
            </Social>
            <Email href='mailto:arkadiusz.liszka13@gmail.com'>
                arkadiusz.liszka13@gmail.com
            </Email>
            <Main>
                {children}
                {/* <Footer /> */}
            </Main>
        </ThemeProvider>
    );
};

export default Layout;
