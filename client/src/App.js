import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, UserPage } from './Pages/index';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/user/:username" component={UserPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
