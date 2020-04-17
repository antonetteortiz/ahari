import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import FeaturesPage from './pages/FeaturesPage.js';
//  import CoverPage from './pages/CoverPage.js';
import Cover2Page from './pages/Cover2Page.js';
import Cover3Page from './pages/Cover3Page.js';
import Cover4Page from './pages/Cover4Page.js';
import Cover5Page from './pages/Cover5Page.js';
import BeANannyPage from './pages/BeANannyPage.js';
import FindANannyPage from './pages/FindANannyPage.js';
import CarouselPage from './pages/CarouselPage.js';
import VisionPage from './pages/VisionPage.js';

//  <Route path="/cover" component={CoverPage} />

export default (
  <Route path="/" component={App}>

      <IndexRoute component={Cover5Page} />
      <Route path="/feature" component={FeaturesPage} />
      <Route path="/carousel" component={CarouselPage} />
      <Route path="/cover2" component={Cover2Page} />
      <Route path="/cover3" component={Cover3Page} />
      <Route path="/cover4" component={Cover4Page} />
      <Route path="/cover5" component={Cover5Page} />
      <Route path="/be" component={BeANannyPage} />
      <Route path="/find" component={FindANannyPage} />
      <Route path="/vision" component={VisionPage} />
      <Route path="/home/:section" component={Cover2Page} />

  </Route>
);
