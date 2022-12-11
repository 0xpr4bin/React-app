import React ,{useState}from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Section from "./components/Section";


function App(){
  
  return(
    <>
     <Router>
      
      <Home/>
    
    </Router>
    </>
  );
  }

export default App;
