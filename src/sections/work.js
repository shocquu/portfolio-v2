import React from 'react';
import styled from 'styled-components';
import { Typography, Timeline } from '../components';

const WorkSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    grid-column: 3 / span 6;
    grid-row: 3;
    min-height: 100vh;
`;

const Work = () => {
    return (
        <WorkSection id='work'>
            <Typography tag='h2' variant='title'>
                Where I worked
            </Typography>
            <Timeline />
        </WorkSection>
    );
};

export default Work;
