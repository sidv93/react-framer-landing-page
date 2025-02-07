import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Flex } from '../styles/globalstyles';
import { Link } from 'react-router-dom';
import { Nav, NavHeader, CloseNav, NavList, NavFooter, NavVideos } from '../styles/navigationstyles';
import { FooterContent, FooterSocial } from '../styles/footerstyles';
import { Facebook, Instagram, Vimeo } from '../assets/svg/socialIcons';

const navRoutes = [
    {
        id: 0,
        title: "not humble",
        path: "/not-humble",
        video: "featured-video.mp4",
    },
    {
        id: 1,
        title: "bleeping easy",
        path: "/bleeping-easy",
        video: "easy.mp4",
    },
    {
        id: 2,
        title: "make it zero",
        path: "/make-it-zero",
        video: "make-it-zero.mp4",
    },
    {
        id: 3,
        title: "it takes an island",
        path: "/it-takes-an-island",
        video: "it-takes-an-island.mp4",
    },
    {
        id: 4,
        title: "50 beaches",
        path: "/50-beaches",
        video: "50-beaches.mp4",
    },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
    const [revealVideo, setRevealVideo] = useState({
        show: false,
        video: 'featured-video.mp4',
        key: 0
    })
    return (
        <>
            <AnimatePresence>
                {
                    toggleMenu && (
                        <Nav
                            initial={{ x: '-100%' }}
                            exit={{ x: '-100%' }}
                            animate={{ x: toggleMenu ? 0 : '-100%' }}
                            transition={{
                                duration: 0.9,
                                ease: [0.6, 0.05, -0.01, 0.9]
                            }}
                        >
                            <Container>
                                <NavHeader>
                                    <Flex spaceBetween minHeight>
                                        <h2>Projects</h2>
                                        <CloseNav
                                            onClick={() => setToggleMenu(!toggleMenu)}
                                            onMouseEnter={() => onCursor('pointer')}
                                            onMouseLeave={onCursor}
                                        >
                                            <button>
                                                <span></span>
                                                <span></span>
                                            </button>
                                        </CloseNav>
                                    </Flex>
                                </NavHeader>
                                <NavList>
                                    <ul>
                                        {navRoutes.map(route => (
                                            <motion.li key={route.id}
                                                onHoverStart={() => setRevealVideo({
                                                    show: true,
                                                    video: route.video,
                                                    key: route.id
                                                })}
                                                onHoverEnd={() => setRevealVideo({
                                                    show: false,
                                                    video: route.video,
                                                    key: route.id
                                                })}
                                                onMouseEnter={() => onCursor('pointer')}
                                                onMouseLeave={onCursor}
                                            >
                                                <Link to={`projects/${route.path}`}>
                                                    <motion.div
                                                        className='link'
                                                        initial={{ x: -108 }}
                                                        whileHover={{
                                                            x: -40,
                                                            transition: {
                                                                duration: 0.4,
                                                                ease: [0.6, 0.05, -0.01, 0.9]
                                                            }
                                                        }}
                                                    >
                                                        <span className='arrow'>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 101 57"
                                                            >
                                                                <path
                                                                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                                    fill="#FFF"
                                                                    fillRule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                        {route.title}
                                                    </motion.div>
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </NavList>
                                <NavFooter>
                                    <Flex spaceBetween>
                                        <FooterContent>
                                            <p>info@furrow.com</p>
                                        </FooterContent>
                                        <FooterContent>
                                            <p>803474794</p>
                                        </FooterContent>
                                        <FooterSocial>
                                            <a href='/' onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
                                                <Instagram />
                                            </a>
                                            <a href='/' onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
                                                <Facebook />
                                            </a>
                                            <a href='/' onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
                                                <Vimeo />
                                            </a>
                                        </FooterSocial>
                                    </Flex>
                                </NavFooter>
                                <NavVideos>
                                    <motion.div
                                        className='reveal'
                                        animate={{ width: revealVideo.show ? 0 : '100%' }}
                                    ></motion.div>
                                    <div className='video'>
                                        <AnimatePresence exitBeforeEnter initial={false}>
                                            <motion.video
                                                key={revealVideo.key}
                                                src={require(`../assets/videos/${revealVideo.video}`)}
                                                autoPlay
                                                loop
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{
                                                    duratin: 0.2,
                                                    ease: 'easeInOut'
                                                }}
                                            />
                                        </AnimatePresence>
                                    </div>
                                </NavVideos>
                            </Container>
                        </Nav>
                    )
                }
            </AnimatePresence>
        </>
    );
};

export default Navigation;