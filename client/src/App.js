import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { HomePage, LoginPage, UserPage } from './Pages/index';
import { verifyUser } from './lib/index';

import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (isAuth === false && loaded === false) {
    verifyUser({ ...rest }).then(result => {
      if (result === true) {
        setIsAuth(true);
        setLoaded(true);
      } else {
        setIsAuth(false);
        setLoaded(true);
      }
    });
  }

  return (
    <Route
      {...rest}
      render={props =>
        loaded === true ? (
          isAuth ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect to="/login" />
          )
        ) : (
          <div>loading</div>
        )
      }
    />
  );
};

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
