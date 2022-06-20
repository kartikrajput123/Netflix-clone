import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignIn from './SignIn.js';
import LandingPage from './LandingPage.js';

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/landing" element={<LandingPage/>}/>
          </Routes>
      </div>
  );
}

export default App;
