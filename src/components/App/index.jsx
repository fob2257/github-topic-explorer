import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import TopicsPage from '../../pages/Topics';
import NotFoundPage from '../../pages/NotFound';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={TopicsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
