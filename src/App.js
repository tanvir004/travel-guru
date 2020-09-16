import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import CoxHotel from './component/CoxHotel/CoxHotel';
import Registration from './component/Registration/Registration';

function App() {
  return (
    
      <div>
        <Header></Header>
        <Login></Login>
        <CoxHotel></CoxHotel>
        <Registration></Registration>
      </div>

  );
}

export default App;
