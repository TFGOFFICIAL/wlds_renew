import React from 'react';
import { useTranslation } from 'react-i18next';

// import components
import TestimonialSlider from './TestimonialSlider';
// import data
import { testimonial } from '../data';

const Testimonial = () => {
  const { image } = testimonial;
  const { t } = useTranslation()
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
          <div className='lg:max-w-[50%]'>
            {/* title */}
            <h2 className='title mb-2'>{t('TESTIMONIAL_TITLE')}</h2>
            <p className='mb-9'>{t('TESTIMONIAL_SUBTITLE')}</p>
            {/* slider */}
            <div className='shadow-2xl rounded-2xl p-10 mb-20 lg:mb-0'>
              <TestimonialSlider />
            </div>
          </div>
          {/* image */}
          <div className='order-1'>
            <img src={image.type} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;