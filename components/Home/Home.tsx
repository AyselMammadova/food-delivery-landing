'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero';
import Restaurant from './Restaurant/Restaurant';
import Category from './Category/Category';
import HowItWorks from './HowItWorks/HowItWorks';
import About from './About/About';
import Feature from './Feature/Feature';
import Review from './Review/Review';
import MobileApp from './MobileApp/MobileApp';

const Home = () => {

  useEffect(() => {
    const initAOS = async() => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      })
    };

    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Restaurant />
      <Category />
      <HowItWorks />
      <About />
      <Feature />
      <Review />
      <MobileApp />
    </div>
  )
}

export default Home;