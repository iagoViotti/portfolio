import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import pageContext from '../Context/pageContext';

function Header() {
  const { page, setPage } = useContext(pageContext);
  return (
    <header
      id='header'
    >
      <div
        id="header-links"
      >
        <Link
          to={'/'}
          id='welcome-link'
          className='header-link'
          onClick={() => setPage('home')}
        >
          Home
        </Link>
        <Link
          to={'/projects'}
          id='projects link'
          className='header-link'
          onClick={() => setPage('projects')}
        >
          Projects
        </Link>
        <Link
          to={'/contact'}
          id='contact-link'
          className='header-link'
          onClick={() => setPage('contact')}
        >
          Contact
        </Link>
      </div>
      <h1>
        Iago Viotti
      </h1>
    </header>
  );
}

export default Header;
