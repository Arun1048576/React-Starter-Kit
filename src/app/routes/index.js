import React from 'react';
import {Route} from 'react-router';

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

export default (
  <Route  
    path="/" 
    getComponent={(nextState, callback)=> {
      require.ensure([], (require)=> {
        const Component = require('../components/Tagger/index').default;
        callback(null, Component);
      }, 'Tagger')
    }}
  />
)
