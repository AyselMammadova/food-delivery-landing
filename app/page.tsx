import About from '@/components/Home/About/About';
import Category from '@/components/Home/Category/Category';
import Feature from '@/components/Home/Feature/Feature';
import Home from '@/components/Home/Home'
import HowItWorks from '@/components/Home/HowItWorks/HowItWorks';
import MobileApp from '@/components/Home/MobileApp/MobileApp';
import Restaurant from '@/components/Home/Restaurant/Restaurant';
import Review from '@/components/Home/Review/Review';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Home />
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

export default HomePage;