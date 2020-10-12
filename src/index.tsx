import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'ant-design-style-sumamry/dist/ant-design-style-summary.min.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import jaJP from 'antd/es/locale/ja_JP';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/ja';

moment.locale('ja');

console.log(process.env.REACT_APP_API_ENDPOINT);

ReactDOM.render(
  <ConfigProvider locale={jaJP}>
    <BrowserRouter>
      <Route component={App} path="/" />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
);

// serviceWorker.unregister();
