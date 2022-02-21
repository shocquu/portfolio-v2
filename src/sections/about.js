import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Typography, Stack, Profile, Itemlist } from '../components';

const skills = [
    'JavaScript (ES6+)',
    'Node.js',
    'TypeScript',
    'Next.js',
    'ReactJS',
    'Gatsby',
];

const AboutSection = styled.section`
    grid-column: 3 / span 8;
    grid-row: 2;
`;

const Inner = styled.div`
    display: grid;
    transition-delay: var(--time);
    grid-template-columns: 3fr auto;
    gap: ${({ theme }) => theme.spacing(5)};

    @media screen and (${({ theme }) => theme.breakpoints.md}) {
        gap: ${({ theme }) => theme.spacing(4)};
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

    return (
        <AboutSection id='about' ref={ref}>
            <Typography
                tag='h2'
                variant='title'
                className={
                    inView ? 'fade-left-enter-active' : 'fade-left-enter'
                }
            >
                About me
            </Typography>
            <Inner
                className={inView ? 'fade-up-enter-active' : 'fade-up-enter'}
            >
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
