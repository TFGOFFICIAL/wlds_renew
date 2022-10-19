import React from 'react';
import { useTranslation } from 'react-i18next';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import data
import { newInStore } from '../data';

const NewItemsSlider = () => {
  const { t } = useTranslation()
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
      className='mySwiper'
    >
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide className='max-w-[265px]' key={index}>
            <div className='relative'>
              <img className='rounded-2xl' src={product.image.type} alt='' />
              <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                {t(`FOLLOWUP_ITEM_${index + 1}_NAME`)}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
