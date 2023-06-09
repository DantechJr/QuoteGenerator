import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to = '/' className='navbar-logo'>
            Incognito<i class="fa-solid fa-user-secret"></i>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar