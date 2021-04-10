import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import SingleRecipeDetails from './pages/SingleRecipeDetails';
import Error from './pages/Error';
import Register from './pages/Register';
import Login from './pages/Login';
import EditRecipe from './pages/EditRecipe';
import CreateRecipe from './pages/CreateRecipe';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import CustomErrorBoundary from './components/CustomErrorBoundary';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <CustomErrorBoundary>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={Register}
            path="/register"
          />
          <PublicRoute restricted={true} component={Login} path="/login" />
          <PrivateRoute exact component={CreateRecipe} path="/recipe/create" />
          <PrivateRoute
            exact
            component={SingleRecipeDetails}
            path="/recipe/details/:id"
          />
          <PrivateRoute exact component={EditRecipe} path="/recipe/edit/:id" />
          <PrivateRoute exact component={MyProfile} path="/my-profile" />

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </CustomErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
