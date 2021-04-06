import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { logout } from '../services/userServices';
import ReturnUserInfo from './ReturnUserInfo';

function Navbar() {
  const { user } = useGlobalContext();

  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">The Cook Book</h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/">
            Welcome, {user ? `${user.email}` : 'Guest'}!
          </Link>
          <ReturnUserInfo user={user} logout={logout} />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
