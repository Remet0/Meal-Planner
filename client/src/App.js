import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, LoginPage, UserPage } from './Pages/index';
import { PrivateRoute } from './Util/index';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <PrivateRoute
          path="/user/:username"
          component={UserPage}
        ></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
