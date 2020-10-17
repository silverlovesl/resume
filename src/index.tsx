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
import { StringUtils } from './utils/StringUtils';
import { cookieService } from './services/cookie.service';

let defaultLang = cookieService.language || StringUtils.browserLanguage();
let antLang: any = jaJP;
if (defaultLang) {
  if (defaultLang === 'zh') {
    antLang = zhCN;
    defaultLang = 'zh';
  } else if (defaultLang === 'en') {
    antLang = enUS;
    defaultLang = 'en';
  }

  cookieService.language = defaultLang;
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
