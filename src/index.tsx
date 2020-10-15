import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'ant-design-style-sumamry/dist/ant-design-style-summary.min.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import jaJP from 'antd/es/locale/ja_JP';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import { ConfigProvider } from 'antd';

let lang = window.navigator.language;
let langCode = 'ja';
let antLang: any = jaJP;
if (lang) {
  if (lang.indexOf('zh') >= 0) {
    antLang = zhCN;
    langCode = 'zh';
  } else if (lang.indexOf('en') >= 0) {
    antLang = enUS;
    langCode = 'en';
  }
}

ReactDOM.render(
  <ConfigProvider locale={antLang}>
    <BrowserRouter>
      <Route component={App} path="/" />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
);

// serviceWorker.unregister();
