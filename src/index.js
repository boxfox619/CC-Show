import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import Editor from 'src/containers/show-editor';
import ShowList from 'src/containers/show-list';
import SlideShow from 'src/containers/slide-show';
import { Provider } from 'react-redux';
import store from './store';

function renderAppInElement(el) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <div>
          <Route component={Editor} exact path="/"/>
          <Route component={Editor} exact path="/editor"/>
          <Route component={ShowList} exact path="/show"/>
          <Route component={SlideShow} exact path="/show/play"/>
        </div>
      </Router>
    </Provider>, el);
}


document
  .querySelectorAll('.__react-root')
  .forEach(renderAppInElement)
