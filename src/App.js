import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import pageContext from './Context/pageContext';
import './App.css';

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
          </Routes>
        </div>
      </main>
    </pageContext.Provider>
  );
}

export default App;
