import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderNav = styled(motion.div)`
    height: 0;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 72px;
    z-index: 99;
`;

export const Menu = styled.div`
    button {
        transform-origin: center;
        border: none;
        outline: none;
        background: none;
        padding: 20px;

        span {
            width: 36px;
            height: 8px;
            background: ${props => props.theme.text}; 
            display: block;
            margin: 8px;
        }
    }
`;

export const Logo = styled.div`
    a {
        font-size: 1.8rem;
        font-weight: 800;
        color: ${props => props.theme.text}; 
    }
    span {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: ${props => props.theme.red};
        margin: 0 4px;
        display: inline-block;
        position: relative;
        bottom: 2px;
    }
`;