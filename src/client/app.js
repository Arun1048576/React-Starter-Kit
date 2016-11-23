import React                          from 'react'
import ReactDOM                       from 'react-dom'
import {Router, Link, browserHistory} from 'react-router'
import {Provider}                     from 'react-redux'

import routes, {store}                from '../app/routes'

window.onload = () =>{
  startReactRouter()
  store.dispatch({
    type : 'INITIALIZE_APP'
  })
}

function startReactRouter() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
    , document.getElementById('main-content')
  )  
}