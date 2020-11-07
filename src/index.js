import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AppUnsupported from './AppUnsupported';
import './preload';

function OS() {
  const ua = navigator.userAgent;
  const isWindowsPhone = /(?:Windows Phone)/.test(ua);
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
  const isAndroid = /(?:Android)/.test(ua);
  const isFireFox = /(?:Firefox)/.test(ua);
  const isChrome = /(?:Chrome|CriOS)/.test(ua);
  const isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
  const isPhone = /(?:iPhone)/.test(ua) && !isTablet;
  const isPc = !isPhone && !isAndroid && !isSymbian;
  return {
    isChrome,
    isTablet,
    isPhone,
    isAndroid,
    isPc,
  };
}

const os = OS();

const date = new Date('Sat Nov 08 2020 00:00:00 GMT+0800 (中国标准时间)').getTime();

if (Date.now() >= date) {
  if (!os.isPhone && !os.isAndroid) {
    // eslint-disable-next-line react/jsx-filename-extension
    ReactDOM.render(<App />, document.getElementById('root'));
  } else {
    ReactDOM.render(<AppUnsupported />, document.getElementById('root'));
  }
} else {
  ReactDOM.render((<div />), document.getElementById('root'));
}
