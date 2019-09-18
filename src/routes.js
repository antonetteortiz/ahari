import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import FeaturesPage from './pages/FeaturesPage.js';
import CoverPage from './pages/CoverPage.js';


export default (
  <Route path="/" component={App}>

      <IndexRoute component={FeaturesPage} />
      <Route path="/feature" component={FeaturesPage} />
      <Route path="/cover" component={CoverPage} />

  </Route>
);
