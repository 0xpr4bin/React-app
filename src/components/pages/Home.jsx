import React ,{useState}from "react";
import '../../App.css';
import { Login } from "./Login";
import { Signup } from "./Signup";
import Section from "../Section";

function Home(){
  const [currentForm,setCurrentForm]=useState('Login');
  const toggleForm=(formName)=>{
    setCurrentForm(formName);

  }
  return(
   <> 
    <div className="home">
      <Section/> 
      {

        currentForm === "Login" ?  <Login onFormSwitch={toggleForm}/>:<Signup onFormSwitch={toggleForm} />
        
      }
     
      </div> 
</>
  );
  }

export default Home;