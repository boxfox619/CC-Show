import React from 'react'
import SlideContext from './editor/context/SlideContext'
import store from '../store';
import { Provider  } from 'react-redux';

class App extends React.Component{
  render(){
    return (
      <Provider store = {store}>
      <SlideContext/>
      </Provider>
    );
  }

}

export default App;
