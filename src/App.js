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
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();




function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});


 
  return (
    


<UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
  
        <Router>
        <p style={{color:'#ffc107'}}><img className="userLogo" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt=""/>{loggedInUser.email}</p>
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
          <PrivateRoute path="/coxhotels">
            <CoxHotel></CoxHotel>
          </PrivateRoute>
          <Route path="/sreemangalbooking">
            <SreemangalBooking></SreemangalBooking>
          </Route>
          <Route path="/sundarbanbooking">
            <SundarbanBooking></SundarbanBooking>
          </Route>
          <PrivateRoute path="/sreemangalhotels">
            <SreemangalHotels></SreemangalHotels>
          </PrivateRoute>
          <PrivateRoute path="/sundarbanhotels">
            <SundarbanHotels></SundarbanHotels>
          </PrivateRoute>
          
          
         
        </Switch>
      </Router>
     
      </UserContext.Provider>

      

  );
}

export default App;
