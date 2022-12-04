import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";


function App(){
  return(
  <>
   <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/Navbar" componenent={Navbar}/>
      </Switch>
  </Router>
   
  </>
  );
}

  

export default App;
