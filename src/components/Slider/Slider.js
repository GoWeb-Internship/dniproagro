import React from 'react';
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/bundle';
import 'assets/styles/slider.css';

export const Slider = ({ children, className = '', slideToClickedSlide }) => {
  return (
    <div className="mx-auto">
      <Swiper
        className={`${className} sliderSwiper`}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        slidesPerGroup={1}
        slideToClickedSlide={slideToClickedSlide}
        breakpoints={{
          320: {
            slidesPerView: 1.7,
          },
          375: {
            slidesPerView: 1.7,
            navigation: false,
            // spaceBetween: 30,
          },
          480: {
            slidesPerView: 2,
          },
          // 627: {
          //   slidesPerView: 3,
          // },
          768: {
            slidesPerView: 2.23,
            // spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            // spaceBetween: 30,
            // navigation: {
            //   nextEl: '.next-slider',
            //   prevEl: '.prev-slider',
            // },
          },
        }}
        centeredSlides={true}
        initialSlide={1}
        modules={[Pagination]}
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
