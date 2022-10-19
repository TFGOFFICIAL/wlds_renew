import React from 'react';
import { useTranslation } from 'react-i18next';

// import data
import { features } from '../data';

const FeaturesSecond = () => {
  const { image } = features.feature2;
  const { t } = useTranslation()
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:items-start lg:flex-row lg:gap-x-[100px]'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-end'>
            <h2 className='title'>{t('FEATURE_2_TITLE')}</h2>
            <p  id='contact' className='subtitle'>{t('FEATURE_2_SUBTITLE')}</p>
          </div>
          {/* image */}
          <div className='flex-1'>
            <img className='rounded-xl' src={image.type} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
