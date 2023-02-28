import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div
        id='header'
      >
      <Link
        className='header-link'
      >
        Welcome
      </Link>
      <Link
        className='header-link'
      >
        Projects
      </Link>
      <Link
        className='header-link'
      >
        Contact
      </Link>
      </div>
    );
  }
}

export default Header;
