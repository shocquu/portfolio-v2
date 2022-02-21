import React from 'react';
import { Layout, Footer } from '../components';
import { Hero, About, Featured, Contact } from '../sections';

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <Featured />
            <Contact />
            <Footer />
        </Layout>
    );
};

export default IndexPage;
