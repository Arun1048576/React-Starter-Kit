import _                  from 'underscore'
import React              from 'react'
import {Route}            from 'react-router'
import {createStore}      from 'redux'

import {reducerCreator}   from '../helpers/reducer'
import globalReducers     from '../reducers/globalReducers'

// Configuring Store
const reducerEnhancer     = (typeof window != 'undefined' && window.devToolsExtension)? window.devToolsExtension() : (f => f)
const initalState         = (typeof window != 'undefined' && window._state) ? window._state : {}
const initialReducer      = reducerCreator({}, globalReducers)
const store               = createStore(initialReducer, initalState, reducerEnhancer)

export {store};

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

const startComponent = (Component, callback) => {
  const state     = store.getState()
  const Reducer   = Component.Reducer
  if(Reducer) {
    const newReducer = reducerCreator(state, _.extend({}, globalReducers, Reducer));
    store.replaceReducer(newReducer)
    store.dispatch({
      type : 'INITIALIZE_ROUTE'
    })
  }

  const renderComponent = () => {
    const Element   = Component.default
    callback(null, Element)
  }

  const Action    = Component.Action
  if(Action) {
    Action(store.dispatch, state).then(()=> {
      renderComponent()
    })
  } else {
    renderComponent()
  }
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
