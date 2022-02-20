import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
    max-width: 600px;
    position: relative;
    transition: background-color 1s ease;
    background-color: var(--primary);
    border: 2px solid var(--bgColor);
    user-select: none;
    margin: 10px;

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
        mix-blend-mode: screen;
        background-color: var(--bgColor);
        transition: background-color 1s ease;
    }

    &::after {
        content: '';
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: var(--paper);
        top: 10px;
        ${({ direction }) =>
            direction === 'right' ? 'right: 10px;' : 'left: 10px;'}
    }

    &:hover {
        background-color: transparent;

        & > div {
            filter: none;
            mix-blend-mode: normal;
        }

        &::before {
            mix-blend-mode: normal;
            background-color: transparent;
        }
    }

    @media (${({ theme }) => theme.breakpoints.md}) {
        position: absolute;
        filter: blur(1px);
        z-index: -1;
        opacity: 0.5;
        width: 100%;
        margin: 0;
        max-width: unset;
        background-color: var(--paper);

        &::after {
            content: unset;
        }
    }
`;

const Slide = ({ image, alt, direction }) => {
    return (
        <Wrapper direction={direction}>
            <GatsbyImage
                image={image}
                alt={alt}
                objectFit='cover'
                loading='lazy'
            />
        </Wrapper>
    );
};

export default Slide;
