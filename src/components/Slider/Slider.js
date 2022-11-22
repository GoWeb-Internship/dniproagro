import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Scrollbar, A11y } from 'swiper';
import { useStaticQuery, graphql } from 'gatsby';
import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

const img = {
  widht: '300px',
  height: '300px',
};
const active = {
  widht: '400px',
  height: '400px',
};

export const Slider = ({ children, className = '' }) => {
  return (
    <div className="relative">
      <Swiper
        className={`mx-auto flex ${className}`}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        spaceBetween={16}
        slidesPerView={3}
        // breakpoints= {
        //   // when window width is >= 320px
        //   320 = {
        //     slidesPerView: {1},
        //     spaceBetween: 20
        //   },
        //   // when window width is >= 480px
        //   480 =  {
        //     slidesPerView: {2},
        //     spaceBetween: 30
        //   },
        //   // when window width is >= 640px
        //   1280 = {
        //     slidesPerView: {3},
        //     spaceBetween: 40
        //   }
        // }
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
