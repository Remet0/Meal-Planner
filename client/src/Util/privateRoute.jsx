import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import verifyUser from './verifyUser';

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

export default PrivateRoute;
