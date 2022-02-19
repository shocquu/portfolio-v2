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
    grid-template-columns: 3fr auto;
    gap: ${({ theme }) => theme.spacing(5)};
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
                        I'm currently studying at AGH University located in
                        Poland. When I graduate, I want to pursue my career as a
                        Software Engineer. My goal is to build fast and scalable
                        applications while keeping user experience and visuals
                        as clean as possible. To make it happen, I learned new
                        technologies over the years.
                    </Typography>
                    <Typography tag='span' variant='body'>
                        Here are a few of them I've been working with recently:
                    </Typography>
                    <Itemlist items={skills} />
                </Stack>
                <Profile />
            </Inner>
        </AboutSection>
    );
};

export default About;
