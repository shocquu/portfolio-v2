import React from 'react';
import { Layout } from '../components';
import { Hero, About, Work, Featured, Contact } from '../sections';

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <About />
            {/* <Work /> */}
            <Featured />
            <Contact />
        </Layout>
    );
};

export default IndexPage;
