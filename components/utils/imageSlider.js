import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const ImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    console.log('before handle swipe');
    const handle = (delta) => {
        if (delta > 0) {
            // Swipe right
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        } else {
            // Swipe left
            setCurrentImageIndex((prevIndex) => (prevIndex + 1 + images.length) % images.length);
        }
    }
    const handleSwipe = useSwipeable({
        onSwipedLeft: () => handle(-1),
        onSwipedRight: () => handle(1)
    });
    console.log('After handle swipe');

    return (
        <div {...handleSwipe}>
            <div className="image-slider">
                <button onClick={() => handle(1)}>Previous</button>
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                <button onClick={() => handle(-1)}>Next</button>
            </div>
        </div>
    );
};

export default ImageSlider;