import React from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, Keyboard } from 'swiper';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/bundle';
import 'assets/styles/slider.css';

const Slider = ({ children, className = '' }) => {
  return (
    <div className="mx-auto">
      <Swiper
        className={`${className} sliderSwiper`}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        loop={true}
        slidesPerGroup={1}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          375: {
            slidesPerView: 1.7,
            navigation: false,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.23,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        centeredSlides={true}
        initialSlide={1}
        modules={[Keyboard, Pagination]}
      >
        <button className="prev-slider">
          <ArrowLeftIcon width={24} />
        </button>
        {children}
        <button className="next-slider">
          <ArrowRightIcon width={24} />
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
