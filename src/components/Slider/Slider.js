import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Scrollbar, A11y } from 'swiper';
import { useStaticQuery, graphql } from 'gatsby';
import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

export const Slider = ({ children, className = '' }) => {
  return (
    <div className="relative ">
      <Swiper
        className={`mx-auto flex ${className}`}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 31,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          // "@1.50": {
          //   slidesPerView: 4,
          //   spaceBetween: 50,
          // },
        }}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, EffectFade, Pagination]}
      >
        <div className="prev-slider swiper-button-disabled  " role={'button'}>
          <ArrowLeftIcon size={48} />
        </div>
        {children}
        <div className="next-slider swiper-button-disabled " role={'button'}>
          <ArrowRightCircleIcon size={48} />
        </div>
      </Swiper>
    </div>
  );
};
