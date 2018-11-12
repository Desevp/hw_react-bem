import React from 'react';
import ReactDOM from 'react-dom';
import MobileDetect from 'mobile-detect';
import './index.css';
import './Common/Styles/fonts.scss';
import AppMobile from './App@mobile';
import AppDesktop from './App@desktop';


import * as serviceWorker from './serviceWorker';

const md = new MobileDetect(window.navigator.userAgent);
const mobile = md.mobile();

ReactDOM.render(
  mobile === 'mobile' ? <AppMobile /> : <AppDesktop />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
