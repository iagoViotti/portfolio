import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import pageContext from './Context/pageContext';
import './App.css';
import Projects from './pages/Projects';

function App() {
  const [page, setPage] = useState('home');
  return (
    <pageContext.Provider
    value={{page, setPage}}
    >
      <main>
        <Header />
        <div
          id="infoWindow"
        >
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />            
          </Routes>
        </div>
      </main>
    </pageContext.Provider>
  );
}

export default App;
