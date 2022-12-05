import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Signup from "./components/pages/Signup";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home";


function App(){
  return(
  <>
   <Router>
    <Navbar/>
      <Switch>
        <Route path='/'  exact component={Home}/>
      </Switch>
      
  </Router>   
  </>
  );
}

  

export default App;
