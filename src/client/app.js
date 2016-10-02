import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Link, browserHistory} from 'react-router';
import routes from '../app/routes';

window.onload = () =>{
  startReactRouter()
}

function startReactRouter() {
  ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>
    , document.getElementById('main-content')
  )  
}