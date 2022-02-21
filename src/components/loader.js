import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './icons/logo';

const LoadingProgress = styled.div`
    width: 0%;
    max-width: 100%;
    background: var(--primary);
    height: 4px;
    transition: width 1000ms ease;
`;

const LoadingBar = styled.div`
    padding: 4px;
    width: 60vmin;
    background: var(--bgColor);
    overflow: hidden;
    box-sizing: border-box;
    border: 4px solid var(--textPrimary);
    transition: all 300ms ease, height 150ms ease;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    transition: all 1000ms ease;
    transition-delay: 250ms;
`;

const Background = styled.div`
    background: var(--bgColor);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    z-index: 15;
    opacity: 1;
    transition: opacity 500ms ease;

    svg {
        width: 60vmin;
        max-width: 20vmax;
        margin-bottom: 20px;
        transition: all 500ms ease;
    }

    &[data-loaded='true'] {
        opacity: 0;

        ${LoadingBar} {
            width: 0%;
            height: 0%;
            border: 0;
            padding: 0;
        }

        svg,
        ${Wrapper} {
            width: 0%;
            height: 0%;
        }
    }

    @media screen and (max-width: 576px) {
        svg {
            margin-bottom: 10px;
        }
    }
`;

const Loader = () => {
    const progressRef = useRef(null);
    const wrapperRef = useRef(null);
    const backgroundRef = useRef(null);

    useEffect(() => {
        progressRef.current.style.width = `100%`;

        const timer = setTimeout(() => {
            //wrapperRef.current.dataset.loaded = 'true';
            backgroundRef.current.dataset.loaded = 'true';
            //backgroundRef.current.style.opacity = '0';
        }, 1150);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Background ref={backgroundRef}>
            <Wrapper ref={wrapperRef}>
                <Logo size={80} />
                <LoadingBar>
                    <LoadingProgress ref={progressRef} />
                </LoadingBar>
            </Wrapper>
        </Background>
    );
};

export default Loader;
