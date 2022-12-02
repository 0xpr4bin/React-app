import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";


function App(){
 
  return (
  
   <Router>
    <Switch>
    <Route exact path="/Signup" component={Signup}/>
      <Route exact path="/Login" component={()=><Login authorized={false}/>}/>
      <Route exact path="/Profile" component={() =><Profile authorized={false}/>}/>
      
      </Switch>
   </Router>
  
  );
}

export default App;
