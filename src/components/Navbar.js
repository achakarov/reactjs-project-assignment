import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { logout } from '../services/userServices';

function Navbar() {
  const { user } = useGlobalContext();

  //Да изнеса в отделен компонент
  const returnUserInfo = (user) => {
    if (user !== null) {
      return (
        <>
          <Link className="nav-link" to="/recipe/create">
            Share recipe
          </Link>
          <Link className="nav-link" to="/" onClick={logout}>
            Logout
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </>
      );
    }
  };

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
          {returnUserInfo(user)}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
