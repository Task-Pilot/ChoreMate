import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegistrationPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
