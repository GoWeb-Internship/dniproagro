import React from 'react';
import PropTypes from 'prop-types';
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
      lazy={{
        enabled: true,
        loadPrevNext: true,
        loadPrevNextAmount: 2,
        loadOnTransitionStart: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={2000}
      modules={[Autoplay]}
      className="heroSwiper"
    >
      {images &&
        images.map(({ alt, image }, index) => {
          return (
            <SwiperSlide key={`${index}-${alt}`}>
              <GatsbyImage image={getImage(image)} alt={alt} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

SlideShow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
    }),
  ).isRequired,
};
