import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';
import { useStaticQuery, graphql } from 'gatsby';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/bundle';
import 'assets/styles/slider.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const Slider = ({ children, className = '', slidesPerGroup }) => {
  return (
    <div className="absolute left-1/2 w-[627px] -translate-x-1/2  md:w-[704px] xl:w-[1028px]">
      <Swiper
        className={`${className}`}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        // spaceBetween={16}
        // slidesPerView={'auto'}
        // loopedSlides={1}
        loop={true}
        slidesPerGroup={slidesPerGroup}
        // loopFillGroupWithBlank={true}
        // slidesPerGroupAuto={true}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        centeredSlides={true}
        initialSlide={1}
        pagination={{
          dynamicBullets: true,
        }}
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
