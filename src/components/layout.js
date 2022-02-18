import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Nav from './nav';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const links = [
    {
        name: 'About Me',
        href: '#about',
    },
    {
        name: 'Work',
        href: '#work',
    },
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

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav links={links} />
            <div>Social</div>
            <div>Email</div>
            <Main>
                {children}
                {/* <Footer /> */}
            </Main>
        </ThemeProvider>
    );
};

export default Layout;
