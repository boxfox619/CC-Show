import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';
import ShowList from './components/ShowList';

const APPS = {
  Editor,
  ShowList
};

function renderAppInElement(el) {
  var App = APPS[el.id];
  if (!App) return;

  // get props from elements data attribute, like the post_id
  const props = Object.assign({}, el.dataset);
  ReactDOM.render(<App {...props} />, el);
}

document
  .querySelectorAll('.__react-root')
  .forEach(renderAppInElement)
