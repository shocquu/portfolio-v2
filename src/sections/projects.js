import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '../components';

const ProjectsSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    grid-column: 3 / span 6;
    grid-row: 4;
    min-height: 100vh;
`;

const Projects = () => {
    return (
        <ProjectsSection id='projects'>
            <Typography tag='h2' variant='title'>
                Some of my projects
            </Typography>
        </ProjectsSection>
    );
};

export default Projects;
