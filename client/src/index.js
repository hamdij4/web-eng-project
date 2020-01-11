import React from 'react';
import ReactDOM from 'react-dom';
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import "./assets/demo/demo.css";
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
