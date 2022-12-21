import React from 'react';
import '../App.css';
import './Section.css';

function Section() {
  return (
    <div className='hero-container'>
      <h1>Welcome </h1>
      <p>to the online  ticket system</p>
    
      <div className='hero-btns'>
        <button onSubmit={()=>{'/Signp'}} className='btn'>
          CREATE ACCOUNT
    
        </button>
      </div>
    </div>
  );
}

export default Section;