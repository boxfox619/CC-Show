import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import Editor from 'views/ShowEditor';
import ShowList from 'views/ShowList';
import SlideShow from 'views/SlideShow';
import AssetEditor from 'views/AssetEditor';
import { Provider } from 'react-redux';
import store from './store';

function renderAppInElement(el) {
  ReactDOM.render(
      <Provider store = {store}>
        <Router history = {browserHistory}>
          <div>
            <Route exact path = "/" component = {Editor}/>
            <Route exact path = "/editor" component = {Editor}/>
            <Route exact path = "/editor/asset" component = {AssetEditor}/>
            <Route exact path = "/show" component = {ShowList}/>
            <Route exact path = "/show/play" component = {SlideShow}/>
          </div>
        </Router>
      </Provider>, el);
}


document
  .querySelectorAll('.__react-root')
  .forEach(renderAppInElement)
