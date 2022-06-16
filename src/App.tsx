import './App.css';

import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/dashboard/DashBoard';
import Home from './home';
import React from 'react';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
      
  );
}

export default App;
