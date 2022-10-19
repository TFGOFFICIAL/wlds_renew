import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesSecond from './components/FeaturesSecond';
import NewItems from './components/NewItems';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Wwu from './components/Wwu';
import CookiePopUp from './components/CookiePopUp';

const App = () => {
  return (
    <div>
      <CookiePopUp />
      <div className='w-full max-w-[1440px] mx-auto bg-white'>
        <Header />
        <Hero />
        <Features />
        <NewItems />
        <Wwu />
        <FeaturesSecond />
        <Contact />
        <Testimonial />
        <Newsletter />                  
      </div>
      <div className='w-[100vw] bg-primary left-0'>
        <Footer />
      </div> 
    </div>
    
  );
};

export default App;
