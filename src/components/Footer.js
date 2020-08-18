import React from 'react';
import { Container, Flex } from '../styles/globalstyles';
import { FooterNav, FooterContent, FooterSocial } from '../styles/footerstyles';
import { Facebook, Instagram, Vimeo } from '../assets/svg/socialIcons';

const Footer = ({ onCursor }) => {
    return (
        <FooterNav>
            <Container>
                <Flex spaceBetween>
                    <FooterContent>
                        <p>8056082548</p>
                        <p>info@furrow.studio</p>
                    </FooterContent>
                    <FooterContent wider>
                        <p>15 Cam at unit B</p>
                        <p>University, PE C32</p>
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
            </Container>
        </FooterNav>
    );
};

export default Footer;