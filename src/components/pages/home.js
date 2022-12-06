import React from 'react';
import '../../App.css';
import HeroSection from '../Section';
import Footer from '../Footer';
import Signup from './Signup';

function Home() {
  return (
    <>
      <HeroSection />
      <Signup/>
      <Footer />
    </>
  );
}

export default Home;
