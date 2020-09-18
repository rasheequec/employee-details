import React from 'react';
import './App.css';
import { Router, Switch, Redirect } from 'react-router-dom';
import PublicRoute from './route/public-route';
import PrivateRoute from './route/private-route';
import UserForm from './components/form';
import SignUp from './pages/signup';
import Login from './pages/login';
import { history } from './helpers/history';
function App() {
  return (
    <div className="App">
        <Router history={history}>
        <Switch>
          <Redirect exact from="/" to="login" />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={SignUp} />
          {/* <PrivateRoute path="/home" component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
