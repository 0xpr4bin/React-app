import React ,{useState}from "react";
import '../../App.css';
import Navbar from "../Navbar";
import { Login } from "./Login";
import { Signup } from "./Signup";
import Footer from "../Footer";
import Section from "../Section";

function Home(){
  const [currentForm,setCurrentForm]=useState('Login');
  const toggleForm=(formName)=>{
    setCurrentForm(formName);

  }
  return(
   <>   
      <Section/> 
      {

        currentForm === "Login" ?  <Login onFormSwitch={toggleForm}/>:<Signup onFormSwitch={toggleForm} />
        
      }
      <Footer/>
</>
  );
  }

export default Home;