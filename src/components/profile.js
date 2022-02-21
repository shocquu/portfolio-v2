import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
    max-width: 300px;
    position: relative;
    border: 6px solid var(--bgColor);

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

    @media screen and (${({ theme }) => theme.breakpoints.sm}) {
        max-width: 200px;
    }
`;

const Profile = ({ className }) => {
    return (
        <Wrapper className={className}>
            <StaticImage
                src='../images/profile.png'
                alt='Profile picture'
                objectFit='cover'
                loading='eager'
            />
        </Wrapper>
    );
};

export default Profile;
