import React, { useRef, useEffect } from 'react';
import { Banner, Video, Canvas, BannerTitle, Headline } from '../../styles/homestyles';
import useWindowSize from '../../hooks/useWindowSize';
import { useGlobalStateContext } from '../../context/globalContext';

const parent = {
    initial: {
        y: 800
    },
    animate: {
        y: 0,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const child = {
    initial: {
        y: 800
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}

const HomeBanner = ({ onCursor }) => {
    const canvas = useRef(null);
    const size = useWindowSize();
    const { currentTheme } = useGlobalStateContext();

    useEffect(() => {
        const renderEl = canvas.current;
        const drawingEl = renderEl.cloneNode();

        const drawingCtx = drawingEl.getContext('2d');
        const renderingCtx = renderEl.getContext('2d');

        let lastX;
        let lastY;

        let moving = false;

        renderingCtx.globalCompositeOperation = 'source-over';
        renderingCtx.fillStyle = currentTheme === 'dark' ? '#000000' : '#ffffff';
        renderingCtx.fillRect(0, 0, size.width, size.height);

        renderEl.addEventListener('mouseover', ev => {
            moving = true
            lastX = ev.pageX - renderEl.offsetLeft
            lastY = ev.pageY - renderEl.offsetTop
        })

        renderEl.addEventListener('click', ev => {
            moving = true
            lastX = ev.pageX - renderEl.offsetLeft
            lastY = ev.pageY - renderEl.offsetTop
        })

        renderEl.addEventListener('mouseup', ev => {
            moving = false
            lastX = ev.pageX - renderEl.offsetLeft
            lastY = ev.pageY - renderEl.offsetTop
        })

        renderEl.addEventListener('mousemove', ev => {
            if (moving) {
                drawingCtx.globalCompositeOperation = 'source-over'
                renderingCtx.globalCompositeOperation = 'destination-out'
                let currentX = ev.pageX - renderEl.offsetLeft
                let currentY = ev.pageY - renderEl.offsetTop
                drawingCtx.lineJoin = 'round'
                drawingCtx.moveTo(lastX, lastY)
                drawingCtx.lineTo(currentX, currentY)
                drawingCtx.closePath()
                drawingCtx.lineWidth = 120
                drawingCtx.stroke()
                lastX = currentX
                lastY = currentY
                renderingCtx.drawImage(drawingEl, 0, 0)
            }
        })

    }, [currentTheme]);
    return (
        <Banner>
            <Video>
                <video
                    height='100%'
                    width='100%'
                    loop
                    autoPlay
                    src={require('../../assets/videos/video.mp4')}
                ></video>
            </Video>
            <Canvas ref={canvas}
                height={size.height}
                width={size.width}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={onCursor}
            />
            <BannerTitle variants={parent} initial='initial' animate='animate'>
                <Headline variants={child}>DIG</Headline>
                <Headline variants={child}>Deep</Headline>
            </BannerTitle>
        </Banner>
    );
};

export default HomeBanner;
