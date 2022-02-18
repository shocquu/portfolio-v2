import React from 'react';
import { Layout } from '../components';
import { Hero, About, Work, Projects, Contact } from '../sections';
import 'normalize.css';

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <Work />
            <Projects />
            <Contact />
        </Layout>
    );
};

export default IndexPage;
