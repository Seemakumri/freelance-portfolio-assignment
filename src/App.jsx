
import React from 'react';
import NavBar from './component/NavBar';
import HeroSection from './Banner/HeroSection';
import Expertise from './component/Expertise';
import Works from './component/Works';
import Experience from './component/Experience';
import Blog from './component/Blog';
import Testimonial from './component/Testimonial';
import FaqSection from './component/FaqSection';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Expertise/>
      <Works/>
      <Experience/>
      <Blog/>
      <Testimonial/>
      <FaqSection/>
      <Footer/>
    </div>
  );
};

export default App;
