import React from 'react';
import { UserContext } from './../../App';
import {useContext} from 'react'
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children, ...rest}) => {
    const [signedInUser] = useContext(UserContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        signedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;