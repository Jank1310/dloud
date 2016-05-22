import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App.jsx';
import Setup from './components/Setup.jsx';
import Home from './components/Home.jsx';

const routes = (
  <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/setup" component={Setup}/>
  </Route>
);

export default routes;
