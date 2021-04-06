import React from 'react';
import { Link } from 'react-router-dom';

function ReturnUserInfo({ user, logout }) {
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
  }

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
export default ReturnUserInfo;
