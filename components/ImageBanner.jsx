'use client'

import { useState, useRef, useEffect } from 'react';

export default function ImageBanner() {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        if (imgRef.current.complete) {
            setIsLoaded(true);
        }
    }, []);


    return (
        <div className="banner-images">
            <img className="low-res-img" src="low_res/banner.jpeg" alt="banner-low-res" />
            <img ref={imgRef} className="high-res-img" src="med_res/banner.png" alt="banner-high-res" style={{opacity: isLoaded ? 1 : 0}} onLoad={() => {
                // when the high resolution image is completely loaded, this call back function will be executed, and the intention is to get it to take this initally invisible image, and now make it visible
                setIsLoaded(true);
            }} />
            <div className="cta-btns-container">
                <div>
                    <div>
                        <h3>Welcome to</h3>
                        <h1>MiniStore</h1>
                    </div>
                    <div>
                        <a href="#stickers">
                            <button>Shop stickers</button>
                        </a>
                        <a href="#planner">
                            <button>Shop planner</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}