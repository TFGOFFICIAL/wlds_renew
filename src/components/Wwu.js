import React from 'react';
import { useTranslation } from 'react-i18next';

// import components
import WWUSlider from './WWUSlider';

const Wwu = () => {
  const { t } = useTranslation()
  return (
    <section className='section relative overflow-hidden lg:min-h-[540px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col items-baseline gap-x-6 mb-6 lg:mb-[90px]'>
                    <h2 className='title max-w-[300px] lg:mt-[30px] lg:mb-[30px]'>
                        {t("WWU_TITLE")}
                    </h2>
                    <p className='subtitle max-w-[300px] lg:mb-12'>{t("WWU_SUBTITLE")}</p>
                </div>
                <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24'>
                    <WWUSlider />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Wwu;
