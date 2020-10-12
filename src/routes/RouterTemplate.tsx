// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React, { Suspense } from 'react';
import _ from 'lodash';
import publicRoutes from './public-routes';
import { Switch, Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import PublicLayout from '../components/PublicLayout/PublicLayout';

type PageProps = {} & RouteComponentProps;

const RouterTemplate: React.FC<PageProps> = prop => {
  return (
    <Switch>
      <Suspense fallback={<h1>Loading...</h1>}>
        {_.map(publicRoutes, (route: any, key: string) => {
          const { component, path } = route;
          return <Route exact key={key} path={path} render={route => <PublicLayout component={component} {...route} />} />;
        })}
      </Suspense>
    </Switch>
  );
};

export default withRouter(RouterTemplate);
