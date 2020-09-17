import React, { useState } from 'react';
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
    //  eifula eikhane call korcen keno? dekhar jonne korechilam r header ta to show koratei hobe taiok wait koren
      // <div>
      //<Header></Header>
      //   <Home></Home>
      //   <Login></Login>
      //   <CoxHotel></CoxHotel>
      //   <Registration></Registration>
      

// thik ace? ji vai login ta ki kaj kore ekhn?hmm
// thik ace? ji vai, baki gula to same vabei dile hobe taina?. mone koren navbar holo global ,eijonno navbar sobsomoy router er vitor hobe kintu switch er baire. ar jegula route kore niye jaben oigula switch er vetor route kore path diye dilei hobe.ok vaiyhik ace
//  ok bye vaia, ok vaia thank useRouteMatch// apnar header e ki navbar? ji ooo wait koren
        <Router>
          <Header></Header>
          {/* <Home></Home> */}
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
      // </div>

      

  );
}

export default App;
