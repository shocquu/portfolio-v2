import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Layout, Button } from '../components';

const Title = styled.h1`
    font-size: clamp(100px, 25vw, 200px);
    color: var(--primary);
    position: relative;
    bottom: 20px;
    line-height: 0.7;
`;

const Subtitle = styled.h2`
    font-size: clamp(25px, 10vw, 50px);
    color: var(--textPrimary);
    font-weight: 400;
`;

const Shruggie = styled.span`
    font-size: clamp(40px, 15vw, 60px);
    color: var(--textPrimary);
`;

const Page404 = styled.div`
    ${({ theme }) => theme.mixins.flexCenter}
    gap: ${({ theme }) => theme.spacing(4)};
    flex-direction: column;
    grid-column: 1 / 13;
    min-height: 100vh;
    user-select: none;
`;

const NotFoundPage = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Layout>
            <Helmet title='Page Not Found' />
            <TransitionGroup component={null}>
                {isMounted && (
                    <CSSTransition timeout={300} classNames='fade-up'>
                        <Page404>
                            <Shruggie>¯\_(ツ)_/¯</Shruggie>
                            <Title>404</Title>
                            <Subtitle>It looks empty to me</Subtitle>
                            <Button>
                                <Link to='/'>Go home</Link>
                            </Button>
                        </Page404>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </Layout>
    );
};

export default NotFoundPage;
