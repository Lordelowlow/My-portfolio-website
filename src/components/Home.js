import React, { useEffect, useState } from 'react';

function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                <spline-viewer key="mobile" url="https://prod.spline.design/VZtZ6j1iur7oC7ny/scene.splinecode"></spline-viewer>
            ) : (
                <spline-viewer key="desktop" url="https://prod.spline.design/GvsgZL4oq7cauXNz/scene.splinecode"></spline-viewer>
            )}
        </div>
    );
}

export default Home;