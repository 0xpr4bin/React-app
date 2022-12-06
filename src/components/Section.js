import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Welcome to the online token system</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CREATE ACCOUNT
    
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;