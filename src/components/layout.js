import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Seo, Nav } from './index';
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
        name: 'Featured',
        href: '#featured',
    },
    // {
    //     name: 'Projects',
    //     href: '#projects',
    // },
    {
        name: 'Contact',
        href: '#contact',
    },
];

const Main = styled.main`
    display: grid;
    margin: 0 auto;
    overflow: hidden;
    max-width: 1600px;
    grid-template-columns: repeat(12, 1fr);
`;

const Layout = ({ children }) => {
    useEffect(() => {
        // handle dangerouslySetInnerHTML links
        const links = Array.from(
            document.querySelectorAll('#featured a, #projects a')
        );
        links.forEach((link) => {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
    }, []);

    return (
        <>
            <Seo />
            <Nav links={links} />
            <Main>{children}</Main>
        </>
    );
};

export default Layout;
