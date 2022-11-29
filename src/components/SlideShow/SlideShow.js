import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
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
      lazy={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={heroSlideShow => console.log(heroSlideShow)}
      modules={[Autoplay]}
      className="heroSwiper"
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
