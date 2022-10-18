import React from 'react';

// import data
import { newInStore } from '../data';

// import components
import NewItemsSlider from './NewItemsSlider';

const NewItems = () => {
  const { title, subtitle } = newInStore;
  return (
    <section className='section relative overflow-hidden lg:min-h-[540px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex flex-col items-baseline gap-x-6 mb-6 lg:mb-0'>
            <h2 className='title max-w-[245px] lg:mt-[30px] lg:mb-[90px]'>
              {title}
            </h2>
            <p className='subtitle max-w-[245px] lg:mb-12'>{subtitle}</p>
          </div>
          {/* product slider */}
          <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24'>
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
