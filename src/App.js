import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import CoxHotel from './component/CoxHotel/CoxHotel';
import Registration from './component/Registration/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './component/Home/Home';
import News from './component/News/News';
import CoxBookingField from './CoxBookingField/CoxBookingField';
import SreemangalBooking from './component/SreemangalBooking/SreemangalBooking';
import SundarbanBooking from './component/SundarbanBooking/SundarbanBooking';
import SreemangalHotels from './component/SreemangalHotels/SreemangalHotels';
import SundarbanHotels from './component/SundarbanHotels/SundarbanHotels';



function App() {

 
  return (
    


<div>
        <Router>
          <Header></Header>
          
        <Switch>
         
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/coxbookingfield">
            <CoxBookingField></CoxBookingField>
          </Route>
          <Route path="/coxhotels">
            <CoxHotel></CoxHotel>
          </Route>
          <Route path="/sreemangalbooking">
            <SreemangalBooking></SreemangalBooking>
          </Route>
          <Route path="/sundarbanbooking">
            <SundarbanBooking></SundarbanBooking>
          </Route>
          <Route path="/sreemangalhotels">
            <SreemangalHotels></SreemangalHotels>
          </Route>
          <Route path="/sundarbanhotels">
            <SundarbanHotels></SundarbanHotels>
          </Route>
          
          
         
        </Switch>
      </Router>
     
      </div>

      

  );
}

export default App;
