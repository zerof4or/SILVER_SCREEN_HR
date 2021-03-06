import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PrivateRouteComponent } from './Sections';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
// import loadable from '@loadable/component';
import { UnderConstructionandDevelopmentComponent } from '../UnderConstructionandDevelopmentComponent/UnderConstructionandDevelopmentComponent';
// const NotFoundLayout = loadable(() => import('../../Layouts/NotFound/NotFound.Layout'));

export const SwitchRouteComponent = ({ routes }) => {
  const [route, setRoute] = useState(routes.find((f) => f.default));
  const history = useHistory();
  useEffect(() => {
    history.listen(() => {
      setRoute(routes.find((f) => f.default));
    });
  }, [history, routes]);
  return (
    <Switch>
      {routes.map((value, key) => {
        if (!value.isRoute) return null;
        if (value.authorize) {
          return (
            <PrivateRouteComponent
              path={value.layout + value.path}
              component={value.component}
              key={`privateRoute${key + 1}`}
              addRoute={value.addRoute}
              exact={value.isExact}
            />
          );
        }

        return (
          <Route
            path={value.layout + value.path}
            component={value.component}
            exact={value.isExact}
            key={`privateRoute${key + 1}`}
          />
        );
      })}
      <Redirect exact from={route.layout} to={route.layout + route.path} />
      <Route path="*" component={UnderConstructionandDevelopmentComponent} />
    </Switch>
  );
};

SwitchRouteComponent.propTypes = {
  routes: PropTypes.instanceOf(Array).isRequired,
};
