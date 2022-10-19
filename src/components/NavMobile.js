import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Cookies from 'js-cookie';

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

const NavMobile = () => {
  const { t } = useTranslation()
  const currentLanguageCode = Cookies.get('i18next') || 'fr'
  return (
    <nav className='bg-white shadow-2xl w-full h-full'>
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>        
        <li>
          <a className='text-xl font-medium capitalize' href="#home">
            {t('MENU_HOME')}
          </a>
        </li>
        <li>
          <a className='text-xl font-medium capitalize' href="#stats">
            {t('MENU_STATS')}
          </a>
        </li>
        <li>
          <a className='text-xl font-medium capitalize' href="#features">
            {t('MENU_FEATURES')}
          </a>
        </li>
        <li>
          <a className='text-xl font-medium capitalize' href="#contact">
            {t('MENU_CONTACT')}
          </a>
        </li>
        <li>
          <ul className='flex flex-row'>
            {languages.map(({code, name}) => {
              return (
                <li key={code}><button disabled={code === currentLanguageCode} onClick={() => {i18next.changeLanguage(code)}} className={classNames((code === currentLanguageCode) ? 'text-accent' : 'text-black', 'px-1')}>{name}</button></li>
              );
            })}
          </ul>                
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
