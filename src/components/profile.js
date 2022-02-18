import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
    max-width: 300px;
    position: relative;
    transition: background-color 2s ease;
    background-color: var(--primary);

    & > div {
        width: 100%;
        height: 100%;
        object-fit: cover;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
    }

    &::before {
        content: '';
        z-index: 1;
        width: 100%;
        height: 100%;
        position: absolute;
        mix-blend-mode: lighten;
        background-color: var(--bgColor);
        transition: background-color 2s ease;
    }

    &::after {
        content: '';
        z-index: -1;
        width: 100%;
        height: 100%;
        left: 10px;
        top: 10px;
        position: absolute;
        background-color: var(--paper);
    }

    &:hover {
        background-color: transparent;

        & > div {
            filter: none;
            mix-blend-mode: normal;
            transition-delay: 0.2s;
        }

        &::before {
            mix-blend-mode: normal;
            background-color: transparent;
        }
    }
`;

const Profile = ({ src, alt }) => {
    return (
        <Wrapper>
            <StaticImage
                src='https://swizec.com/static/1d0c0ecfc62bb77254d5dbecefe0ad1d/8d1ba/Bad-lighthouse-scoree59631.webp'
                alt='Profile picture'
                objectFit='cover'
                loading='lazy'
            />
        </Wrapper>
    );
};

export default Profile;
