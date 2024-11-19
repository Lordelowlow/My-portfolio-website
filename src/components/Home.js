import React, { useEffect, useState } from 'react';
import config from '../config';

function Home() {
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth <= 768 : false
    );
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };

            const debounce = (func, delay) => {
                let timer;
                return () => {
                    clearTimeout(timer);
                    timer = setTimeout(func, delay);
                };
            };

            const debouncedHandleResize = debounce(handleResize, 200);

            window.addEventListener('resize', debouncedHandleResize);
            return () => {
                window.removeEventListener('resize', debouncedHandleResize);
            };
        }
    }, []);

    return (
        <div>
            {isMobile ? (
                <spline-viewer key="mobile" loading-anim-type="none" url={config.splineUrls.mobile}/>
            ) : (
                <spline-viewer key="desktop" loading-anim-type="none" url={config.splineUrls.desktop}/>
            )}
        </div>
    );
}

export default Home;