import React, { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const UXSection = (props) => {
    const { height, width } = useWindowDimensions();

    return (
        <iframe
            title="Esss System Mockup"
            width={width}
            height={height}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4YFuVDuIjAd3emltdMwRkM%2FESSS-Prototype%3Fscaling%3Dmin-zoom%26node-id%3D320%253A2103"
            allowFullScreen>

        </iframe>
    );
}

export default UXSection;