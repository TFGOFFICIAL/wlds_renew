import React from 'react';
import { useTranslation } from 'react-i18next';

// import components
import NewItemsSlider from './NewItemsSlider';

const NewItems = () => {
  const { t } = useTranslation()
  return (
    <section className='section relative overflow-hidden lg:min-h-[540px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:items-center lg:flex-row'>
          <div className='flex flex-col items-baseline gap-x-6 mb-6 lg:mb-[90px]'>
            <h2 className='title max-w-[245px] lg:mt-[30px] lg:mb-[30px]'>
              {t("FOLLOWUP_TITLE")}
            </h2>
            <p className='subtitle max-w-[300px] lg:mb-12'>{t("FOLLOWUP_SUBTITLE")}</p>
          </div>
          <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24'>
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
