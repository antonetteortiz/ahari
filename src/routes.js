import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import FeaturesPage from './pages/FeaturesPage.js';
import CoverPage from './pages/CoverPage.js';
import Cover2Page from './pages/Cover2Page.js';
import Cover3Page from './pages/Cover3Page.js';
import Cover4Page from './pages/Cover4Page.js';
import CarouselPage from './pages/CarouselPage.js';
import VisionPage from './pages/VisionPage.js';


export default (
  <Route path="/" component={App}>

      <IndexRoute component={Cover2Page} />
      <Route path="/feature" component={FeaturesPage} />
      <Route path="/cover" component={CoverPage} />
      <Route path="/carousel" component={CarouselPage} />
      <Route path="/cover2" component={Cover2Page} />
      <Route path="/cover3" component={Cover3Page} />
      <Route path="/cover4" component={Cover4Page} />
      <Route path="/vision" component={VisionPage} />
      <Route path="/home/:section" component={Cover2Page} />

  </Route>
);
