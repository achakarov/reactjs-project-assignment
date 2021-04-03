import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SingleRecipeDetails from './pages/SingleRecipeDetails';
import Error from './pages/Error';
import Register from './pages/Register';
import Login from './pages/Login';
import EditRecipe from './pages/EditRecipe';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateRecipe from './pages/CreateRecipe';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PrivateRoute exact component={CreateRecipe} path="/recipe/create" />
        <PrivateRoute
          exact
          component={SingleRecipeDetails}
          path="/recipe/details/:id"
        />
        <PrivateRoute exact component={EditRecipe} path="/recipe/edit/:id" />
        <PublicRoute restricted={true} component={Register} path="/register" />
        <PublicRoute restricted={true} component={Login} path="/login" />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
