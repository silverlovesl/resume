import React from 'react';
import { RouteComponentProps } from 'react-router';
import './App.scss';
import RouterTemplate from './routes/RouterTemplate';

type PageProps = {} & RouteComponentProps;

const App: React.FC<PageProps> = props => {
  return (
    <div id="app" className="app">
      <RouterTemplate {...props}></RouterTemplate>
    </div>
  );
}

export default App;
