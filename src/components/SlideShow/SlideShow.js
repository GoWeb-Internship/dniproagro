import React from 'react';
import { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'assets/styles/slideshow.css';

export const SlideShow = ({ images }) => {
  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      lazy={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // autoplay={false}
      speed={2000}
      modules={[Autoplay]}
      className="heroSwiper"
      breakpoints={{
        // 320: {
        //   width: 320,
        // },
        480: {
          width: 480,
        },
        768: {
          width: 768,
        },
        // 1280: {
        //   width: 1280,
        //   height: 575,
        // },
        // 1440: {
        //   maxWidth: 1440,
        //   height: 575,
        // },
      }}
    >
      {images &&
        images.map(({ alt, image }, index) => {
          return (
            <SwiperSlide key={index}>
              <GatsbyImage image={getImage(image)} alt={alt} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
