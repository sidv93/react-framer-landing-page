import React, { useEffect } from 'react';
import { HeaderNav, Menu, Logo } from '../styles/headerstyles';
import { Flex, Container } from '../styles/globalstyles';
import { Link } from 'react-router-dom';
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext';

const Header = () => {
    const { currentTheme } = useGlobalStateContext();
    const dispatch = useGlobalDispatchContext();
    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
        } else {
            dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
        }
    }

    useEffect(() => {
        window.localStorage.setItem('theme', currentTheme);
    }, [currentTheme])
    return (
        <HeaderNav
            initial={{
                y: '-72px',
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9]
            }}
        >
            <Container>
                <Flex spaceBetween noHeight>
                    <Logo>
                        <Link to='/'>FURR</Link>
                        <span onClick={toggleTheme}></span>
                        <Link to='/'>W</Link>
                    </Logo>
                    <Menu>
                        <button>
                            <span></span>
                            <span></span>
                        </button>
                    </Menu>
                </Flex>
            </Container>

        </HeaderNav>
    );
};

export default Header;
