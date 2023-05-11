import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './styles/App.css';

// pages and components
import Header from './components/Header';
import Home from './pages/Home';
import Employee from './pages/Employee';
import OneEmployee from './pages/OneEmployee';

function App() {



  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/" element={<Home />}
        />
        <Route
          path="/anstallda" element={<Employee />}
        />
        <Route
          path="/anstallda/:id" element={<OneEmployee />}
        />
      </Routes >
    </>

  );
}

export default App;
