import React from 'react';
import styled from 'styled-components';
import { Typography, Stack, Profile, Itemlist } from '../components';

const skills = [
    'JavaScript (ES6+)',
    'Node.js',
    'TypeScript',
    'Next.js',
    'ReactJS',
    'Vue.js',
];

const AboutSection = styled.section`
    grid-column: 3 / span 8;
    grid-row: 2;
`;

const Inner = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
`;

const About = () => {
    return (
        <AboutSection id='about'>
            <Typography tag='h2' variant='title'>
                About me
            </Typography>
            <Inner>
                <Stack gap={2} direction='column'>
                    <Typography tag='p'>
                        I'm currently studing at AGH University in Poland. When
                        I graduate I want to persude my carrer as a Software
                        Enginner. My goal is to build scalable and fast
                        applications while keeping user experience and visuals
                        as clean as possible. To make it happen, I was exploring
                        new technologies over the years.
                    </Typography>
                    <Typography tag='span' variant='body'>
                        Here are a few of them I’ve been working with recently:
                    </Typography>
                    <Itemlist items={skills} />
                </Stack>
                <Profile />
            </Inner>
        </AboutSection>
    );
};

export default About;
