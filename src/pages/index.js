import React, { Suspense } from 'react';
import { Loader, LazyComponent } from '../components';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const Layout = React.lazy(() => import('../components/layout'));
const Footer = React.lazy(() => import('../components/footer'));
const Hero = React.lazy(() => import('../sections/hero'));
const About = React.lazy(() => import('../sections/about'));
const Featured = React.lazy(() => import('../sections/featured'));
const Contact = React.lazy(() => import('../sections/contact'));

const IndexPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Suspense fallback={<Loader />}>
                <LazyComponent>
                    <Layout>
                        <Hero />
                        <About />
                        <Featured />
                        <Contact />
                        <Footer />
                    </Layout>
                </LazyComponent>
            </Suspense>
        </ThemeProvider>
    );
};

export default IndexPage;
