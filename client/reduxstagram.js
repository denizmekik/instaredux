import React from 'react';

import { render } from 'react-dom';
import { Router, Route, browerserHistory, IndexRoute} from 'react-router'

//import css
import css from './styles/style.styl';

import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

const routes = (
  <Router history={browerserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(route, document.getElementById('root'));



