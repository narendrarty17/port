import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const breakpoints = {
    768: {
        slidesPerView: 2,
        spaceBetween: 10
    }
}

const ImageSlider = ({ images }) => {
    return (
        <Swiper
            className='w-full md:w-2/3'
            slidesPerView={1}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }
            }}
        >
            {images.map((url, index) => (
                <SwiperSlide>
                    <img
                        className='w-auto'
                        key={index}
                        src={url}
                        alt={`Slide ${index + 1}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

export default ImageSlider;