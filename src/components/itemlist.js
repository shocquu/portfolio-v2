import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: grid;
    gap: 0px 10px;
    grid-template-columns: repeat(2, minmax(110px, 240px));
    padding: 0px;
    margin-left: ${({ theme }) => theme.spacing(3)};
    overflow: hidden;
    list-style: none;

    @media (${({ theme }) => theme.breakpoints.md}) {
        margin-left: ${({ theme }) => theme.spacing(2)};
    }
`;

const Item = styled.li`
    padding-left: ${({ theme }) => theme.spacing(3)};
    font-family: var(--fontSerif);
    position: relative;
    margin-bottom: 10px;
    letter-spacing: 1px;
    color: var(--textPrimary);

    &::before {
        content: '⌑';
        left: 0px;
        display: inline-block;
        position: absolute;
        color: var(--primary);
        transform: rotate(45deg) translateY(-2px);
    }
`;

const Itemlist = ({ items }) => {
    return (
        <List>
            {items.map((item, i) => (
                <Item key={i}>{item}</Item>
            ))}
        </List>
    );
};

export default Itemlist;
