import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.43/build/spline-viewer.js';
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <spline-viewer url="https://prod.spline.design/GvsgZL4oq7cauXNz/scene.splinecode"></spline-viewer>
        </div>
    );
}

export default Home;