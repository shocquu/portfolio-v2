import React from 'react';
import { Link } from 'gatsby';
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

    button {
        height: 100%;
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
`;

const HandEmoji = styled.span`
    content: '👋';
    position: relative;
    animation: hand-wave-animation 6s infinite;
    transform-origin: 70% 70%;
    font-size: 28px;
    bottom: 3px;
`;

const Hero = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <HeroSection id='landing-page'>
            <Stack direction='column' gap={4}>
                <Wrapper>
                    <Typography
                        tag='h2'
                        variant='caption'
                        fontSize={30}
                        innerRef={ref}
                        style={{ transitionDelay: '300ms' }}
                        className={
                            inView ? 'fade-up-enter-active' : 'fade-up-enter'
                        }
                    >
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
                    <Button variant='outlined'>
                        <Link
                            to='/resume.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Resume
                        </Link>
                    </Button>
                </Stack>
            </Stack>
        </HeroSection>
    );
};

export default Hero;
