import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import Services from "./components/pages/Services";
import {Login}  from "./components/pages/Login";
import Profile from "./components/TicketSystem/Profile"
import MovieTicket from "./components/TicketSystem/MovieTicket";


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
          <Route  path='/movieticket' component={MovieTicket}/>
        </Switch>
    </Router>
    </>
  );
  }

export default App;
