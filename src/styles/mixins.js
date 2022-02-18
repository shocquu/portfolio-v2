import { css } from 'styled-components';

const button = css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;
    &:hover,
    &:focus,
    &:active {
        background-color: var(--green-tint);
        outline: none;
    }
    &:after {
        display: none !important;
    }
`;

const mixins = {
    flexCenter: css`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    flexBetween: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    resetList: css`
        list-style: none;
        padding: 0;
        margin: 0;
    `,
    link: css`
        position: relative;
        display: inline-block;
        text-decoration: none;
        transition: var(--transition);
        color: inherit;

        &:hover,
        &:active,
        &:focus {
            color: var(--primary);
            outline: 0;
        }
    `,
    underline: css`
        position: relative;
        display: inline-block;
        text-decoration: none;
        transition: var(--transition);
        color: inherit;

        &:hover,
        &:active,
        &:focus {
            color: var(--primary);
            outline: 0;

            &::after {
                left: 0;
                right: auto;
                width: 100%;
            }
        }

        &::after {
            content: '';
            display: block;
            width: 0px;
            right: 0;
            height: 1px;
            opacity: 0.5;
            position: absolute;
            background: var(--primary);
            transition: var(--transition);
        }
    `,
};

export default mixins;
