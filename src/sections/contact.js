import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Stack, Typography, Button, Social } from '../components';

const ContactSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    grid-column: 5 / span 4 !important;
    flex-direction: column;
    text-align: center;
    grid-row: 5;

    @media (${({ theme }) => theme.breakpoints.md}) {
        grid-column: 3 / 11 !important;
    }

    @media (${({ theme }) => theme.breakpoints.sm}) {
        grid-column: 2 / 12 !important;
    }
`;

const Note = styled.span`
    margin: ${({ theme }) => `${theme.spacing(2)} 0`};
    font-family: var(--fontSansSerif);
    font-size: 14px;
    display: none;

    @media screen and (${({ theme }) => theme.breakpoints.md}) {
        display: inline;
    }
`;

const Email = styled.a`
    ${({ theme }) => theme.mixins.underline};
    right: ${({ theme }) => theme.spacing(5)};
    font-family: var(--fontSerif);
    transition: var(--transition);
    color: var(--primary);
    font-size: 14px;
    z-index: 5;
    position: fixed;
    bottom: 20px;

    @media screen and (${({ theme }) => theme.breakpoints.xl}) {
        right: ${({ theme }) => theme.spacing(4)};
        transform-origin: bottom right;
        transform: rotate(90deg) translateY(100%);
    }

    @media screen and (${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    return (
        <ContactSection id='contact' ref={ref}>
            <Stack
                direction='column'
                gap={2}
                className={inView ? 'fade-up-enter-active' : 'fade-up-enter'}
            >
                <Typography tag='h2' variant='title'>
                    Contact
                </Typography>
                <Typography tag='p' gutterBottom>
                    Got a question, proposal, or project to realize? Use the
                    button below to get in touch.
                </Typography>
                <Button href='mailto:arkadiusz.liszka13@gmail.com'>
                    Say Hello
                </Button>
                <Note> or find me on:</Note>
            </Stack>
            <Social />
            <Email href='mailto:arkadiusz.liszka13@gmail.com'>
                arkadiusz.liszka13@gmail.com
            </Email>
        </ContactSection>
    );
};

export default Contact;
