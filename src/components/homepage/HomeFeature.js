import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Container, Flex } from '../../styles/globalstyles';
import { HomeFeaturedSection, FeaturedContent, FeaturedVideo, FeaturedProjects } from '../../styles/homestyles';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const HomeFeature = ({ onCursor }) => {
    const [hovered, setHovered] = useState(false);
    const animation = useAnimation();
    const [featuredRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px'
    });

    useEffect(() => {
        if (inView) {
            animation.start('visible');
        }
    }, [animation, inView]);
    return (
        <HomeFeaturedSection
            ref={featuredRef}
            animate={animation}
            initial='hidden'
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
                },
                hidden: {
                    opacity: 0,
                    y: 72
                }
            }}
        >
            <Container>
                <Link>
                    <FeaturedContent
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        onHoverStart={() => setHovered(!hovered)}
                        onHoverEnd={() => setHovered(!hovered)}
                    >
                        <Flex spaceBetween>
                            <h3>Featured Content</h3>
                            <motion.div
                                className='meta'
                                animate={{ opacity: hovered ? 1 : 0 }}
                                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                            >
                                <h4>PEI seafood</h4>
                                <h4>2019</h4>
                            </motion.div>
                        </Flex>
                        <h2 className='featured-title'>
                            NOT <br />hUMble
                            <span className='arrow'>
                                <motion.svg
                                    animate={{ x: hovered ? '48px' : 0 }}
                                    transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 101 57"
                                >
                                    <path
                                        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                        fill="#FFF"
                                        fillRule="evenodd"
                                    ></path>
                                </motion.svg>
                            </span>
                        </h2>
                    </FeaturedContent>
                    <FeaturedVideo>
                        <video autoPlay loop src={require('../../assets/videos/featured-video.mp4')} />
                    </FeaturedVideo>
                </Link>
            </Container>
            <Container>
                <FeaturedProjects>
                    <Flex flexEnd>
                        <button>
                            <span>All projects</span>
                        </button>
                    </Flex>
                </FeaturedProjects>
            </Container>
        </HomeFeaturedSection>
    );
};

export default HomeFeature;