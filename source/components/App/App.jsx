import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Home from '../Home/Home.jsx'
import Login from '../Login/Login.jsx'
import SignUp from '../SignUp/SignUp.jsx'
import Document from '../Document/Document.jsx'
import CreateDocument from '../CreateDocument/CreateDocument.jsx'

const Main = () => (
  <CookiesProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/LogIn" component={Login}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/Document" component={Document}/>
        <Route exact path="/Create" component={CreateDocument}/>
      </Switch>
    </Router>
  </CookiesProvider>
)

export default Main
