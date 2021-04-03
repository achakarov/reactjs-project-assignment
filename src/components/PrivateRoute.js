import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useGlobalContext();

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
