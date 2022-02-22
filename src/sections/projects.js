import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography, Stack, Chip } from '../components';
import {
    FolderClosed,
    FolderOpen,
    GithubOutlined,
    External,
} from '../components/icons';

const ProjectsSection = styled.section`
    grid-column: 4 / span 6;
    grid-row: 5;
    margin-top: 50px;

    article {
        margin-bottom: 8px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 50px auto 1fr;
    grid-gap: 0px 16px;
    align-items: flex-start;

    [data-interactive] {
        cursor: pointer;
    }
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

const Connector = styled.svg`
    fill: var(--paper);
    width: 100%;
    height: 100%;
`;

const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const data = useStaticQuery(graphql`
        {
            projects: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/projects/" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            hidden
                            external
                            date
                            company
                            repo
                            tags
                            title
                        }
                        html
                    }
                }
            }
        }
    `);

    const projects = data.projects.edges.filter(({ node }) => node);

    if (!projects) return null;

    return (
        <ProjectsSection
            id='projects'
            ref={ref}
            className={inView ? 'fade-up-enter-active' : 'fade-up-enter'}
        >
            <Stack gap={3}>
                <FolderOpen size={60} color='#d14449' />
                <Typography
                    tag='h3'
                    variant='subtitle'
                    fontSize={36}
                    gutterBottom
                >
                    Draft
                </Typography>
            </Stack>
            <Grid>
                {projects.map(({ node }, i) => {
                    const { html, frontmatter } = node;
                    const {
                        title,
                        date,
                        company,
                        repo,
                        external,
                        tags,
                        hidden,
                    } = frontmatter;
                    const size = projects.length - 1;

                    return (
                        !hidden && (
                            <Folder
                                key={i}
                                date={date}
                                company={company}
                                title={title}
                                description={html}
                                repo={repo}
                                external={external}
                                tags={tags}
                                last={i === size}
                            />
                        )
                    );
                })}
            </Grid>
        </ProjectsSection>
    );
};

const Folder = ({
    date,
    company,
    title,
    description,
    repo,
    external,
    tags,
    last = false,
}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((open) => !open);
    };

    return (
        <>
            {last ? <LShape /> : <TShape />}
            {open ? (
                <FolderOpen
                    size={50}
                    color={'#cbccd1'}
                    onClick={handleClick}
                    data-interactive
                />
            ) : (
                <FolderClosed
                    size={40}
                    color={'#cbccd1'}
                    onClick={handleClick}
                    data-interactive
                />
            )}
            <Typography
                tag='h4'
                variant='subtitle'
                fontSize={32}
                onClick={handleClick}
                data-interactive
            >
                {title}
            </Typography>
            {!last && <IShape open={open} />}
            <FolderContent open={open}>
                <Stack gap={2} direction='column'>
                    <Stack gap={1} align='center'>
                        <Typography variant='caption'>{company}</Typography>
                        <span>•</span>
                        <Typography variant='caption'>{date}</Typography>
                    </Stack>
                    <Typography
                        tag='article'
                        variant='body2'
                        fontSize={16}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <Stack gap={2}>
                        {tags.map((tag) => (
                            <Chip key={tag} name={tag} padding={4} />
                        ))}
                    </Stack>
                    <Stack gap={2} style={{ marginBottom: '16px' }}>
                        {repo && (
                            <a
                                href={repo}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='GitHub Link'
                            >
                                <GithubOutlined size={22} />
                            </a>
                        )}
                        {external && (
                            <a
                                href={external}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='External Link'
                            >
                                <External size={22} />
                            </a>
                        )}
                    </Stack>
                </Stack>
            </FolderContent>
        </>
    );
};

const IShape = ({ open }) => (
    <Connector
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 50 50'
        xmlSpace='preserve'
        preserveAspectRatio='none'
        style={{
            marginBottom: !open ? '-30px' : '0',
        }}
    >
        <rect x='24.5' width='1' height='50' />
    </Connector>
);

const TShape = () => (
    <Connector
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 50 50'
        xmlSpace='preserve'
    >
        <polygon points='25.5,24 25.5,0 24.5,0 24.5,50 25.5,50 25.5,25 50,25 50,24 ' />
    </Connector>
);

const LShape = () => (
    <Connector
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 50 50'
        xmlSpace='preserve'
    >
        <polygon points='25.5,24.5 25.5,0 24.5,0 24.5,25.5 50,25.5 50,24.5 ' />
    </Connector>
);

export default Projects;
