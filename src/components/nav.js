import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { CSSTransition } from 'react-transition-group';
import { Logo } from './icons';
import colors from '../styles/colors';

const Frame = styled.header`
    ${({ theme }) => theme.mixins.flexBetween};
    background-color: ${({ theme }) =>
        `rgba(${theme.hex2rgb(colors.mirage)}, 0.8)`};
    height: var(--navHeight);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    padding: 0 60px;
    box-sizing: border-box;
`;

const Navbar = styled.nav`
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;

    ul {
        ${({ theme }) => theme.mixins.resetList};
        ${({ theme }) => theme.mixins.flexBetween};
    }
`;

const Links = styled.div`
    ${({ theme }) => theme.mixins.flexBetween};
`;

const Link = styled.a`
    ${({ theme }) => theme.mixins.underline};
    margin: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(3)}`};
    font-family: var(--fontSerif);
    color: var(--textPrimary);
    font-size: 14px;

    &:hover {
        color: var(--primary);
    }
`;

const LogoWrapper = styled.a``;

const Menu = styled.div`
    ${({ theme }) => theme.mixins.flexBetween};
    margin-left: ${({ theme }) => theme.spacing(3)};
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
    width: var(--hamburgerWidth);
    height: calc(var(--hamburgerWidth) / 2);

    & > div:first-of-type {
        width: 100%;
        height: 6px;
        background: var(--textPrimary);
        transition: var(--transition);
        ${({ open }) => open && 'transform: translateY(100%);'}
    }
    & > div:last-of-type {
        width: 50%;
        height: 6px;
        background: var(--primary);
        transition: var(--transition);
        transform-origin: bottom right;
        ${({ open }) => open && 'transform: rotate(90deg);'}
    }
`;

const Nav = ({ links }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((open) => !open);
    };

    return (
        <Frame>
            <Navbar>
                <LogoWrapper href='/'>
                    <Logo size={32} />
                </LogoWrapper>
                <Links role='menubar'>
                    <ul aria-hidden={!open}>
                        {links.map(({ name, href }, i) => (
                            <CSSTransition
                                key={i}
                                in={open}
                                timeout={100}
                                className='slide'
                            >
                                <li style={{ transitionDelay: `${i * 100}ms` }}>
                                    <Link
                                        href={href}
                                        aria-label={name}
                                        role='menuitem'
                                    >
                                        {name}
                                    </Link>
                                </li>
                            </CSSTransition>
                        ))}
                    </ul>
                    <Menu onClick={handleOpen} open={open}>
                        <div></div>
                        <div></div>
                    </Menu>
                </Links>
            </Navbar>
        </Frame>
    );
};

const HamburgerMenu = () => (
    <Menu>
        <div></div>
        <div></div>
    </Menu>
);

export default Nav;
