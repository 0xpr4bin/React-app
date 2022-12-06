import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/home";
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup";


function App(){
  return(
  <>
   <Router>
    <Navbar/>
      <Switch>
        <Route path='/'  exact component={Home}/>
        <Route path='/Signup' exact  component={Signup}/>
      </Switch>
      
  </Router>   
  </>
  );
}

  

export default App;
