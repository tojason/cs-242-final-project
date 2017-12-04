import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home.jsx'
import Login from '../Login/Login.jsx'
import SignUp from '../SignUp/SignUp.jsx'
import Document from '../Document/Document.jsx'

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/SignUp" component={SignUp}/>
      <Route exact path="/Document" component={Document}/>
    </Switch>
  </Router>
)

export default Main
