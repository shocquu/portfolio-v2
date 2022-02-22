import React from 'react';
import { useInView } from 'react-intersection-observer';
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

    @media (${({ theme }) => theme.breakpoints.sm}) {
        button {
            width: 100%;
            height: unset;

            &:first-of-type {
                margin-bottom: ${({ theme }) => theme.spacing(3)};
            }
        }
    }
`;

const Wrapper = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    gap: 8px;

    @media (${({ theme }) => theme.breakpoints.sm}) {
        h2 {
            font-size: 22px !important;
        }
    }
`;

const HandEmoji = styled.span`
    position: relative;
    animation: hand-wave-animation 6s infinite;
    transform-origin: 70% 70%;
    font-size: 28px;
    bottom: 3px;

    @media (${({ theme }) => theme.breakpoints.sm}) {
        font-size: 24px;
    }
`;

const Hero = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <HeroSection id='landing-page' ref={ref}>
            <Stack direction='column' gap={4}>
                <Wrapper
                    style={{ transitionDelay: '300ms' }}
                    className={
                        inView ? 'fade-up-enter-active' : 'fade-up-enter'
                    }
                >
                    <Typography tag='h2' variant='caption' fontSize={30}>
                        Hello!
                    </Typography>
                    <HandEmoji>👋</HandEmoji>
                </Wrapper>
                <Typography
                    tag='p'
                    variant='body1'
                    fontSize={26}
                    style={{ transitionDelay: '500ms' }}
                    className={
                        inView ? 'fade-up-enter-active' : 'fade-up-enter'
                    }
                >
                    I am <strong>Arkadiusz Liszka</strong>; an aspiring
                    front-end developer focused on creating intuitive and
                    beautiful apps.
                </Typography>
                <Stack
                    style={{ transitionDelay: '700ms' }}
                    className={
                        inView ? 'fade-up-enter-active' : 'fade-up-enter'
                    }
                >
                    <Button href='#contact'>Get in touch</Button>
                    <Button
                        href='/resume.pdf'
                        target='_blank'
                        variant='outlined'
                    >
                        Resume
                    </Button>
                </Stack>
            </Stack>
        </HeroSection>
    );
};

export default Hero;
