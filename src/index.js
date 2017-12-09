import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, IndexRoute } from 'react-router-dom';
import Editor from './components/Editor';
import ShowList from './components/ShowList';
import SlideShow from './components/SlideShow';
import AssetEditor from './components/asset_editor';

const APPS = {
  Editor,
  ShowList,
  SlideShow
};

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
