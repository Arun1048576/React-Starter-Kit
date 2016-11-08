import React              from 'react'
import {Route}            from 'react-router'
import {createStore}      from 'redux'

import {reducerCreator}   from '../helpers/reducer'
import globalReducers     from '../reducers/globalReducers'

const reducerEnhancer     = (typeof window != 'undefined' && window.devToolsExtension)? window.devToolsExtension() : (f => f)
const initalState         = (typeof window != 'undefined' && window._state) ? window._state : {}

const initialReducer      = reducerCreator({}, globalReducers)
const store               = createStore(initialReducer, initalState, reducerEnhancer)

export {store};

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

const startComponent = (Component, callback) => {
  store.dispatch({
    type : 'INITIALIZE_APP'
  })
  const Element   = Component.default
  const Reducer   = Component.reducer
  const Action    = Component.action

  // TODO : Replace the previous Component Reducer with this Reducer
  // TODO : Call Reducer.INITALIZE_ROUTE to get Ready for the component
  // TODO : Action.initAction if present then resolve it and then call the following callback

  callback(null, Element)
}

export default (
  <Route  path="/" 
          getComponent={(nextState, callback)=> {
            require.ensure([], (require)=> {
            startComponent(require('../components/Tagger/index'), callback)
          }, 'Tagger')
    }}
  />
)
