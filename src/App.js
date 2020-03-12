import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './HomePage/Dashbaord/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './HomePage/Dashbaord/Login';
import Register from './HomePage/Dashbaord/Register'
import Pagination from './HomePage/Dashbaord/Pagination';



export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path = '/pagination' component={Pagination} />
        </Switch>
      </div>
    );
  }
}
