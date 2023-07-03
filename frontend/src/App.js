import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './styles/App.css';

// pages and components
import Header from './components/Header';
import Home from './pages/Home';
import Employee from './pages/Employee';
import OneEmployee from './components/OneEmployee';
import NewEmployee from './components/NewEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import TimeRaport from './pages/TimeRaport';

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
        <Route
          path="/anstallda/skapa" element={<NewEmployee />}
        />
        <Route
          path="/anstallda/uppdatera/:id" element={<UpdateEmployee />}
        />
        <Route
          path="/timrapport" element={<TimeRaport />}
        />
      </Routes >
    </>

  );
}

export default App;
