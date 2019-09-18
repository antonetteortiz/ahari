import React from 'react';
import ReactDOM from 'react-dom';
//  import './index.css';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import routes from './routes';
import { Router, browserHistory } from 'react-router';


//  ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
  <div>
    <Router history={browserHistory} routes={routes} />
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
