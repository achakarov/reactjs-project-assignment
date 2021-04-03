import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { user } = useGlobalContext();

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        user && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
