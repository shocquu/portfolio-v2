import React, { Suspense } from 'react';
import { Loader } from '../components';

const Layout = React.lazy(() => import('../components/layout'));
const LazyComponent = React.lazy(() => import('../components/lazy'));
const Footer = React.lazy(() => import('../components/footer'));
const Hero = React.lazy(() => import('../sections/hero'));
const About = React.lazy(() => import('../sections/about'));
const Featured = React.lazy(() => import('../sections/featured'));
const Projects = React.lazy(() => import('../sections/projects'));
const Contact = React.lazy(() => import('../sections/contact'));

const IndexPage = () => {
    const isSSR = typeof window === 'undefined';

    return (
        !isSSR && (
            <Suspense fallback={<Loader />}>
                <Layout>
                    <LazyComponent>
                        <Hero />
                        <About />
                        <Featured />
                        <Projects />
                        <Contact />
                        <Footer />
                    </LazyComponent>
                </Layout>
            </Suspense>
        )
    );
};

export default IndexPage;
