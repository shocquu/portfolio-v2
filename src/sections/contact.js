import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '../components';

const ContactSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    text-align: center;
    grid-column: 5 / span 4;
    grid-row: 5;
`;

const Contact = () => {
    return (
        <ContactSection id='contact'>
            <Typography tag='h2' variant='title'>
                Contact
            </Typography>
            <Typography tag='p' gutterBottom>
                Got a question, proposal, or project to realize? Use the button
                below to get in touch.
            </Typography>
            <Button href='mailto:arkadiusz.liszka13@gmail.com'>
                Say Hello
            </Button>
        </ContactSection>
    );
};

export default Contact;
