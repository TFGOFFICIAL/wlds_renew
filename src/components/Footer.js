import React from 'react';

// import logo
import Logo from '../assets/img/logo.png';

// import data
import { footer } from '../data';

const Footer = () => {
  return (
    <footer className='section bg-primary text-white py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-between border-b border-opacity-75 border-gray-700 pb-5 lg:pb-5 mb-5'>
          <a className='mb-6 lg:mb-0' href='#'>
            <img className='h-8 lg:h-10' src={Logo} alt='' />
          </a>
          <div className='flex gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div
                  className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition-all'
                  key={index}
                >
                  <a target='blank' href={item.href}>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <p className='text-center'>
          {/*&copy; WLDS 2022 - All Rights Reserved.*/}
          2022 Logic Web Design
        </p>
      </div>
    </footer>
  );
};

export default Footer;
