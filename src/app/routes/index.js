import React from 'react';
import {Route} from 'react-router';

const startComponent = (Component, callback) => {
  const Element   = Component.default;
  const Reducer   = Component.reducer;
  const Action    = Component.action;

  // TODO : Replace the previous Component Reducer with this Reducer
  // TODO : Call Reducer.INITALIZE_ROUTE to get Ready for the component
  // TODO : Action.initAction if present then resolve it and then call the following callback

  callback(null, Element);
}

export default (
  <Route  path="/" 
          getComponent={(nextState, callback)=> {
            require.ensure([], (require)=> {
            startComponent(require('../components/Tagger/index'), callback);
          }, 'Tagger')
    }}
  />
)
