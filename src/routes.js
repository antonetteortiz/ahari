import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import FeaturesPage from './pages/FeaturesPage.js';
import CoverPage from './pages/CoverPage.js';
import Cover2Page from './pages/Cover2Page.js';
import CarouselPage from './pages/CarouselPage.js';


export default (
  <Route path="/" component={App}>

      <IndexRoute component={FeaturesPage} />
      <Route path="/feature" component={FeaturesPage} />
      <Route path="/cover" component={CoverPage} />
      <Route path="/carousel" component={CarouselPage} />
      <Route path="/cover2" component={Cover2Page} />

  </Route>
);
