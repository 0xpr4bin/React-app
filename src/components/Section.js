import React from 'react';
import '../App.css';
import './Section.css';
import { useHistory } from "react-router-dom";

function Section() {
  const  history = useHistory();
  return (
    <div className='hero-container'>
      <h1>BOOK </h1>
      <h2>ticket for your favourite movies.</h2>
    
      <div className='hero-btns'>
        <button onClick={()=>{history.push('/login')}} className='btn'>
          CREATE ACCOUNT
    
        </button>
      </div>
    </div>
  );
}

export default Section;