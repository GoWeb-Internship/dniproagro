import React from 'react';
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
      // height={575}
      // width={1280}
      slidesPerView={1}
      autoplay={true}
      lazy={false}
      // onSlideChange={() => console.log('slide change')}
      createElements={false}
      onSwiper={heroSlideShow => console.log(heroSlideShow)}
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
