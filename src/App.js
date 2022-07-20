import "./App.css";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import ForgotPassword from '../src/components/Login/forgot_password';
import ResetPassword from '../src/components/Login/reset_password';
import Layout from "../src/components/shared/Layout";
import ProfileIndex from "./components/Admin/MyProfile";


function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getCookie("espUser") ? <Layout /> : <Redirect to="/login" />
    }
  />
);

const Authenticated = () => (
  <>
   <PrivateRoute />
  </>
);

const NotAuthenticated = () => (
  <Route path="/login" render={(props) => <Login {...props} />} />
);

export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
        {/* <Route
            component={ProfileIndex}
            exact
            path="/profile"
          /> */}
          <Route exact path="/login" component={NotAuthenticated} />
          <Route
            component={ForgotPassword}
            exact
            path="/forgot-password"
          />
          <Route
            component={ResetPassword}
            exact
            path="/reset-password"
          />
          
          <Route component={Authenticated} /> No match route
        </Switch>
      </Router>
    );
  }
}

