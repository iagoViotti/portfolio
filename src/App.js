import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import pageContext from './Context/pageContext';
import './App.css';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import linkedinLogo from './img/social-links/linkedinLogo.png';
import instagramLogo from './img/social-links/instagramLogo.png'
import gmailLogo from './img/social-links/gmailLogo.png';
import gitHubLogo from './img/social-links/githubLogo.png'

function App() {
  const [page, setPage] = useState('home');
  return (
    <pageContext.Provider
      value={{ page, setPage }}
    >
      <main>
        <Header />
        <div
          id="infoWindow"
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div
          id="social-icons"
        >
          <Link
            to='https://www.linkedin.com/in/iagoviotti/'
          >
            <img
              className='social-logo'
              src={linkedinLogo}
              alt='svg linkedin logo'
            />
          </Link>
          <Link
            to='https://github.com/iagoViotti'
          >
            <img
              className='social-logo'
              src={gitHubLogo}
              alt='svg linkedin logo'
            />
          </Link>
          <Link
            to='https://www.instagram.com/iagoviotti/'
          >
            <img
              className='social-logo'
              src={instagramLogo}
              alt='svg linkedin logo'
            />
          </Link>
          <Link>
            <img
              className='social-logo'
              src={gmailLogo}
              alt='svg linkedin logo'
            />
          </Link>
        </div>
      </main>
    </pageContext.Provider>
  );
}

export default App;
