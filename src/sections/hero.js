import React from 'react';
import styled from 'styled-components';
import { Typography, Stack, Button } from '../components';

const HeroSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    grid-column: 3 / span 6;
    min-height: 100vh;

    strong {
        color: var(--textPrimary);
    }

    button {
        height: 100%;
    }

    @media (${({ theme }) => theme.breakpoints.sm}) {
        button {
            width: 100%;

            &:first-of-type {
                margin-bottom: ${({ theme }) => theme.spacing(3)};
            }
        }
    }
`;

const Hero = () => {
    return (
        <HeroSection id='landing-page'>
            <Stack direction='column' gap={4}>
                <Typography
                    tag='h2'
                    variant='caption'
                    style={{ fontSize: '30px' }}
                >
                    Hello! 👋
                </Typography>
                <Typography
                    tag='p'
                    variant='body1'
                    style={{ fontSize: '26px' }}
                >
                    I am <strong>Arkadiusz Liszka</strong>; an aspiring
                    front-end developer focused on creating intuitive and
                    beautiful apps.
                </Typography>
                <Stack>
                    <Button href='#contact'>Get in touch</Button>
                    <Button variant='outlined'>
                        <a
                            href='/resume.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Resume
                        </a>
                    </Button>
                </Stack>
            </Stack>
        </HeroSection>
    );
};

export default Hero;
