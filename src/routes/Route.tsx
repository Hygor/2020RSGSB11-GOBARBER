import React, { FC, ComponentType } from 'react';
import { Route as DefaulRoute, RouteProps, Redirect } from 'react-router-dom';

import { useAuth } from '../stores/auth';

interface PrivateProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: FC<PrivateProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <DefaulRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
