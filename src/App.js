import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Navbar from "./pages/Navbar";


function App(){
 
  return (
  
   <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/Navbar" componenent={Navbar}/>
      <Route exact path="/Signup" component={Signup}/>
      <Route exact path="/Login" component={()=><Login authorized={false}/>}/>
      <Route exact path="/Profile" component={() =><Profile authorized={false}/>}/>
      
      </Switch>
   </Router>
  
  );
}

export default App;
