import React from 'react';
import { Route } from 'react-router-dom'; //, Redirect
import PropTypes from 'prop-types';

export const PrivateRouteComponent = ({
  component: Component,
  login,
  addRoute,
  exact,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        <Component {...props} exact={exact} addRoute={addRoute} />
        // localStorage.getItem('session') ? (
        //   <Component {...props} exact={exact} addRoute={addRoute} />
        // ) : (
        //   <Redirect to={login} />
        // )
      }
    />
  );
};

PrivateRouteComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func, PropTypes.node]),
  login: PropTypes.string,
  exact: PropTypes.bool,
  addRoute: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
PrivateRouteComponent.defaultProps = {
  component: undefined,
  login: '/accounts/login',
  addRoute: undefined,
  exact: undefined,
};
