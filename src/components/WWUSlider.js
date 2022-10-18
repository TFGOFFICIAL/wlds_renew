import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import data
import { wwu } from '../data';

const WWUSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className='mySwiper rounded-xl'
    >
      {wwu.items.map((item, index) => {
        return (
          <SwiperSlide className='max-w-[280px]' key={index}>
            <div className='flex flex-col p-5 lg:p-10 rounded-2xl shadow-xl border'>
              <img src={item.image.type} alt='' />
              <div className='text-black bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize mt-5'>
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WWUSlider;
