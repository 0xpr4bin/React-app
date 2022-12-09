import React ,{useState}from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Services from "./components/pages/Services"
import Contacts from "./components/pages/Contacts"


function App(){
  
  return(
    <>
     <Router>
      <Navbar/>
      <Section />
      <Signup/>
      <Login/>
      <Footer/>
    </Router>
  </>
  );    
  }
  
export default App;
