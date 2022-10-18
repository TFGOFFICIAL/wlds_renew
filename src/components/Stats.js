import React from 'react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation()
  return (
    <div className='bg-accent rounded-[20px] p-12'>
      <div className='flex flex-wrap gap-y-8'>
        <div
          className='min-h-[70px] w-3/6 lg:flex-1   odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none flex flex-col justify-center'
        >
          <div className='text-2xl lg:text-4xl font-semibold'>
            {t("STATS_VALUE_1")}
          </div>
          <div className='text-base lg:text-xl font-light max-w-[110px] mx-auto'>
            {t("STATS_TXT_1")}
          </div>
        </div>
        <div
          className='min-h-[70px] w-3/6 lg:flex-1   odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none flex flex-col justify-center'
        >
          <div className='text-2xl lg:text-4xl font-semibold'>
            {t("STATS_VALUE_2")}
          </div>
          <div className='text-base lg:text-xl font-light max-w-[110px] mx-auto'>
            {t("STATS_TXT_2")}
          </div>
        </div>
        <div
          className='min-h-[70px] w-3/6 lg:flex-1   odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none flex flex-col justify-center'
        >
          <div className='text-2xl lg:text-4xl font-semibold'>
            {t("STATS_VALUE_3")}
          </div>
          <div className='text-base lg:text-xl font-light max-w-[110px] mx-auto'>
            {t("STATS_TXT_3")}
          </div>
        </div>
        <div
          className='min-h-[70px] w-3/6 lg:flex-1   odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none flex flex-col justify-center'
        >
          <div className='text-2xl lg:text-4xl font-semibold'>
            {t("STATS_VALUE_4")}
          </div>
          <div className='text-base lg:text-xl font-light max-w-[110px] mx-auto'>
            {t("STATS_TXT_4")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
