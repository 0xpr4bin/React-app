import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import Services from "./components/pages/Services";
import {Login}  from "./components/pages/Login";
import Profile from "./components/TicketSystem/Profile";
import ForgotPasswordForm from './components/pages/forgotpass';
import ChangePasswordForm from "./components/pages/changepass";
import { Signup } from "./components/pages/Signup";
import SingleMovie from "./components/TicketSystem/SingleMovie";


function App(){
  
  return(
    <>
     <Router>
     <Navbar/>
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route  path='/contacts' component={Contacts}/>
          <Route  path='/services' component={Services}/>
          <Route  path='/login' component={Login}/>
          <Route  path='/signup' component={Signup}/>
          <Route  path='/movie/:id' component={SingleMovie}/>
          <Route  path='/profile' component={Profile}/>
          <Route  path='/forgot-password' component={ForgotPasswordForm}/>
          <Route  path='/change-password' component={ChangePasswordForm}/>
          <Route path='/*' component={Error}/>
          
        </Switch>
    </Router>
    </>
  );
  }

export default App;
