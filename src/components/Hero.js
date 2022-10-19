import React from 'react';
import { useTranslation } from 'react-i18next';

// import components
import Stats from './Stats';

const Hero = () => {
  const { t } = useTranslation()
  return (
    <section id='home' className='h-full max-h-[850px] w-full bg-hero bg-right lg:bg-center bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-28'>
      <div className='container mx-auto text-center'>
        <div className='bg-white/90 text-black mb-[160px] lg:mb-[194px] rounded-2xl py-10'>
          <h1 className='text-2xl lg:text-[64px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold mb-[30px]'>
            {t("HERO_TITLE")}
          </h1>
          <h2 className='mb-[30px] lg:mb-[65px] max-w-[627px] mx-auto lg:text-xl'>
            {t("HERO_SUBTITLE")}
          </h2>
          <a href='#contact'>
            <button id='stats' className='text-white px-[35px] lg:px-[80px] py-[9px] lg:py-[16px] text-xl rounded-md bg-primary hover:bg-primary/50 backdrop-blur-md transition'>
              {t("HERO_BTN_TXT")}
            </button>
          </a>
        </div>        
        {/* stats */}
        <div className='-top-[70px] relative'>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
