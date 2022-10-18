import React from 'react';

// import data
import { features } from '../data';

const Features = () => {
  const { title, image, items } = features;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:items-center lg:flex-row lg:gap-x-[100px]'>
          {/* image */}
          <div className='flex-1 order-1 lg:-order-1'>
            <img className='rounded-2xl' src={image.type} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 flex flex-col justify-end'>
            <h2 className='title'>{title}</h2>
            {/* items */}
            <div id='features'>
              {items.map((item, index) => {
                const { icon, title, subtitle } = item;
                return (
                  <div className='flex mb-6 lg:last:mb-0' key={index}>
                    <div className='text-2xl lg:text-3xl mr-4'>{icon}</div>
                    <div>
                      <h4 className='text-base lg:text-xl font-semibold mb-3'>
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
