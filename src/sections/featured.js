import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Typography, Slide, Stack, Chip } from '../components';
import { GithubOutlined, External } from '../components/icons';

const IconLink = styled.a`
    ${({ theme }) => theme.mixins.link};
`;

const Details = styled.div`
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    height: 100%;

    @media (${({ theme }) => theme.breakpoints.lg}) {
        grid-row-gap: ${({ theme }) => theme.spacing(3)};
    }

    @media (${({ theme }) => theme.breakpoints.md}) {
        align-items: center !important;
        direction: ltr;
        text-align: center;
    }
`;

const FeaturedSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    grid-column: 3 / span 8;
    grid-row: 4;
`;

const FeaturedWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme }) => theme.spacing(3)};
    text-align: right;

    ${Details} {
        align-items: flex-end;
        direction: ltr;
    }

    &:not(:last-of-type) {
        margin-bottom: 100px;
    }

    &:nth-of-type(2n) {
        direction: rtl;
        text-align: left;

        ${Details} {
            align-items: flex-start;
        }
    }

    @media (${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: none;

        &:first-of-type {
            margin-top: ${({ theme }) => theme.spacing(3)};
        }
    }
`;

const Featured = () => {
    const data = useStaticQuery(graphql`
        {
            featured: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/featured/" } }
                sort: { fields: [frontmatter___date], order: ASC }
            ) {
                edges {
                    node {
                        frontmatter {
                            date
                            title
                            repo
                            external
                            tags
                            preview {
                                childImageSharp {
                                    gatsbyImageData(
                                        width: 600
                                        placeholder: BLURRED
                                        formats: [AUTO, WEBP, AVIF]
                                    )
                                }
                            }
                        }
                        html
                    }
                }
            }
        }
    `);

    const featured = data.featured.edges.filter(({ node }) => node);

    if (!featured) return null;

    return (
        <FeaturedSection id='featured'>
            <Typography tag='h2' variant='title'>
                Some of my projects
            </Typography>
            {featured.map(({ node }, i) => {
                const { html, frontmatter } = node;
                const { title, preview, repo, external, tags } = frontmatter;
                const image = getImage(preview);
                const direction = i % 2 === 0 ? 'right' : 'left';

                return (
                    <FeaturedWrapper key={i}>
                        <Slide
                            image={image}
                            alt={title}
                            direction={direction}
                        />
                        <Details>
                            <Stack direction='column' gap={1}>
                                <Typography variant='caption'>
                                    Featured project
                                </Typography>
                                <Typography variant='subtitle' tag='h3'>
                                    {title}
                                </Typography>
                            </Stack>
                            <Typography
                                tag='article'
                                variant='body2'
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                            <Stack gap={3}>
                                {tags.map((tag) => (
                                    <Chip name={tag} key={tag} />
                                ))}
                            </Stack>
                            <Stack gap={2}>
                                {repo && (
                                    <IconLink
                                        href={repo}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label='GitHub Link'
                                    >
                                        <GithubOutlined size={24} />
                                    </IconLink>
                                )}
                                {external && (
                                    <IconLink
                                        href={external}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label='External Link'
                                    >
                                        <External size={24} />
                                    </IconLink>
                                )}
                            </Stack>
                        </Details>
                    </FeaturedWrapper>
                );
            })}
        </FeaturedSection>
    );
};

export default Featured;
