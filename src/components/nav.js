import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'gatsby';
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
    padding: 0 64px;
    box-sizing: border-box;

    @media screen and (${({ theme }) => theme.breakpoints.xl}) {
        padding: 0 ${({ theme }) => theme.spacing(4)};
    }
`;

const NavLinks = styled.div`
    ${({ theme }) => theme.mixins.flexBetween};
`;

const NavLink = styled.a`
    ${({ theme }) => theme.mixins.underline};
    margin: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(3)}`};
    font-family: var(--fontSerif);
    color: var(--textPrimary);

    &:hover {
        color: var(--primary);
    }
`;

const Navbar = styled.nav`
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    font-size: 14px;

    ul {
        ${({ theme }) => theme.mixins.resetList};
        ${({ theme }) => theme.mixins.flexBetween};
    }

    @media screen and (${({ theme }) => theme.breakpoints.sm}) {
        ul {
            background-color: var(--paper);
            padding-top: var(--navHeight);
            transition: var(--transition);
            transition-delay: 150ms;
            box-shadow: -4px 0px 24px rgb(0 0 0 / 30%);
            justify-content: flex-start;
            position: fixed;
            top: 0;
            right: 0;
            width: 0vw;
            height: 100vh;
            z-index: -1;
            flex-direction: column;
            font-size: 22px;

            &[aria-hidden='false'] {
                width: 80vw;
            }
        }

        ${NavLink} {
            padding: ${({ theme }) => `${theme.spacing(4)} 0`};
        }
    }
`;

const HamburgerMenu = styled.div`
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

const FrostedOverlay = styled.div`
    @media screen and (${({ theme }) => theme.breakpoints.sm}) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 8;
        backdrop-filter: blur(10px);
        background-color: ${({ theme }) =>
            `rgba(${theme.hex2rgb(colors.mirage)}, 0.8)`};
    }
`;

const Nav = ({ links }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((open) => !open);
    };

    const handleClose = () => {
        // close navbar upon clicking the link on mobile devices
        window.innerWidth < 600 && setOpen(false);
    };

    useEffect(() => {
        const body = document.querySelector('body');
        if (open) body.dataset.blurred = 'true';

        // delay to match animation
        window.setTimeout(() => {
            !open && delete body.dataset.blurred;
        }, 300);
    }, [open]);

    return (
        <>
            <Frame>
                <Navbar>
                    <Link to='/'>
                        <Logo size={32} />
                    </Link>
                    <NavLinks>
                        <ul aria-hidden={!open}>
                            {links.map(({ name, href }, i) => (
                                <CSSTransition
                                    key={i}
                                    in={open}
                                    timeout={100}
                                    className='slide'
                                >
                                    <li
                                        style={{
                                            transitionDelay: `${i * 100}ms`,
                                        }}
                                    >
                                        <NavLink
                                            href={href}
                                            aria-label={name}
                                            onClick={handleClose}
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                </CSSTransition>
                            ))}
                        </ul>
                        <HamburgerMenu onClick={handleOpen} open={open}>
                            <div></div>
                            <div></div>
                        </HamburgerMenu>
                    </NavLinks>
                </Navbar>
            </Frame>
            {open && <FrostedOverlay />}
        </>
    );
};

export default Nav;
