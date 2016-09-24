import React from 'react';

import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

//import css
import css from './styles/style.styl';

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import { Provider } from 'react-redux';
import store, { history } from './store';



const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(routes, document.getElementById('root'));



