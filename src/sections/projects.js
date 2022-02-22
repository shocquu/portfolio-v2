import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Typography, Stack, Chip, IconLink } from '../components';
import { FolderClosed, GithubOutlined, External } from '../components/icons';

const ProjectsSection = styled.section`
    grid-column: 4 / span 6;
    grid-row: 5;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px 16px;
    align-items: flex-start;

    [data-interactive] {
        cursor: pointer;
    }
`;

const InnerGrid = styled(Grid)`
    grid-template-columns: 50px auto 1fr;
`;

const FolderContent = styled.div`
    grid-column-start: 3;
    transition: height 300ms ease;
    overflow: hidden;
    height: ${({ open }) => (open ? '100%' : '0')};

    a {
        ${({ theme }) => theme.mixins.link};
    }
`;

const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <ProjectsSection id='projects'>
            <Grid>
                <FolderClosed size={50} color='#d14449' />
                <Typography
                    tag='h3'
                    variant='subtitle'
                    fontSize={36}
                    gutterBottom
                >
                    Draft
                </Typography>
                <div>3</div>
                <InnerGrid>
                    <Folder
                        data={{
                            name: 'Project #1',
                            description:
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae fugit aspernatur alias quisquam provident consequatur ratione dolorum numquam, omnis autem et sunt nihil aut harum illo praesentium minima nam?',
                            date: '01/2021',
                            company: 'College Project',
                            tags: ['JavaScript', 'CSS'],
                        }}
                    />
                    <Folder
                        last
                        data={{
                            name: 'Project #2',
                            description:
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae fugit aspernatur alias quisquam provident consequatur ratione dolorum numquam, omnis autem et sunt nihil aut harum illo praesentium minima nam?',
                            date: '01/2021',
                            company: 'Freelance Work',
                            tags: ['ReactJS', 'Bootstrap'],
                        }}
                    />
                </InnerGrid>
            </Grid>
        </ProjectsSection>
    );
};

const Folder = ({ data, last = false }) => {
    const { name, description, date, company, tags, repo, external } = data;
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen((open) => !open);
    };

    return (
        <>
            {last ? <LShape /> : <TShape />}
            <FolderClosed
                size={40}
                color={'#cbccd1'}
                onClick={handleClick}
                data-interactive
            />
            <Typography
                tag='h4'
                variant='subtitle'
                fontSize={32}
                onClick={handleClick}
                data-interactive
            >
                {name}
            </Typography>
            {!last && <IShape />}
            <FolderContent open={open}>
                <Stack direction='column' gap={1}>
                    <Stack gap={1} align='center'>
                        <Typography variant='caption'>{company}</Typography>
                        <span>•</span>
                        <Typography variant='caption'>{date}</Typography>
                    </Stack>
                    <Typography variant='body2'>{description}</Typography>
                    <Stack gap={2}>
                        {tags.map((tag) => (
                            <Chip key={tag} name={tag} padding={4} />
                        ))}
                    </Stack>
                    <Stack gap={2} style={{ marginBottom: '16px' }}>
                        <a
                            href={repo}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='GitHub Link'
                        >
                            <GithubOutlined size={18} />
                        </a>
                        {!external && (
                            <a
                                href={external}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='External Link'
                            >
                                <External size={18} />
                            </a>
                        )}
                    </Stack>
                </Stack>
            </FolderContent>
        </>
    );
};

const TShape = () => <span>T</span>;
const LShape = () => (
    <svg
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 50 50'
        xmlSpace='preserve'
    >
        <line class='st0' x1='25' y1='0' x2='25' y2='50' />
    </svg>
);
const IShape = () => <span>I</span>;

export default Projects;
