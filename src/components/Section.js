import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function Section() {
  return (
    <div className='hero-container'>
      <h1>Welcome </h1>
      <p>to the online token system</p>
    
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

export default Section;