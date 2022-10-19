import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Cookies from 'js-cookie';

// import logo
import Logo from '../assets/img/logo.png';
// import icons
import { CgMenuRight, CgClose } from 'react-icons/cg';
// import components
import NavMobile from './NavMobile';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const languages = [
  {
    code: 'fr',
    name: 'FR'
  },
  {
    code: 'en',
    name: 'EN'
  },
  {
    code: 'de',
    name: 'DE'
  },
]

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const { t } = useTranslation()
  const currentLanguageCode = Cookies.get('i18next') || 'fr'

  useEffect(() => {
    // add event listener
    window.addEventListener('scroll', () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        // if bg is true
        bg
          ? 'bg-primary py-4 lg:py-6'
          : // if bg is false
            'bg-none'
      }
      fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#home'>
            <img className='h-6 lg:h-8' src={Logo} alt='' />
          </a>
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className='md:hidden text-2xl lg:text-3xl text-white cursor-pointer'
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-12'>
              <li>
                <a className='capitalize text-white hover:border-b transition-all' href="#home">
                  {t('MENU_HOME')}
                </a>
              </li>
              <li>
                <a className='capitalize text-white hover:border-b transition-all' href="#stats">
                  {t('MENU_STATS')}
                </a>
              </li>
              <li>
                <a className='capitalize text-white hover:border-b transition-all' href="#features">
                  {t('MENU_FEATURES')}
                </a>
              </li>
              <li>
                <a className='capitalize text-white hover:border-b transition-all' href="#contact">
                  {t('MENU_CONTACT')}
                </a>
              </li>
              <li>
                <ul className='flex flex-row'>
                  {languages.map(({code, name}) => {
                    return (
                      <li key={code}><button disabled={code === currentLanguageCode} onClick={() => {i18next.changeLanguage(code)}} className={classNames((code === currentLanguageCode) ? 'text-accent' : 'text-white', 'px-1')}>{name}</button></li>
                    );
                  })}
                </ul>                
              </li>
            </ul>
          </nav>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? 'left-0' : '-left-full'
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
