import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 2000 },
        items: 2,
        partialVisibilityGutter: 30
    },
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        partialVisibilityGutter: 30
    }
};


const ImageSlider = ({ images }) => {
    return (
        <div className='w-full'>
            <Carousel responsive={responsive}>
                {images.map((url) => (
                    <img src={url} />
                ))}
            </Carousel>
        </div>
    );
};

export default ImageSlider;