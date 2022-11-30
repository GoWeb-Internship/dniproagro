import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';
import { useStaticQuery, graphql } from 'gatsby';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';
import 'assets/styles/slider.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const Slider = ({ children, className = '', slidesPerGroup }) => {
  // const swiper = useSwiper();
  // md:w-[704px] xl:w-[1028px]
  return (
    <div className="mx-auto">
      <Swiper
        className={`${className}`}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        slidesPerGroup={slidesPerGroup}
        breakpoints={{
          375: {
            slidesPerView: 2,
            navigation: false,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
              nextEl: '.next-slider',
              prevEl: '.prev-slider',
            },
          },
        }}
        centeredSlides={true}
        initialSlide={1}
        modules={[Navigation, Pagination]}
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
