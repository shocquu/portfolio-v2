import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '../components';

const ContactSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    grid-column: 3 / span 6;
    grid-row: 5;
    min-height: 100vh;
`;

const Contact = () => {
    return (
        <ContactSection id='landing-page'>
            <Typography tag='h2' variant='title'>
                Hello!
            </Typography>
            <Typography tag='p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                iusto in odio nam sint quo, corrupti quia distinctio
                perferendis, doloremque sed error? Esse, reprehenderit ad. Ab
                neque fugit illum dolor!
            </Typography>
        </ContactSection>
    );
};

export default Contact;
